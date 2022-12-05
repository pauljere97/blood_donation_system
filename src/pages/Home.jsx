import Header from "../components/Header"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import LearnText from "../components/LearnText"


const Home = () => {
    
    return (
        <div className="page">
            <Header />
            <section className="landing_section">
                <section className="landing_page_main">
                    <h1>Zambia National</h1>
                    <h1><span style={{color:'#EB4D4A'}}>Blood Transfusion Service</span></h1>
                    <p>Blood Donation Is The Act Of Giving Blood To Someone Who Needs It. It Is Not Just About Giving Blood, But It Is An Act Of Kindness That Saves The Lives Of Hundreds Of People.</p>
                    <p>A single drop of blood can make a huge difference.</p>
                </section>
                <img className="bloodicon" src={require('../assets/bloodicon.png')} alt="" />
                <div className="landing_section_btns">
                    <Link to={'/register'}>
                        <button className="landing_section_btns_1">Donate</button>
                    </Link>
                    <Link to={'/find'}>
                        <button className="landing_section_btns_2">Find a Donor</button>
                    </Link>
                </div>
            </section>
            <LearnText/>
            <Footer/>
        </div>
    )
}
export default Home