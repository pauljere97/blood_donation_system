


const LearnText = () => {
    
    return (
        <section className="register_section2">
                <h1 style={{color:'#EB4D4A', textAlign:'center'}}>Learn More</h1>
                <br />
                <div>
                    <div className="text_side">
                        <h1 style={{color:'#EB4D4A'}}>What is Blood Donation</h1>
                        <p>Commodo labore ipsum eu veniam reprehenderit nostrud magna pariatur ex nostrud. Deserunt labore excepteur consequat deserunt ea ea reprehenderit amet. Et commodo ex voluptate eiusmod duis officia consequat sint ex minim.</p>
                    </div>
                    <img style={{width:'300px'}} src={require('../assets/bloodicon.png')} alt="" />
                </div>
                <div>
                    <img style={{width:'300px', margin:'0 50px'}} src={require('../assets/bloodicon.png')} alt="" />
                    <div className="text_side">
                        <h1 style={{color:'#EB4D4A'}}>Who can donate</h1>
                        <p>Commodo labore ipsum eu veniam reprehenderit nostrud magna pariatur ex nostrud. Deserunt labore excepteur consequat deserunt ea ea reprehenderit amet. Et commodo ex voluptate eiusmod duis officia consequat sint ex minim.</p>
                    </div>
                </div>
                <div>
                    <div className="text_side">
                        <h1 style={{color:'#EB4D4A'}}>Where does blood go</h1>
                        <p>Commodo labore ipsum eu veniam reprehenderit nostrud magna pariatur ex nostrud. Deserunt labore excepteur consequat deserunt ea ea reprehenderit amet. Et commodo ex voluptate eiusmod duis officia consequat sint ex minim.</p>
                    </div>
                    <img style={{width:'300px'}} src={require('../assets/bloodicon.png')} alt="" />
                </div>
                <div>
                    <img style={{width:'300px', margin:'0 50px'}} src={require('../assets/bloodicon.png')} alt="" />
                    <div className="text_side">
                        <h1 style={{color:'#EB4D4A'}}>What are the risks of donating blood</h1>
                        <p>Commodo labore ipsum eu veniam reprehenderit nostrud magna pariatur ex nostrud. Deserunt labore excepteur consequat deserunt ea ea reprehenderit amet. Et commodo ex voluptate eiusmod duis officia consequat sint ex minim.</p>
                    </div>
                    {/* <div className="register_pad">
                        
                    </div> */}
                </div>
            </section>
    )
}
export default LearnText