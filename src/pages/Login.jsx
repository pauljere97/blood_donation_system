import Header from "../components/Header"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

const Login = () => {

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
                            <input type="text" />
                            <label htmlFor="">Password</label>
                            <input type="password" />
                        </div>
                    </div>

                    <div className="register_bottom">
                        <Link to={'/admin/dashboard'}>
                            <button >Login</button>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
export default Login
