import "./Layout.css"
import { Sidebar } from "../sidebar/Sidebar"
import { Outlet } from "react-router-dom"
export const Layout = () => {
    return(
        <>
        
        <main>
            <Sidebar></Sidebar>
            <div className="create-employee">
                <div className="topbar"></div>
                <Outlet/>
            </div>
        </main>
                </>
    )
}