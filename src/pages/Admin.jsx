import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"
const Admin = () => {
    
    return (
        <div className="admin">
            <SideBar/>
            <section className="admin_main">
                <TopBar/>
            </section>
        </div>
    )
}
export default Admin
