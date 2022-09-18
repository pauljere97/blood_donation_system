import Header from "../components/Header"
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div className="page">
            <Header />
            <section className="landing_section">
                <section className="landing_page_main">
                    <h1>Blood Donation Website</h1>
                    <p>Fugiat duis consequat consectetur id culpa consectetur sunt sint et occaecat aliqua. Pariatur nulla anim proident laboris quis. Pariatur et deserunt sit laboris labore aliquip ut reprehenderit non. Dolore voluptate aliquip esse id velit enim sunt exercitation velit tempor dolore. Sunt irure aliqua ipsum duis consectetur enim nisi id anim cupidatat.</p>
                </section>
                <div className="landing_section_btns">
                    <Link to={'/register'}>
                        <button>Donate</button>
                    </Link>
                    <Link to={'/find'}>
                        <button>Find a Donor</button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
export default Home
