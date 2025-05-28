import "./Layout.css"
import { Sidebar } from "../sidebar/Sidebar"
import { Header } from "../header/Header"
export const Layout = () => {
    return(
        <>
        
        <main>
            <Sidebar></Sidebar>
            <div className="create-employee">
                <Header title="Create Employee"></Header>
            </div>
        </main>
                </>
    )
}