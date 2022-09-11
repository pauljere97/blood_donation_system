import { useParams } from 'react-router-dom'
const TopBar = () => {
    let { page } = useParams();
    return (
        <div className="top_bar">
            <h3 className='top_bar_header'>{page}</h3>
            <h4>Blood Bank</h4>
        </div>
    )
}
export default TopBar
