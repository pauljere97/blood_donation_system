import {MdDashboard} from 'react-icons/md'
const Dashboard = () => {
    let donors = [1, 2, 3, 4, 5]
    return (
        <div className="admin_page">
            <div className="dashboard_cards">
                {donors.map((element, index) => {
                    return <div key={index} className="dashcard">
                        <p>Requests</p>
                        <div>
                            <MdDashboard/>
                            <p>{Math.ceil(Math.random() * 20)}</p>
                        </div>
                    </div>
                })}
            </div>
            
        </div>
    )
}
export default Dashboard
