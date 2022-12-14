import { MdSwapVert } from 'react-icons/md'
import * as SERVICE from "../../services"
import {AiFillEye} from 'react-icons/ai'
import { useEffect, useState } from "react"
import { useContext } from "react";
import { Context } from "../../context/Context";

import axios from "axios"
const Requests = () => {
    const { state, setState } = useContext(Context)
    const [requests, set_requests] = useState([])
    
    useEffect(() => {
        let config = SERVICE.fetch_data()
        setState({ ...state, loading_screen:true})
        axios(config).then(function (response) {
            set_requests(response['data']['requests'])
            setState({ ...state, loading_screen:false})
        })
        .catch(function (error) {
            console.log(error);
            setState({ ...state, loading_screen:false})
        });
    },[])
    
    return (
        <div className="admin_page">
            <div className="table_wrapper">
                <table className="table">
                    <thead>
                        <tr>
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
                        {requests.map((element, index) => {
                            return <tr key={index} className="door_row">
                                <td>{element['firstname']}</td>
                                <td>{element['lastname']}</td>
                                <td>{element['type']}</td>
                                <td>{element['hospital']}</td>
                                <td>{element['units']}</td>
                                <td>{element['admin_date']}</td>
                                <td>{element['city']}</td>
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
export default Requests
