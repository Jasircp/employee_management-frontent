import logo from "../../assets/images/kv-logo.png"
import kvIcon from "../../assets/images/icon.svg"
import "./Sidebar.css"
import { useNavigate } from "react-router-dom"

export const Sidebar = () => {
    const navigate = useNavigate()
    const viewEmployeeList = ()=>{
        navigate("")
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
        </div>
    )
}