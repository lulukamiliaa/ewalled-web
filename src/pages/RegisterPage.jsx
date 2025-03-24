import SideImage from "../components/SideImage";
import logo from "../assets/group 7.svg" 
import RegisterForm from "../components/RegisterForm";

function RegisterPage(){
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
                    <RegisterForm />

                    {/* text below button */}
                    <p className="mt-6 text-black text-base">
                        Sudah punya akun? <a href="/login" className="text-[#0061FF] font-semibold">Login di sini</a>
                    </p>
                </div>

            </div>

            {/* Right Section */}
            <SideImage/>

        </div>
    )

}

export default RegisterPage;