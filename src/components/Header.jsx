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
                <Link to={'/register'}>
                    <button className={location.pathname === '/register' ? 'nav_btns nav_active' : 'nav_btns'}>Donate</button>
                </Link>
                <Link to={'/find'}>
                    <button className={location.pathname === '/find' ? 'nav_btns nav_active' : 'nav_btns'}>Find a donor</button>
                </Link>
                <Link to={'/login'}>
                    <button className={location.pathname === '/login' ? 'nav_btns nav_active' : 'nav_btns'}>Login</button>
                </Link>
            </nav>
        </div>
    )
}
export default Header
