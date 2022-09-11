import { Link } from "react-router-dom"
const SideBar = () => {
    return (
        <div className="side_bar">
            <div className="side_top">
                <h1>BDW</h1>
            </div>
            <div className="side_bar_navs">
                <Link to={'/admin/dashboard'}>
                    <button>Dashboard</button>
                </Link>
                <Link to={'/admin/requests'}>
                    <button>Requests</button>
                </Link>
                <Link to={'/admin/donors'}>
                    <button>Donors</button>
                </Link>
                <Link to={'/admin/messages'}>
                    <button>Messages</button>
                </Link>
                <Link to={'/admin/broadcast'}>
                    <button>Broadcast</button>
                </Link>
                <Link to={'/admin/settings'}>
                    <button>Settings</button>
                </Link>
                <Link to={'/'}>
                    <button>Logout</button>
                </Link>
            </div>
        </div>
    )
}
export default SideBar