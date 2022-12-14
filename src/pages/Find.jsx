import Header from "../components/Header"
import Footer from "../components/Footer"
import * as SERVICE from "../services"
import axios from "axios"
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom"

const Find = () => {
    const { state, setState } = useContext(Context)
    const [input_page, set_input_page] = useState(1)
    const [error, set_error] = useState('')

    const change_step = (type) => {
        set_error('')
        if (type === 1) {
            if (input_page === 1) {
                if (!firstname) { set_error('Please fill in First name'); return; }
                if (!lastname) { set_error('Please fill in Last name'); return; }
                if (!sex) { set_error('Please fill in Sex'); return; }
                if (!dob) { set_error('Please fill in Date of Birth'); return; }
            }
            if (input_page === 2) {
                if (!number) { set_error('Please fill in Phone Number'); return; }
                if (!city) { set_error('Please fill in City'); return; }
                if (!address) { set_error('Please fill in Address'); return; }
                if (!hospital) { set_error('Please fill in Hospital'); return; }
            }
            if (input_page === 3) {
                if (!type) { set_error('Please fill in Blood Type'); return; }
                if (!units) { set_error('Please fill in Units'); return; }
                if (!admin_date) { set_error('Please fill in Adminitation Date'); return; }
                if (!reason) { set_error('Please fill in Reason'); return; }
            }
            if (input_page === 4) {
                if (!otp) { set_error('Please fill in One Time Pin'); return; }
            }
        }
        if (type === 1 && input_page < 5) {
            if(input_page === 3){
                send_code()
            }else if(input_page === 4){
                confirm_number()
            }else set_input_page(input_page + 1)
        }
        if (type === -1 && input_page > 1) {
            set_input_page(input_page - 1)
        }
    }

    const [firstname, set_firstname] = useState('')
    const [lastname, set_lastname] = useState('')
    const [sex, set_sex] = useState('M')
    const [dob, set_dob] = useState('')
    const [number, set_number] = useState('')
    const [city, set_city] = useState('')
    const [address, set_address] = useState('')
    const [hospital, set_hospital] = useState('NCH')
    const [type, set_type] = useState('A')
    const [units, set_units] = useState(1)
    const [admin_date, set_admin_date] = useState('')
    const [reason, set_reason] = useState('I will be undergoing a kidney transplant on the 13th of November, Dr John Doe has prescribed to secure 3 unites of blood for the operation to go through.')
    const [otp, set_otp] = useState('')

    const register = () => {
        if (!firstname) { alert('First name missing'); return }
        if (!lastname) { alert('Last name missing'); return }
        if (!sex) { alert('Sex missing'); return }
        if (!dob) { alert('D.O.B missing'); return }
        if (!number) { alert('Number missing'); return }
        if (!city) { alert('City missing'); return }
        if (!address) { alert('Address missing'); return }
        if (!hospital) { alert('Last Donation Address missing'); return }
        if (!type) { alert('Blood group missing'); return }
        if (!units) { alert('Units missing'); return }
        if (!admin_date) { alert('Administration Date missing'); return }
        if (!reason) { alert('Reason missing'); return }

        let payload = {
            firstname,
            lastname,
            sex,
            dob,
            number,
            city,
            address,
            hospital,
            type,
            units,
            admin_date,
            reason
        }
        setState({ ...state, loading_screen: true })
        let config = SERVICE.register_patient(payload)
        axios(config).then(function (response) {
            console.log(response)
            setState({ ...state, loading_screen: false })
            set_input_page(5)
        })
            .catch(function (error) {
                console.log(error);
                setState({ ...state, loading_screen: false })
                alert('something went wrong')
            });
    }

    const send_code = () => {
        if(number[0] === 0 || number[0] === '0'){
            let new_phone = '26' + number
            set_number(new_phone)
            return
        }
        setState({ ...state, loading_screen:true})
        let payload = {
            to:number,
            text:'Zambia National Blood Transfusion Service Verification Code: ',
        }
        let config = SERVICE.verify_number(payload)
        axios(config).then(function (response) {
            if(response['data']['result'] === 'failed'){
                alert(response['data']['message'])
            }else{
                set_input_page(4)
            }
            console.log(response)
            setState({ ...state, loading_screen:false})
        })
        .catch(function (error) {
            console.log(error);
            setState({ ...state, loading_screen:false})
        });
    }

    const confirm_number = () => {
        setState({ ...state, loading_screen:true})
        let payload = {
            to:number,
            code:otp,
        }
        let config = SERVICE.confirm_number(payload)
        axios(config).then(function (response) {
            if(response['data']['success']){
                register()
            }else{
                alert('Invalid or Expired Code, try again')
                setState({ ...state, loading_screen:false})
            }
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
            setState({ ...state, loading_screen:false})
        });
    }


    return (
        <div className="page">
            <Header />
            <section className="register_section2">
                <div>
                    <div className="text_side">
                        <h1 style={{ color: '#EB4D4A' }}>Find a Donor</h1>
                        <p>The ZNBTS keeps a list of potential donors. You can send a request to the Agency requesting for blood, the Agency will find a donor(s) that matches your blood type and needs.</p>
                        <Link to="/learn">
                            <button className="learn_more">Learn More Here</button>
                        </Link>
                    </div>
                    <div className="register_pad">
                        <div className="register_pad_top">
                            <p>Request</p>
                            <p>{input_page}/5</p>
                        </div>
                        <div style={input_page === 1 ? {} : { display: 'none' }}>
                            <p style={{ color: 'tomato' }}>{error}</p>
                            <div className="pad_inputs">
                                <label htmlFor="">First Name</label>
                                <input type="text" value={firstname} onChange={(e) => set_firstname(e.target.value)} />
                                <label htmlFor="">Last Name</label>
                                <input type="text" value={lastname} onChange={(e) => set_lastname(e.target.value)} />
                                <label htmlFor="">Sex</label>
                                <select value={sex} onChange={(e) => set_sex(e.target.value)}>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                                <label htmlFor="">DOB</label>
                                <input type="date" value={dob} onChange={(e) => set_dob(e.target.value)} />
                            </div>
                        </div>
                        <div style={input_page === 2 ? {} : { display: 'none' }}>
                            <p style={{ color: 'tomato' }}>{error}</p>
                            <div className="pad_inputs">
                                <label htmlFor="">Phone Number</label>
                                <input type="text" value={number} onChange={(e) => set_number(e.target.value)} />
                                <label htmlFor="">City</label>
                                <input type="text" value={city} onChange={(e) => set_city(e.target.value)} />
                                <label htmlFor="">Address</label>
                                <input type="text" value={address} onChange={(e) => set_address(e.target.value)} />
                                <label htmlFor="">Administering Clinic/Hospital</label>
                                <select value={hospital} onChange={(e) => set_hospital(e.target.value)}>
                                    <option value="NCH">Ndola Central Hopital</option>
                                    <option value="UTH">University Teaching Hispital</option>
                                    <option value="KGH">Kitwe General Hospital</option>
                                    <option value="KCH">Kabwe Central Hospital</option>
                                </select>
                            </div>
                        </div>
                        <div style={input_page === 3 ? {} : { display: 'none' }}>
                            <p style={{ color: 'tomato' }}>{error}</p>
                            <div className="pad_inputs">
                                <label htmlFor="">Blood type</label>
                                <select value={type} onChange={(e) => set_type(e.target.value)}>
                                    <option value="A">A</option>
                                    <option value="AB">AB</option>
                                    <option value="B">B</option>
                                    <option value="O">O</option>
                                </select>
                                <label htmlFor="">Units</label>
                                <input type="number" value={units} onChange={(e) => set_units(e.target.value)} />
                                <label htmlFor="">Date of administration</label>
                                <input type="date" value={admin_date} onChange={(e) => set_admin_date(e.target.value)} />
                                <label htmlFor="">Reason for Transfusion</label>
                                <textarea value={reason} onChange={(e) => set_reason(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div style={input_page === 4 ? {} : { display: 'none' }}>
                            <p style={{ color: 'tomato' }}>{error}</p>
                            <div className="pad_inputs">
                                <p>A Four Digit one time pin has being sent to you phone number. enter it below to confirm your request</p>
                                <label htmlFor="">Confirm OTP</label>
                                <input type="text" value={otp} onChange={(e) => set_otp(e.target.value)}/>
                            </div>
                        </div>
                        <div className="request_complete" style={input_page === 5 ? {} : { display: 'none' }}>
                            <h1 style={{ color: '#EB4D4A' }}>Request Complete</h1>
                            <p>You details have being registered</p>
                            <p>The agency will contact you when a match is found.</p>
                            <button onClick={() => set_input_page(1)}>Back</button>
                        </div>
                        <div className="register_bottom" style={input_page < 5 ? {} : { display: 'none' }}>
                            <button onClick={() => change_step(-1)}>Back</button>
                            <button onClick={() => change_step(1)}>Next</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default Find
