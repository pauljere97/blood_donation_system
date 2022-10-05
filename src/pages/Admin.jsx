import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"
import { useParams } from 'react-router-dom'
import Donors from "./admin/Donors";
import Requests from "./admin/Request";
import Dashboard from "./admin/Dashboard";
import Broadcast from "./admin/Broadcast";
import Messages from "./admin/Messages";
import Settings from "./admin/Settings";
import Donations from "./admin/Donations";
const Admin = () => {
    let { page } = useParams();
    return (
        <div className="admin">
            <SideBar/>
            <section className="admin_main">
                <TopBar/>
                {
                    page === 'dashboard' ? <Dashboard/> : 
                    page === 'requests' ? <Requests/> : 
                    page === 'donors' ? <Donors/> : 
                    page === 'messages' ? <Messages/> : 
                    page === 'broadcast' ? <Broadcast/> : 
                    page === 'donations' ? <Donations/> : 
                    page === 'settings' ? <Settings/> : ''
                }
            </section>
        </div>
    )
}
export default Admin
