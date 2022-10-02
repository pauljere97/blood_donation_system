import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';

const SideBar = () => {
    const location = useLocation();
    console.log('pathname', location.pathname);

    return (
        <div className="side_bar">
            <div className="side_top">
                <h1>ZN<span style={{ color: '#EB4D4A' }}>BTS</span></h1>
            </div>
            <div className="side_bar_navs">
                <Link to={'/admin/dashboard'}>
                    <button className={location.pathname === '/admin/dashboard' ? 'side_bar_navs_active' : ''}>Dashboard</button>
                </Link>
                <Link to={'/admin/requests'}>
                    <button className={location.pathname === '/admin/requests' ? 'side_bar_navs_active' : ''}>Requests</button>
                </Link>
                <Link to={'/admin/donors'}>
                    <button className={location.pathname === '/admin/donors' ? 'side_bar_navs_active' : ''}>Donors</button>
                </Link>
                <Link to={'/admin/messages'}>
                    <button className={location.pathname === '/admin/messages' ? 'side_bar_navs_active' : ''}>Messages</button>
                </Link>
                <Link to={'/admin/broadcast'}>
                    <button className={location.pathname === '/admin/broadcast' ? 'side_bar_navs_active' : ''}>Broadcast</button>
                </Link>
                {/* <Link to={'/admin/settings'}>
                    <button>Settings</button>
                </Link> */}
                <Link to={'/'}>
                    <button className={location.pathname === '/login' ? 'side_bar_navs_active' : ''}>Logout</button>
                </Link>
            </div>
        </div>
    )
}
export default SideBar