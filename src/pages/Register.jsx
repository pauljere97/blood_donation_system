import Header from "../components/Header"
import { useState } from "react"
import Footer from "../components/Footer"
const Register = () => {
    const [input_page, set_input_page] = useState(1)
    const [req_page, set_req_page] = useState(1)

    const change_step = (type) => {
        if (type === 1 && input_page < 5) {
            set_input_page(input_page + 1)
        }
        if (type === -1 && input_page > 1) {
            set_input_page(input_page - 1)
        }
    }
    return (
        <div className="page">
            <Header />
            <section className="register_section2">
                <div>
                    <div className="text_side">
                        <h1 style={{color:'#EB4D4A'}}>Donate Blood</h1>
                        <p>You can register as a donor. The Agency will contact you when a need arises or when they are ready to collect blood in your Area. Your information will not be publicly available and you will remain anonymous as a donor.</p>
                        <button className="learn_more">Learn More Here</button>
                    </div>
                    <div className="register_pad">
                        <div className="register_pad_top">
                            <p>Register</p>
                            <p>{input_page}/5</p>
                        </div>
                        <div style={input_page === 1 ? {} : { display: 'none' }}>
                            <div className="pad_inputs">
                                <label htmlFor="">First Name</label>
                                <input type="text" />
                                <label htmlFor="">Last Name</label>
                                <input type="text" />
                                <label htmlFor="">Sex</label>
                                <input type="text" />
                                <label htmlFor="">DOB</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div style={input_page === 2 ? {} : { display: 'none' }}>
                            <div className="pad_inputs">
                                <label htmlFor="">Phone Number</label>
                                <input type="text" />
                                <label htmlFor="">City</label>
                                <input type="text" />
                                <label htmlFor="">Address</label>
                                <input type="text" />
                                <label htmlFor="">Last Donation</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div style={input_page === 3 ? {} : { display: 'none' }}>
                            <div className="pad_inputs">
                                <label htmlFor="">Last Donation</label>
                                <input type="text" />
                                <label htmlFor="">Blood Group</label>
                                <input type="text" />
                                <label htmlFor="">Known medical conditions</label>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div style={input_page === 4 ? {} : { display: 'none' }}>
                            <div className="pad_inputs">
                                <p>A Four Digit one time pin has being sent to you phone number. Enter it below to confirm your number</p>
                                <label htmlFor="">Confirm OTP</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div style={input_page === 5 ? {} : { display: 'none' }}>
                            <div className="pad_inputs">
                                <p>Your phone number has being confirmed.</p>
                                <p>You will be contacted by the Zambia National Blood Transfusion Service (ZNBTS) when a donation is required.</p>
                            </div>
                        </div>
                        <div className="register_bottom">
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
                        <button className="learn_more">Learn More Here</button>
                    </div>
                    <div className="register_pad">
                        <div className="money_area" style={req_page === 1 ? {} : { display: 'none' }}>
                            <div className="pad_inputs">
                                <label htmlFor="">Donation Amount (ZMW)</label>
                                <input type="number" placeholder="0.00"/>
                                <label htmlFor="">Mobile Money Phone Number</label>
                                <input type="number" placeholder="XXXX XXX XXX"/>
                                <label htmlFor="">Pay with</label>
                            </div>
                            <button className="payment_btns mtn" onClick={()=>set_req_page(2)}>
                                <img src={require('../assets/mtn_logo.png')} alt="" />
                                <p>MTN Mobile Money</p>
                            </button>
                            <button className="payment_btns airtel" onClick={()=>set_req_page(2)}>
                                <img src={require('../assets/airtel_logo.jpeg')} alt="" />
                                <p>Airtel Mobile Money</p>
                            </button>
                            <button className="payment_btns zamtel" onClick={()=>set_req_page(2)}>
                                <img src={require('../assets/zamtel_logo.png')} alt="" />
                                <p>Zamtel Mobile Money</p>
                            </button>
                        </div>
                        <div className="request_complete" style={req_page === 2 ? {} : { display: 'none' }}>
                            <h1 style={{color:'#EB4D4A'}}>Request Sent</h1>
                            <p>Request has being sent to your mobile phone</p>
                            <p>Approve the request to complete the donation.</p>
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
