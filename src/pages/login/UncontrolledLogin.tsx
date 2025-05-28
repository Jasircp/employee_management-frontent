import "./UncontrolledLogin.css";
import { LoginInput } from "../../components/loginInput/LoginInput";
import { useRef, useEffect } from "react";
import kvLogo from "../../assets/images/kv-logo.png"
import kvLoginImg from "../../assets/images/kv-login.jpeg"
import { Button } from "../../components/button/Button";

const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
 const clearButtonRef = useRef<HTMLButtonElement | null>(null)

  const clearUsername = () => {
      if(usernameRef.current)
        usernameRef.current.value="";
      if(clearButtonRef.current)
        clearButtonRef.current.disabled = true
  }

  const clearButtonDisable = () => {
    if(!clearButtonRef.current || !usernameRef.current) return;

    if(usernameRef.current.value.length > 0){
      clearButtonRef.current.disabled = false;
      clearButtonRef.current.onclick = clearUsername
    }
    else{
      clearButtonRef.current.disabled = true;
    }
  }

  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
  }, []);

  return (
    <div className="content">
      <div className="pattern-side">
        <div className="pattern" />
        <div className="circle-large">
          <div className="circle-inner">
            <img src={kvLoginImg} alt="KV Login" className="login-image" />
          </div>
        </div>
      </div>
      <div className="login-side">
        <div className="login-content">
          <img className="logo" src={kvLogo} alt="KV Logo" />
          <form>
            <LoginInput
              id="login-username-input"
              label="Username"
              inputref={usernameRef}
              name="username"
              onChange={clearButtonDisable}
              endAdornment = {
                <button disabled={true} type="button" onClick={clearUsername} ref={clearButtonRef}>Clear</button>
              }
            />

            <LoginInput id="login-password-input" label="Password" />

            <Button type="submit" description="Log in" className="login-button">
              
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;