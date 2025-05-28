import "./Login.css"
import loginImage from "../../assets/images/kv-login.jpeg"
import logo from "../../assets/images/kv-logo.png"
import { Button } from "../../components/button/Button"
import { LoginInput } from "../../components/loginInput/LoginInput"
import { useState, useEffect, useRef } from "react"
import useMousePosition from "../../hooks/useMousePosition"


export const Login = () => {
    let [userName, setUsername] = useState(localStorage.getItem('username') || "");
    let [password, setPassword] = useState('');
    const usernameRef = useRef<HTMLInputElement>(null);
    // let mousePosition = useMousePosition();
    let [showPassword, setShowPassword] = useState(false);

    const handleLogIn = ()=> {
        if(userName == "username" && password == "password")
            localStorage.setItem("isLoggedIn", "true");
        else{
            alert("Invalid Credentials");
        }
    }

    // let [msg, setmsg] = useState('');

    // useEffect(()=> {
    //     if(userName.length < 8)
    //         setmsg("Username should be atleast 8 chars");
    //     else{
    //         setmsg('');
    //     }

    // },[userName])

    useEffect(()=> {
        if(usernameRef.current)
            usernameRef.current.focus();
    },[])
    
    useEffect(() => {
        localStorage.setItem('username',userName)

    },[userName])

    return(
        <>
        <div className="container">
            <div className="left-panel">
            <img src={loginImage} className="profile"/>
            </div>
            <div className="right-panel">
               {/* <div>
                 <p>X-coordinate {mousePosition.x}</p>
                <p>Y-coordinate {mousePosition.y}</p>
               </div> */}
            <div className="login-box">
                <img src={logo} className="logo"/>
                
                <form>
                <LoginInput type="text" id="username" name="username" placeholder="" label="Username"
                value={userName}
                onChange={(event:any)=> setUsername(event.target.value)}
                inputref={usernameRef}
                endAdornment={<button onClick={()=> setUsername('')}>Clear</button>}></LoginInput>
                <LoginInput type={showPassword?'text':'password'} id="password" name="password" placeholder="" label="Password"
                value={password}
                onChange={(event:any)=> setPassword(event.target.value)}></LoginInput>
                <div>
                    <label>Show Password</label>
                    <input type="checkbox" id="showpassword" name="showpassword" onClick={()=> setShowPassword(!showPassword)}></input>
                </div>
                
                <Button className="login-button"  description="LogIn"
                onClick={handleLogIn}></Button>
                </form>
            </div>
            </div>
        </div>
        </>
    )
}