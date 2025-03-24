import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "./InputForm";
import AuthenticateButton from "./AuthenticateButton";
import authStore from "../store/AuthStore";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = authStore((state) => state.login);

  // Validasi email (jika bukan email)
  const hasCorrectFormat = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  }

  // Validasi password
  const minLength = (password) => {
    return password.length >= 8;
  }
  const hasSpecialChar = (password) => {
    return /[!@#$%^&*(),.?":{}|<>]/.test(password);
  }
  const hasUpperCase = (password) => {
    return /[A-Z]/.test(password);
  }

  //arrow function
  const handleLogin = () => {
    
    if (!hasCorrectFormat(email) || !minLength(password) || !hasSpecialChar(password) || !hasUpperCase(password)) {
        alert("Email atau Password tidak sesuai");
        return;
    } 

    const success = login(email, password);
    if (success) {
      alert("Berhasil login");
      navigate("/");
    } else {
        alert("Email atau Password tidak sesuai");
    }


  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  

  return (
    <div className="w-full max-w-[400px] flex flex-col space-y-6 items-center">
      <InputForm type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
      <InputForm type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <AuthenticateButton label="Login" onClick={handleLogin}/>
    </div>
  );
}

export default LoginForm;
