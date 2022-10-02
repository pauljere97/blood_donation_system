import { Link } from "react-router-dom"
import {useLocation} from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    console.log('pathname', location.pathname);
    return (
        <div className="header">
            <h1>ZN<span style={{color:'#EB4D4A'}}>BTS</span></h1>
            <nav className="nav">
                <Link to={'/'}>
                    <button style={{color:'#EB4D4A'}} className={location.pathname === '/' ? 'nav_btns nav_active' : 'nav_btns'}>Home</button>
                </Link>
                <button className={location.pathname === '/about' ? 'nav_btns nav_active' : 'nav_btns'}>About</button>
                <button className={location.pathname === '/contact' ? 'nav_btns nav_active' : 'nav_btns'}>Contact</button>
                <Link to={'/login'}>
                    <button className={location.pathname === '/login' ? 'nav_btns nav_active' : 'nav_btns'}>Login</button>
                </Link>
            </nav>
        </div>
    )
}
export default Header
