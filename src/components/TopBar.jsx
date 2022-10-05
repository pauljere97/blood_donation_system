import { useParams } from 'react-router-dom'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
const TopBar = () => {
    let { page } = useParams();
    let email = sessionStorage.getItem("email");
    const navigate = useNavigate();

    useEffect(() => {
        if(!sessionStorage.getItem("email")){
            navigate(`/`)
        }
    },[navigate])
    return (
        <div className="top_bar">
            <h3 className='top_bar_header'>{page}</h3>
            <h4>{email}</h4>
        </div>
    )
}
export default TopBar
