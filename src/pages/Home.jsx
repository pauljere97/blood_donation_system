import Header from "../components/Header"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
const Home = () => {
    return (
        <div className="page">
            <Header />
            <section className="landing_section">
                <section className="landing_page_main">
                    <h1>Zambia National</h1>
                    <h1><span style={{color:'#EB4D4A'}}>Blood Transfusion Service</span></h1>
                    <p>Fugiat duis consequat consectetur id culpa consectetur sunt sint et occaecat aliqua. Pariatur nulla anim proident laboris quis. Pariatur et deserunt sit laboris labore aliquip ut reprehenderit non. Dolore voluptate aliquip esse id velit enim sunt exercitation velit tempor dolore. Sunt irure aliqua ipsum duis consectetur enim nisi id anim cupidatat.</p>
                </section>
                <div className="landing_section_btns">
                    <Link to={'/register'}>
                        <button className="landing_section_btns_1">Donate</button>
                    </Link>
                    <Link to={'/find'}>
                        <button className="landing_section_btns_2">Find a Donor</button>
                    </Link>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
export default Home
