import bgimg from './assets/bg_home.png'
import bggrey from './assets/bg_grey.png'
const Home = () => {
    return (
        <div className="Home-section" id="home-section">
            <div className="th-head">
                <h1>TinkerHub NSSCE</h1>
                <p>Official TinkerHub chapter of <br />
                    NSS College of Engineering , Palakkad</p>
                <img className='bg-img' src={bgimg} alt="imge" />
                <img className='overlay' src={bggrey} alt="imge" />
            </div>
        </div>
    );

}
export default Home;