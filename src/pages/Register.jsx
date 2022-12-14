import Header from "../components/Header"
import Footer from "../components/Footer"
import * as SERVICE from "../services"
import axios from "axios"
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom"

const Register = () => {
    const { state, setState } = useContext(Context)

    const [input_page, set_input_page] = useState(1)
    const [req_page, set_req_page] = useState(1)
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
            }
        }


        if(type === 1 && input_page === 1){
            if(!firstname) {alert('First name missing'); return}
            if(!lastname) {alert('Last name missing'); return}
            if(!sex) {alert('Sex missing'); return}
            if(!dob) {alert('D.O.B missing'); return}
        }
        if(type === 1 && input_page === 2){
            if(!number) {alert('Number missing'); return}
            if(!city) {alert('City missing'); return}
            if(!address) {alert('Address missing'); return}
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
    const [last_donation, set_last_donation] = useState('')
    const [blood_group, set_blood_group] = useState('N/A')
    const [conditions, set_conditions] = useState('I have a sleep disorder called Insomnia that can make it hard to fall asleep, hard to stay asleep, and causes me to wake up too early and not be able to get back to sleep')
    const [otp, set_otp] = useState('')

    const register = () => {
        if(!firstname) {alert('First name missing'); return}
        if(!lastname) {alert('Last name missing'); return}
        if(!sex) {alert('Sex missing'); return}
        if(!dob) {alert('D.O.B missing'); return}
        if(!number) {alert('Number missing'); return}
        if(!city) {alert('City missing'); return}
        if(!address) {alert('Address missing'); return}

        let payload = {
            firstname,
            lastname,
            sex,
            dob,
            number,
            city,
            address,
            last_donation,
            blood_group,
            conditions
        }

        setState({ ...state, loading_screen:true})
        let config = SERVICE.register_donor(payload)
        axios(config).then(function (response) {
            setState({ ...state, loading_screen:false})
            set_input_page(5)
        })
        .catch(function (error) {
            setState({ ...state, loading_screen:false})
            alert('something went wrong')
            console.log(error);
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



    // const [amount, set_amount] = useState('')
    // const [from, set_from] = useState('')

    // const save_donation = (merchant) => {
    //     if(!amount) {alert('Amount missing'); return}
    //     if(!from) {alert('Phone missing'); return}
    //     let payload = {
    //         amount,
    //         from,
    //         merchant
    //     }
    //     setState({ ...state, loading_screen:true})
    //     let config = SERVICE.save_donation(payload)
    //     axios(config).then(function (response) {
    //         setState({ ...state, loading_screen:false})
    //         console.log(response)
    //         set_req_page(2)
    //     })
    //     .catch(function (error) {
    //         setState({ ...state, loading_screen:false})
    //         alert('something went wrong')
    //         console.log(error)
    //     });
    // }

    return (
        <div className="page">
            <Header />
            <section className="register_section2">
                <div>
                    <div className="text_side">
                        <h1 style={{color:'#EB4D4A'}}>Donate Blood</h1>
                        <p>You can register as a donor. The Agency will contact you when a need arises or when they are ready to collect blood in your Area. Your information will not be publicly available and you will remain anonymous as a donor.</p>
                        <Link to="/learn">
                        <button className="learn_more">Learn More Here</button>
                        </Link>
                    </div>
                    <div className="register_pad">
                        <div className="register_pad_top">
                            <p>Register</p>
                            <p>{input_page}/5</p>
                        </div>
                        <div style={input_page === 1 ? {} : { display: 'none' }}>
                            <p style={{ color: 'tomato' }}>{error}</p>
                            <div className="pad_inputs">
                                <label htmlFor="">First Name</label>
                                <input type="text" value={firstname} onChange={(e)=>set_firstname(e.target.value)}/>
                                <label htmlFor="">Last Name</label>
                                <input type="text" value={lastname} onChange={(e)=>set_lastname(e.target.value)}/>
                                <label htmlFor="">Sex</label>
                                <select value={sex} onChange={(e)=>set_sex(e.target.value)}>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                                <label htmlFor="">DOB</label>
                                <input type="date" value={dob} onChange={(e)=>set_dob(e.target.value)}/>
                            </div>
                        </div>
                        <div style={input_page === 2 ? {} : { display: 'none' }}>
                            <p style={{ color: 'tomato' }}>{error}</p>
                            <div className="pad_inputs">
                                <label htmlFor="">Phone Number</label>
                                <input type="text" value={number} onChange={(e)=>set_number(e.target.value)}/>
                                <label htmlFor="">City</label>
                                <input type="text" value={city} onChange={(e)=>set_city(e.target.value)}/>
                                <label htmlFor="">Address</label>
                                <input type="text" value={address} onChange={(e)=>set_address(e.target.value)}/>
                                <label htmlFor="">Last Donation</label>
                                <input type="date" value={last_donation} onChange={(e)=>set_last_donation(e.target.value)}/>
                            </div>
                        </div>
                        <div style={input_page === 3 ? {} : { display: 'none' }}>
                            <p style={{ color: 'tomato' }}>{error}</p>
                            <div className="pad_inputs">
                                <label htmlFor="">Blood Group</label>
                                <select value={blood_group} onChange={(e)=>set_blood_group(e.target.value)}>
                                    <option value="N/A">Not sure</option>
                                    <option value="A">A</option>
                                    <option value="A-">A-</option>
                                    <option value="AB">AB</option>
                                    <option value="AB-">AB-</option>
                                    <option value="B">B</option>
                                    <option value="B-">B-</option>
                                    <option value="O">O</option>
                                    <option value="O-">O-</option>
                                </select>
                                <label htmlFor="">Known medical conditions</label>
                                <textarea value={conditions} onChange={(e)=>set_conditions(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div style={input_page === 4 ? {} : { display: 'none' }}>
                            <p style={{ color: 'tomato' }}>{error}</p>
                            <div className="pad_inputs">
                                <p>A Four Digit one time pin has being sent to you phone number.</p>
                                <p>Enter it below to confirm your number</p>
                                <label htmlFor="">Confirm OTP</label>
                                <input type="text" value={otp} onChange={(e) => set_otp(e.target.value)}/>
                            </div>
                        </div>
                        <div className="request_complete" style={input_page === 5 ? {} : { display: 'none' }}>
                            <h1 style={{color:'#EB4D4A'}}>Registration Complete</h1>
                            <p>You details have being registered</p>
                            <p>The agency will contact you when a need arises.</p>
                            <button onClick={()=>set_input_page(1)}>Back</button>
                        </div>
                        <div className="register_bottom" style={input_page < 5 ? {} : { display: 'none' }}>
                            <button onClick={() => change_step(-1)}>Back</button>
                            <button onClick={() => change_step(1)}>Next</button>
                        </div>
                    </div>
                </div>
                <h1>Or</h1>
                <div>
                    <div className="text_side">
                        <h1 style={{color:'#EB4D4A'}}>Donate Money</h1>
                        <p>You can donate money instead to help pay for costs of blood donation, the costs of these campaigns including the costs of blood replenishment products i.e. (Milk, Sugar, Soft Drinks) are the leading causes of blood shortages in Blood banks</p>
                        <Link to="/learn">
                        <button className="learn_more">Learn More Here</button>
                        </Link>
                    </div>
                    <div className="register_pad">
                        <div className="money_area" style={req_page === 1 ? {} : { display: 'none' }}>
                            <h1>Donate in any of the Following account</h1>
                            <br />
                            <button className="payment_btns mtn" onClick={()=>set_req_page(2)}>
                                <img src={require('../assets/mtn_logo.png')} alt="" />
                                <p>MTN Mobile Money</p>
                            </button>
                            <button className="payment_btns airtel" onClick={()=>set_req_page(3)}>
                                <img src={require('../assets/airtel_logo.jpeg')} alt="" />
                                <p>Airtel Mobile Money</p>
                            </button>
                            <button className="payment_btns zamtel" onClick={()=>set_req_page(4)}>
                                <img src={require('../assets/zamtel_logo.png')} alt="" />
                                <p>Zamtel Mobile Money</p>
                            </button>
                        </div>
                        <div className="request_complete" style={req_page === 2 ? {} : { display: 'none' }}>
                            <img style={{width:'70px'}} src={require('../assets/mtn_logo.png')} alt="" />
                            <h1 style={{color:'#FFC424'}}>MTN Mobile Money</h1>
                            <p>Acc. Name: <strong>ZNBT Service</strong></p>
                            <p>Number: <strong>0966123421</strong></p>
                            <button onClick={()=>set_req_page(1)}>Back</button>
                        </div>
                        <div className="request_complete" style={req_page === 3 ? {} : { display: 'none' }}>
                            <img style={{width:'70px'}} src={require('../assets/airtel_logo.jpeg')} alt="" />
                            <h1 style={{color:'#EE2B26'}}>Airtel Money</h1>
                            <p>Acc. Name: <strong>ZNBT Service</strong></p>
                            <p>Number: <strong>0977123421</strong></p>
                            <button onClick={()=>set_req_page(1)}>Back</button>
                        </div>
                        <div className="request_complete" style={req_page === 4 ? {} : { display: 'none' }}>
                            <img style={{width:'70px'}}  src={require('../assets/zamtel_logo.png')} alt="" />
                            <h1 style={{color:'#01B158'}}>Zamtel Kwacha</h1>
                            <p>Acc. Name: <strong>ZNBT Service</strong></p>
                            <p>Number: <strong>0955123421</strong></p>
                            <button onClick={()=>set_req_page(1)}>Back</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
export default Register
