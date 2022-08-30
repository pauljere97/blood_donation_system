const SideBar = () => {
    return (
        <div className="side_bar">
            <div className="side_top">
                <h1>BDW</h1>
            </div>
            <div className="side_bar_navs">
                <button>Dashboard</button>
                <button>Requests</button>
                <button>Donors</button>
                <button>Settings</button>
                <button>Logout</button>
            </div>
        </div>
    )
}
export default SideBar