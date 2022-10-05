
const Broadcast = () => {
    let donors = [1, 2]
    return (
        <div className="admin_page">
            {donors.map((element, index) => {
                return <div key={index} className="broadcast">
                    <div>
                        <p>12th Aug 2022 - 09:23</p>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                        <p>{Math.ceil(Math.random()*500 * element)} Recipients</p>
                    </div>
                    <p>This Message is sent by the Zambia National Blodd Transfusion Service to inform the general public of Chifubu constituency that a blood donation comoaign will be hosted at chifubu secondary school. Please attend to help save lives.</p>
                </div>
            })}

        </div>
    )
}
export default Broadcast
