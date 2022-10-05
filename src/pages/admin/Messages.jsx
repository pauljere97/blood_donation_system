import {MdSwapVert} from 'react-icons/md'
import {AiFillEye} from 'react-icons/ai'
const Messages = () => {
    let donors = [1, 2]
    return (
        <div className="admin_page">

            <div className="table_wrapper">
                <table className="table">
                    <thead>
                        <tr>
                        <th>Date/Time <MdSwapVert/></th>
                        <th>From <MdSwapVert/></th>
                        <th>Message <MdSwapVert/></th>
                        <th>Action <MdSwapVert/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {donors.map((element, index) => {
                            return <tr key={index} className="door_row">
                                <td>12th Jun 2022</td>
                                <td>0977665544</td>
                                <td>I would like to donate blood but i dont know where i need to go exactly to donate</td>
                                <td style={{cursor:'pointer'}}>
                                    <AiFillEye size={24}/>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
export default Messages
