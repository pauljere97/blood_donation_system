import { MdPersonalInjury } from 'react-icons/md'
import { BiMessageDots, BiDonateBlood, BiBroadcast } from 'react-icons/bi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import * as SERVICE from "../../services"
import { useEffect } from "react"
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios"

const Dashboard = () => {
    const { state, setState } = useContext(Context)
    
    const [requests, set_requests] = useState(0)
    const [donors, set_donors] = useState(0)
    const [donations, set_donations] = useState(0)
    const [messages, set_messages] = useState(0)
    const [broadcasts, set_broadcasts] = useState(0)

    useEffect(() => {
        let config = SERVICE.fetch_data()
        close_loading(true)
        axios(config).then(function (response) {
            set_requests(response['data']['requests'].length)
            set_donors(response['data']['donors'].length)
            let amount = 0
            response['data']['donations'].forEach(element => {
                amount += +element['amount']
            })
            set_donations(amount)
            set_messages(Math.ceil(Math.random()*200))
            set_broadcasts(Math.ceil(Math.random()*200))
            close_loading(false)
        })
        .catch(function (error) {
            console.log(error);
            close_loading(false)
        });
    }, [])

    const close_loading = (type) => {
        setState({ ...state, loading_screen:type})
    }

    return (
        <div className="admin_page">
            <div className="dashboard_cards">
                <div className="dashcard">
                    <p>Donors</p>
                    <div>
                        <BsFillPersonLinesFill />
                        <p>{donors}</p>
                    </div>
                </div>
                <div className="dashcard">
                    <p>Requests</p>
                    <div>
                        <MdPersonalInjury />
                        <p>{requests}</p>
                    </div>
                </div>
                <div className="dashcard">
                    <p>Donations</p>
                    <div>
                        <BiDonateBlood />
                        <p>K{donations.toFixed(2)}</p>
                    </div>
                </div>
                <div className="dashcard">
                    <p>Messages</p>
                    <div>
                        <BiMessageDots />
                        <p>{messages}</p>
                    </div>
                </div>
                <div className="dashcard">
                    <p>Broadcasts</p>
                    <div>
                        <BiBroadcast />
                        <p>{broadcasts}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dashboard
