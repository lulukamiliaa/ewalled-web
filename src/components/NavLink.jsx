import { Link } from 'react-router-dom';

function NavLink({link}){
    return(
        <Link to={link.href} className="px-6 py-9 text-base font-normal hover:font-bold hover:text-[#0061FF]">
            {link.name}
        </Link>
    )
}
export default NavLink