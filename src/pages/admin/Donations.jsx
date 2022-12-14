import {MdSwapVert} from 'react-icons/md'
// import {AiFillEye} from 'react-icons/ai'
import { useEffect, } from "react"
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import * as SERVICE from "../../services"
import * as HELPERS from "../../services/helpers"

import axios from "axios"
const Donations = () => {
    const { state, setState } = useContext(Context)
    const [donations, set_donations] = useState([])
    useEffect(() => {
        setState({ ...state, loading_screen:true})
        let config = SERVICE.fetch_data()
        axios(config).then(function (response) {
            setState({ ...state, loading_screen:false})
            set_donations(response['data']['donations'])
            console.log(response['data']['donations'])
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
                        <th>Amount <MdSwapVert/></th>
                        <th>Merchant <MdSwapVert/></th>
                        {/* <th>Action <MdSwapVert/></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {donations.map((element, index) => {
                            return <tr key={index} className="door_row">
                                <td>{HELPERS.get_date_time(element['createdAt']).date}<br/>{HELPERS.get_date_time(element['createdAt']).time}</td>
                                <td>{element['from'] || '-'}</td>
                                <td>K{(+element['amount']).toFixed(2)}</td>
                                <td>{element['merchant'] || '-'}</td>
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
export default Donations
