import logo from "../../assets/images/kv-logo.png"
import kvIcon from "../../assets/images/icon.svg"
import "./Sidebar.css"

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={logo} className="kv-logo"/>
            </div>
            <div className="sidebar-items">
              <img src={kvIcon}/>
              <p>Employee List</p>  
            </div>
        </div>
    )
}