import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div className="header">
            <h1>BDW</h1>
            <nav className="nav">
                <Link to={'/'}>
                    <button>Home</button>
                </Link>
                <button>About</button>
                <Link to={'/login'}>
                    <button>Login</button>
                </Link>
            </nav>
        </div>
    )
}
export default Header
