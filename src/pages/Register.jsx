import Header from "../components/Header"
import { useState } from "react"
const Register = () => {
    const [input_page, set_input_page] = useState(1)

    const change_step = (type) => {
        if(type === 1 && input_page < 5){
            set_input_page(input_page + 1)
        }
        if(type === -1 && input_page > 1){
            set_input_page(input_page - 1)
        }
    }
    return (
        <div className="page">
            <Header/>
            <section className="register_section">
                <div className="register_pad">
                    <div className="register_pad_top">
                        <p>Register</p>
                        <p>{input_page}/5</p>
                    </div>
                    <div style={input_page === 1? {}:{display:'none'}}>
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
                    <div style={input_page === 2? {}:{display:'none'}}>
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
                    <div style={input_page === 3? {}:{display:'none'}}>
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
                        <button onClick={()=>change_step(-1)}>Back</button>
                        <button onClick={()=>change_step(1)}>Next</button>
                    </div>
                </div>&nbsp;&nbsp;&nbsp;
                <div className="register_pad">
                    <p>Est ad mollit veniam ex pariatur veniam. Commodo officia consectetur mollit eiusmod sint sit cillum. Occaecat reprehenderit tempor minim tempor est aliquip deserunt reprehenderit id.</p>
                    <div className="money_area">
                    <input type="number" placeholder="K0.00" />
                        <button>MTN Mobile Money</button>
                        <button>Airtel Mobile Money</button>
                        <button>Zamtel Mobile Money</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Register
