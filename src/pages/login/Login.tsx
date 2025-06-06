import "./Login.css"
import loginImage from "../../assets/images/kv-login.jpeg"
import logo from "../../assets/images/kv-logo.png"
import { Button } from "../../components/button/Button"
import { LoginInput } from "../../components/loginInput/LoginInput"
import { useState, useEffect, useRef } from "react"
import { useLoginMutation } from "../../api-service/auth/login.api"

import useLocalStorage from "../../hooks/useLocalStorage"
import { useNavigate } from "react-router-dom"


export const Login = () => {
    const [error, setError] = useState("")
    const [login, {isLoading}] = useLoginMutation();
    let [userName, setUsername] = useState("");
    let [password, setPassword] = useState("");
    const usernameRef = useRef<HTMLInputElement>(null);
    // let mousePosition = useMousePosition();
    let [showPassword, setShowPassword] = useLocalStorage("showPassord", false)
    const navigate = useNavigate();

    const handleLogIn = async ()=> {
        // const response = await login({email:userName, password: password});
        // if(response.data?.accessToken){
        //     localStorage.setItem("token", response.data.accessToken);
        //     navigate("/employees");
        // }
        // else{
        //     alert("Invalid Credentials")
        // }
        login({email:userName, password: password}).unwrap()
        .then((response) => {
            localStorage.setItem("token", response.accessToken);
            navigate("/employees");
        })
        .catch((error) => {
            setError(error.data.message);
        })
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
                endAdornment={<button disabled={(userName.length > 0 )? false:true} onClick={()=> setUsername('')}>Clear</button>}></LoginInput>
                <LoginInput type={showPassword?'text':'password'} id="password" name="password" placeholder="" label="Password"
                value={password}
                onChange={(event:any)=> setPassword(event.target.value)}></LoginInput>
                <div className="show-password">
                    <label>Show Password</label>
                    <input type="checkbox" id="showpassword" name="showpassword" checked={showPassword} onChange={(e)=> setShowPassword(e.target.checked)}></input>
                </div>
                <p className="error">{error}</p>
                
                <Button className="login-button" type="button" disabled={(userName.length > 0 && password.length > 0  && !isLoading)?false:true} description="LogIn"
                onClick={handleLogIn}></Button>
                </form>
            </div>
            </div>
        </div>
        </>
    )
}