import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "./InputForm";
import AuthenticateButton from "./AuthenticateButton";
import authStore from "../store/AuthStore";

function RegisterForm(){
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");

    const navigate = useNavigate();
    const register = authStore((state) => state.register);

    // Validasi email (jika bukan email)
    const hasCorrectFormat = (email) => {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    }

    // Validasi password=
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
    const handleRegister = () => {
        if (!fullName || !email || !password || !phoneNo) {
            alert("Semua kolom harus diisi!");
            return;
        }else if (!hasCorrectFormat(email)) {
            alert("Format Email Tidak Valid");
            return;
        } else if (!minLength(password)) {
            alert("Password harus terdiri dari setidaknya 8 karakter.");
            return;
        } else if (!hasSpecialChar(password)) {
            alert("Password harus terdiri dari setidaknya 1 karakter khusus");
            return;
        } else if (!hasUpperCase(password)) {
            alert("Password harus terdiri dari setidaknya 1 huruf kapital");
            return;
        }
        // } else if (hasCorrectFormat && minLength(password) && hasSpecialChar(password) && hasUpperCase(password) && nama !== null && noTelp !== null){
        //     const newUser = { fullName, email, password, phoneNo };
        //     register(newUser);
        //     alert("Akun Berhasil Didaftarkan!");
        //     navigate("/login");
        // } 
        const newUser = { fullName, email, password, phoneNo };
        register(newUser);
        
        alert("Registrasi berhasil! Silakan login.");
        navigate("/login"); // Redirect to login page
    };

    return(
        <div className="w-full max-w-[400px] flex flex-col space-y-6 items-center">
            <InputForm type="name" placeholder="Nama Lengkap" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <InputForm type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputForm type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <InputForm type="phoneNo" placeholder="No Hp" onChange={(e) => setPhoneNo(e.target.value)} />
            <AuthenticateButton label="Daftar" onClick={handleRegister}/>
        </div>
    )
}

export default RegisterForm