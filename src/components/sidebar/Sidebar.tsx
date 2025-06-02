import logo from "../../assets/images/kv-logo.png"
import kvIcon from "../../assets/images/icon.svg"
import logoutIcon from "../../assets/images/out.png"
import "./Sidebar.css"
import { useNavigate } from "react-router-dom"

export const Sidebar = () => {
    const navigate = useNavigate()
    const viewEmployeeList = ()=>{
        navigate("")
    }

    const handleLogOut = ()=> {
        localStorage.setItem("token", "");
        navigate("/login");
    }
    return (
        <div className="sidebar">
                <div className="logo">
                    <img src={logo} className="kv-logo"/>
                </div>
                <div className="sidebar-items" onClick={viewEmployeeList}>
                <img src={kvIcon}/>
                <p>Employee List</p>  
                </div>
                <div className="sidebar-items logout" onClick={handleLogOut}>
                    <img src={logoutIcon}/>
                    <p>LogOut</p>
                </div>
        </div>
    )
}