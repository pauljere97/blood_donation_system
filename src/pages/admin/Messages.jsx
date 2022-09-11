import {MdSwapVert} from 'react-icons/md'

const Messages = () => {
    let donors = [1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div className="admin_page">

            <div className="table_wrapper">
                <table className="table">
                    <thead>
                        <tr>
                        <th><input type="checkbox" name="" id="" /> <MdSwapVert/></th>
                        <th>Date/Time <MdSwapVert/></th>
                        <th>From <MdSwapVert/></th>
                        <th>Message <MdSwapVert/></th>
                        <th>Action <MdSwapVert/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {donors.map((element, index) => {
                            return <tr key={index} className="door_row">
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>12th Jun 2022</td>
                                <td>0977665544</td>
                                <td>Ad anim ipsum proident laboris amet commodo anim labore anim officia do nisi officia.</td>
                                <td>Read</td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
export default Messages
