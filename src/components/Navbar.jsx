import logo from "../assets/group 7.svg" 
import sunImage from "../assets/sun.svg" 
import NavLink from "./NavLink";
import { useNavigate } from "react-router-dom";
import authStore from "../store/AuthStore";

function Navbar({navLinks}) {
    const navigate = useNavigate();
    const { user, isAuthenticated, logout } = authStore();

    return (
        <nav className="bg-white h-[94px] flex justify-between items-center">
            {/* Logo */}
            <img src={logo} width="163.2px" height="40px" alt="Logo" />

            {/* Navigation Links */}
            <div className="flex justify-center items-center">

                {navLinks.map((link, index) =>
                        link.name === "Sign Out" && isAuthenticated ? (
                            // Jika "Sign Out" dan user sudah login, jadikan tombol logout
                            <button
                                key={index}
                                onClick={logout}
                            >
                                {link.name}
                            </button>
                        ) : (
                            // Jika bukan "Sign Out", tampilkan sebagai NavLink biasa
                            <NavLink key={index} link={link} />
                        )
                    )}

                {/* Garis pemisah (desktop-only) */}
                <hr className="hidden md:inline-block h-[40px] border-l border-gray-400 mx-4" />

                {/* Icon Sun */}
                <img src={sunImage} className="w-[26px] h-[26px] ml-[30px]" alt="Sun Icon" />
            </div>
        </nav>
    );
}

export default Navbar;
