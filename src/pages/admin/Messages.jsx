import {MdSwapVert} from 'react-icons/md'
import {AiFillEye} from 'react-icons/ai'
import * as SERVICE from "../../services"
import axios from "axios"
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context"
import moment from "moment/moment";

const Messages = () => {
    const { state, setState } = useContext(Context)

    const [messages, set_messages] = useState([])
    useEffect(() => {
        setState({ ...state, loading_screen:true})
        let config = SERVICE.fetch_data()
        axios(config).then(function (response) {
            setState({ ...state, loading_screen:false})
            set_messages(response['data']['messages'])

            console.log(messages)
        })
        .catch(function (error) {
            setState({ ...state, loading_screen:false})
            console.log(error);
        });
    },[])
    return (
        <div className="admin_page">

            <div className="table_wrapper">
                <table className="table">
                    <thead>
                        <tr>
                        <th>Date/Time <MdSwapVert/></th>
                        <th>From <MdSwapVert/></th>
                        <th>Message <MdSwapVert/></th>
                        {/* <th>Action <MdSwapVert/></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map((element, index) => {
                            return <tr key={element['_id']} className="door_row">
                                <td>
                                    <p>{moment(element['createdAt']).toDate().toDateString()}</p>
                                    <p>{moment(element['createdAt']).toDate().toTimeString().substring(0,5)}</p>
                                </td>
                                <td>{element['phone']}</td>
                                <td>{element['message']}</td>
                                {/* <td style={{cursor:'pointer'}}>
                                    <AiFillEye size={24}/>
                                </td> */}
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
export default Messages
