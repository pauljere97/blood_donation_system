import {MdSwapVert} from 'react-icons/md'
import {AiFillEye} from 'react-icons/ai'
import { useEffect, useState } from "react"
import * as SERVICE from "../../services"
import * as HELPERS from "../../services/helpers"
import axios from "axios"

const Donors = () => {
    const [donors, set_donors] = useState([])
    useEffect(() => {
        let config = SERVICE.fetch_data()
        axios(config).then(function (response) {
            set_donors(response['data']['donors'])
        })
        .catch(function (error) {
            console.log(error);
        });
    },[])
    return (
        <div className="admin_page">
            <div className="table_wrapper">
                <table className="table">
                    <thead>
                        <tr>
                        <th>Name <MdSwapVert/></th>
                        <th>Surname <MdSwapVert/></th>
                        <th>Sex <MdSwapVert/></th>
                        <th>Age <MdSwapVert/></th>
                        <th>Type <MdSwapVert/></th>
                        <th>Location <MdSwapVert/></th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donors.map((element, index) => {
                            return <tr key={element['_id']} className="door_row">
                                <td>{element['firstname']}</td>
                                <td>{element['lastname']}</td>
                                <td>{element['sex'] === 'M' ? 'Male' : 'Female'}</td>
                                <td>{HELPERS.get_age(element['dob'])} years old</td>
                                <td>{element['blood_group']}</td>
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
export default Donors
