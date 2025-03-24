import SideImage from "../components/SideImage";
import logo from "../assets/group 7.svg" 
import LoginForm from "../components/LoginForm";

function LoginPage(){
    return (
        <div className="flex h-screen w-full relative">
            {/* Left Section*/}
            <div className="w-1/2 flex flex-col justify-center items-center relative">
                {/* Logo */}
                <img
                    src={logo}
                    alt="Walled Logo"
                    className="mb-10 w-[200px] h-[80px] top-[18vh] md:w-[20vw] md:max-w-[200px] max-h-[80px]"
                />
                
                <div className="w-full max-w-[400px] flex flex-col">
                    {/* input form */}
                    <LoginForm />

                    {/* text below button */}
                    <p className="mt-6 text-black text-base">
                        Belum punya akun? <a href="/register" className="text-[#0061FF] font-semibold">Daftar di sini</a>
                    </p>
                </div>

            </div>

            {/* Right Section */}
            <SideImage/>

        </div>
    )

}

export default LoginPage;