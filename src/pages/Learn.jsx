import Header from "../components/Header"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import LearnText from "../components/LearnText"


const Learn = () => {
    
    return (
        <div className="page">
            <Header />
            <LearnText/>
            <Footer/>
        </div>
    )
}
export default Learn
