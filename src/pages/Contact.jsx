import Header from "../components/Header"
import { useState } from "react"
import Footer from "../components/Footer"
import * as SERVICE from "../services"
import axios from "axios"

const Contact = () => {
    const [input_page, set_input_page] = useState(1)

    const change_step = (type) => {
        if (type === 1 && input_page < 3) {
            if(input_page === 2){
                register()
            }else set_input_page(input_page + 1)
        }
        if (type === -1 && input_page > 1) {
            set_input_page(input_page - 1)
        }
    }

    const [phone, set_phone] = useState('')
    const [message, set_message] = useState('I would like to donate blood but i dont know where i need to go exactly to donate')

    const register = () => {
        if(!phone) {alert('Phone missing'); return}
        if(!message) {alert('Messages missing'); return}

        let payload = {
            phone,
            message,
        }

        let config = SERVICE.send_message(payload)
        axios(config).then(function (response) {
            console.log(response)
            set_input_page(3)
        })
        .catch(function (error) {
            console.log(error);
            alert('something went wrong')
        });

        console.log(payload)
        
    }


    return (
        <div className="page">
            <Header />
            <section className="register_section2">
                <div>
                    <div className="text_side">
                        <h1 style={{ color: '#EB4D4A' }}>Contact Us</h1>
                        <p>If you have any queries, leave us a message, dont forget to include your phone number </p>
                        <p>The agency will contact you.</p>
                        {/* <button className="learn_more">Learn More Here</button> */}
                    </div>
                    <div className="register_pad">
                        <div className="register_pad_top">
                            <p>Request</p>
                            <p>{input_page}/5</p>
                        </div>
                        
                        <div style={input_page === 1 ? {} : { display: 'none' }}>
                            <div className="pad_inputs">
                                <label htmlFor="">Phone Number</label>
                                <input type="text" value={phone} onChange={(e)=>set_phone(e.target.value)}/>
                                <label htmlFor="">You Message</label>
                                <textarea value={message} onChange={(e)=>set_message(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div style={input_page === 2 ? {} : { display: 'none' }}>
                            <div className="pad_inputs">
                                <p>A Four Digit one time pin has being sent to you phone number. Enter it below to confirm your number</p>
                                <label htmlFor="">Confirm OTP</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="request_complete" style={input_page === 3 ? {} : { display: 'none' }}>
                            <h1 style={{color:'#EB4D4A'}}>Request Complete</h1>
                            <p>You details have being registered</p>
                            <p>The agency will contact you when a match is found.</p>
                            <button onClick={()=>set_input_page(1)}>Back</button>
                        </div>
                        <div className="register_bottom" style={input_page < 3 ? {} : { display: 'none' }}>
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
export default Contact
