import bg_about from './assets/Bg1.png'
const About = () => {
    return (
        <div className="section" id="about-section">
            <div className="head"><h1>About Us</h1></div>
            <div className="row">
            <div className="col">
            <img className='bg_about' src={bg_about} alt="imge" />
            </div>
            <div className="col">
               <h2>TinkerHub Foundation's campus chapter at NSS College Of Engineering was established in October 2019.
                 The community is dedicated to developing a tech focussed
                  learning culture in the campus through peer-to-peer learning, bootcamps and other events.</h2>
            </div>
            </div>
        </div>
    );
}
export default About;