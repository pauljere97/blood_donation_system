import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai'
import {RiMenuUnfoldFill} from 'react-icons/ri'
const Header = () => {
    const location = useLocation();
    // console.log('pathname', location.pathname);
    const [menu, set_menu] = useState(true)
    return (
        <div className="header">
            <Link to={'/'}>
                <h1>ZN<span style={{ color: '#EB4D4A' }}>BTS</span></h1>
            </Link>
            <nav className="nav" style={menu ? {display:'flex'} : {}}>
                <Link to={'/'}>
                    <button style={{ color: '#EB4D4A' }} className={location.pathname === '/' ? 'nav_btns nav_active' : 'nav_btns'}>Home</button>
                </Link>
                <Link to={'/register'}>
                    <button className={location.pathname === '/register' ? 'nav_btns nav_active' : 'nav_btns'}>Donate</button>
                </Link>
                <Link to={'/find'}>
                    <button className={location.pathname === '/find' ? 'nav_btns nav_active' : 'nav_btns'}>Request</button>
                </Link>
                <Link to={'/contact'}>
                    <button className={location.pathname === '/contact' ? 'nav_btns nav_active' : 'nav_btns'}>Contact</button>
                </Link>
                <Link to={'/login'}>
                    <button className={location.pathname === '/login' ? 'nav_btns nav_active' : 'nav_btns'}>Login</button>
                </Link>
            </nav>
            <button className="menu_icon" onClick={()=>set_menu(!menu)}>
               {menu ? <RiMenuUnfoldFill /> : <AiOutlineMenu /> }
            </button>
        </div>
    )
}
export default Header
