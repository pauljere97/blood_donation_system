const Footer = () => {
    return (
        <div className="footer">
            <div className='footer_text_side'>
                <h1>Blood Transfusion Service</h1>
                <p>Blood Donation Is The Act Of Giving Blood To Someone Who Needs It. It Is Not Just About Giving Blood, But It Is An Act Of Kindness That Saves The Lives Of Hundreds Of People. A single drop of blood can make a huge difference.</p>
            </div>
            <div className='store_downloads'>
                <img src={require('../assets/playstore.png')} alt="" />
                <img src={require('../assets/appstore.png')} alt="" />
            </div>
        </div>
    )
}
export default Footer