
const Broadcast = () => {
    let donors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div className="admin_page">
            {donors.map((element, index) => {
                return <div key={index} className="broadcast">
                    <div>
                        <p>12th Aug 2022 - 09:23</p>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                        <p>{Math.ceil(Math.random()*500 * element)} Recipients</p>
                    </div>
                    <p>Aute esse dolore id dolore minim esse esse incididunt labore esse. Culpa consectetur consequat ex aliquip qui voluptate officia aute in do aliquip voluptate. Eu sint veniam culpa tempor sit minim. Ex aute labore esse adipisicing veniam sunt incididunt enim nisi pariatur in incididunt ullamco. Voluptate magna nisi Lorem pariatur fugiat laboris tempor cupidatat magna occaecat deserunt. Nisi ut fugiat amet Lorem enim incididunt irure ipsum.</p>
                </div>
            })}

        </div>
    )
}
export default Broadcast
