import Header from "../components/Header"
import { useState } from "react"
import Footer from "../components/Footer"
const Find = () => {
    const [input_page, set_input_page] = useState(1)

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
                        <h1 style={{ color: '#EB4D4A' }}>Find a Donor</h1>
                        <p>The ZNBTS keeps a list of potential donors. You can send a request to the Agency requesting for blood, the Agency will find a donor(s) that matches your blood type and needs.</p>
                        <button className="learn_more">Learn More Here</button>
                    </div>
                    <div className="register_pad">
                        <div className="register_pad_top">
                            <p>Request</p>
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
                                <label htmlFor="">Administering Clinic/Hospital</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div style={input_page === 3 ? {} : { display: 'none' }}>
                            <div className="pad_inputs">
                                <label htmlFor="">Blood type</label>
                                <input type="text" />
                                <label htmlFor="">Units</label>
                                <input type="text" />
                                <label htmlFor="">Date of administration</label>
                                <input type="text" />
                                <label htmlFor="">Reason for Transfusion</label>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div style={input_page === 4 ? {} : { display: 'none' }}>
                            <div className="pad_inputs">
                                <p>A Four Digit one time pin has being sent to you phone number. enter it below to confirm your request</p>
                                <label htmlFor="">Confirm OTP</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div style={input_page === 5 ? {} : { display: 'none' }}>
                            <div className="pad_inputs">
                                <p>Your Request has being confirmed.</p>
                                <p>You will be contacted by the Zambia National Blood Transfusion Service (ZNBTS) concerning your Request.</p>
                            </div>
                        </div>
                        <div className="register_bottom">
                            <button onClick={() => change_step(-1)}>Back</button>
                            <button onClick={() => change_step(1)}>Next</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
export default Find
