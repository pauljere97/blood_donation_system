import { MdSwapVert } from 'react-icons/md'
const Requests = () => {
    let donors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div className="admin_page">
            <div className="table_wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th><input type="checkbox" name="" id="" /> <MdSwapVert /></th>
                            <th>Name <MdSwapVert /></th>
                            <th>Surname <MdSwapVert /></th>
                            <th>Type <MdSwapVert /></th>
                            <th>Clinic/Hosp. <MdSwapVert /></th>
                            <th>Units <MdSwapVert /></th>
                            <th>Admin. Date <MdSwapVert /></th>
                            <th>Location <MdSwapVert /></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donors.map((element, index) => {
                            return <tr key={index} className="door_row">
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>Oliver</td>
                                <td>Twist</td>
                                <td>{Math.ceil(Math.random() * 10) % 2 === 0 ? 'B+' : 'A'}</td>
                                <td>{Math.ceil(Math.random() * 10) % 2 === 0 ? 'NCH' : 'ADH'}</td>
                                <td>{Math.ceil(Math.random() * 5)}</td>
                                <td>12th June 2022</td>
                                <td>Ndola</td>
                                <td>View</td>
                            </tr>
                        })}

                    </tbody>
                </table>

            </div>
        </div>
    )
}
export default Requests
