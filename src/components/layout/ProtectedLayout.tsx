import "./ProtectedLayout.css"
import { Sidebar } from "../sidebar/Sidebar"
import { Navigate, Outlet } from "react-router-dom"
export const ProtectedLayout = () => {

    const isLoggedIn = ()=>{
        const token = localStorage.getItem("token");
        if(token)
            return true;
    }
    if(!isLoggedIn()){
        return <Navigate to="/login" />
    }
    return(
  
        <main>
            <Sidebar></Sidebar>
            <div>
                <div className="topbar"></div>
                <Outlet/>
            </div>
        </main>
    )
}