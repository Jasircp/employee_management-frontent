import "./ProtectedLayout.css"
import { Sidebar } from "../sidebar/Sidebar"
import { Navigate, Outlet } from "react-router-dom"
export const ProtectedLayout = () => {

    const isLoggedIn = ()=>{
        const token = localStorage.getItem("isLoggedIn");
        return token === "true";
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