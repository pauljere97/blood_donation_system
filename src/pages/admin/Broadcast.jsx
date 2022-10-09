import * as SERVICE from "../../services"
import axios from "axios"
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context"
import moment from "moment/moment";

const Broadcast = () => {
    const { state, setState } = useContext(Context)

    const [phones, set_phones] = useState(['0966778270', '0950053127', '0969688081'])
    const [message, set_message] = useState('This Message is sent by the Zambia National Blood Transfusion Service to inform the general public of Chifubu constituency that a blood donation comoaign will be hosted at chifubu secondary school. Please attend to help save lives.')
    const [targets, set_targets] = useState('Ndola Residences')
    let donors = [1, 2]

    const [broadcasts, set_broadcasts] = useState([])
    useEffect(() => {
        setState({ ...state, loading_screen:true})
        let config = SERVICE.fetch_data()
        axios(config).then(function (response) {
            setState({ ...state, loading_screen:false})
            set_broadcasts(response['data']['broadcasts'])
            
            console.log(response['data']['broadcasts'])
        })
        .catch(function (error) {
            setState({ ...state, loading_screen:false})
            console.log(error);
        });
    },[])


    const send_broadcast = () => {
        let payload = {
            phones: JSON.stringify(phones),
            message: message,
            targets: targets,
        }
        setState({ ...state, loading_screen:true})
        let config = SERVICE.send_broadcast(payload)
        axios(config).then(function (response) {
            setState({ ...state, loading_screen:false})
            let bc = response['data']['data']
            let bc_array = broadcasts
            bc_array.push(bc)
            set_broadcasts(bc_array)
            console.log(bc_array)
        })
        .catch(function (error) {
            setState({ ...state, loading_screen:false})
            alert('something went wrong')
            console.log(error)
        });
    }
    return (
        <div className="admin_page">
            <div className="input_fields">
                <textarea value={message} onChange={(e)=> set_message(e.target.value)}></textarea>
                <button onClick={send_broadcast}>Send</button>
            </div>
            {broadcasts.map((element, index) => {
                return <div key={element['_id']} className="broadcast">
                    <div>
                        <p>{moment(element['createdAt']).toDate().toDateString()} - {moment(element['createdAt']).toDate().toTimeString().substring(0,5)}</p>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                        <p>{element['targets']}</p>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                        <p>{JSON.parse(element['phones']).length} Recipients</p>
                    </div>
                    <p>{element['message']}</p>
                </div>
            })}

        </div>
    )
}
export default Broadcast
