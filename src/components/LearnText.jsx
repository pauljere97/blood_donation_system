


const LearnText = () => {
    
    return (
        <section className="register_section2 learner_text">
                <h1 style={{color:'#EB4D4A', textAlign:'center'}}>Learn More</h1>
                <br />
                <div>
                    <div className="text_side">
                        <h1 style={{color:'#EB4D4A'}}>What is Blood Donation</h1>
                        <p>A blood donation occurs when a person voluntarily has blood drawn and used for transfusions and/or made into biopharmaceutical medications by a process called fractionation. Donation may be of whole blood, or of specific components directly.</p>
                    </div>
                    <img style={{width:'300px'}} src={require('../assets/bloodicon.png')} alt="" />
                </div>
                <div>
                    <img style={{width:'300px', margin:'0 50px'}} src={require('../assets/bloodicon.png')} alt="" />
                    <div className="text_side">
                        <h1 style={{color:'#EB4D4A'}}>Who can donate</h1>
                        <p>Donor should be in the age group of 18 to 65 years. The Donor Should not be less than 45 Kilograms. The Donor Should not be less than 45 Kilograms. Temperature and Pulse of the donor should be normal.</p>
                    </div>
                </div>
                <div>
                    <div className="text_side">
                        <h1 style={{color:'#EB4D4A'}}>Where does donated blood go</h1>
                        <p>Blood must be available 24/7 throughout Zambia, including the most remote areas. Therefore, your blood will be sent to one of 39 blood banks across the country, where it will be refrigerated until use.</p>
                    </div>
                    <img style={{width:'300px'}} src={require('../assets/bloodicon.png')} alt="" />
                </div>
                <div>
                    <img style={{width:'300px', margin:'0 50px'}} src={require('../assets/bloodicon.png')} alt="" />
                    <div className="text_side">
                        <h1 style={{color:'#EB4D4A'}}>What are the risks of donating blood</h1>
                        <p>
Blood donation is safe. New, sterile disposable equipment is used for each donor, so there's no risk of getting a bloodborne infection by donating blood. Most healthy adults can donate a pint (about half a liter) safely, without health risks.</p>
                    </div>
                    {/* <div className="register_pad">
                        
                    </div> */}
                </div>
            </section>
    )
}
export default LearnText