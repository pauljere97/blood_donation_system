import Header from "../components/Header"
import Footer from "../components/Footer"
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import * as SERVICE from "../services"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { state, setState } = useContext(Context)
    const navigate = useNavigate();
    const [email, set_email] = useState('')
    const [password, set_password] = useState('')

    const login = () => {
        if(!email) {alert('Email missing'); return}
        if(!password) {alert('Password missing'); return}
        let payload = {
            password,
            email,
        }
      
        setState({ ...state, loading_screen:true})
        let config = SERVICE.login(payload)
        axios(config).then(function (response) {
            if(response['data']['success']){
                sessionStorage.setItem("email", email);
                navigate(`/admin/dashboard`)
            } else alert('login failed')
            setState({ ...state, loading_screen:false})
        })
        .catch(function (error) {
            console.log(error);
            alert('login failed')
            setState({ ...state, loading_screen:false})
        });
    }

    return (
        <div className="page">
            <Header />
            <section className="register_section">
                <div className="register_pad">
                    <div className="register_pad_top">
                        <p>Login</p>
                    </div>
                    <div >
                        <div className="pad_inputs">
                            <label htmlFor="">Login ID</label>
                            <input type="text" value={email} onChange={(e)=>set_email(e.target.value)}/>
                            <label htmlFor="">Password</label>
                            <input type="password" value={password} onChange={(e)=>set_password(e.target.value)}/>
                        </div>
                    </div>

                    <div className="register_bottom">
                            <button onClick={login}>Login</button>
                        {/* <Link to={'/admin/dashboard'}>
                        </Link> */}
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
export default Login
