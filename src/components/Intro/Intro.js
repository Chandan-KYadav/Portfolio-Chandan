import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';
import Floatingimoji from '../Floatingimoji/Floatingimoji';
import { Link } from 'react-scroll';

const Intro = () => {
    return(
        <div className="intro">
            <div className="intro-left">
                <div className="intro-name">
                    <span>Hy! I am</span>
                    <span>Chandan Kumar Yadav</span>
                    <span>Frontend Developer with basic 
                        level of experience in web designing
                        and development, producting the Quality 
                        work. </span>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className="button intro-btn">
                        Hire me
                    </button>
                </Link>
                <div className="intro-icons">
                    <a href="https://github.com/Chandan-KYadav" target='blank'>
                        <img src={Github} alt="Github-icon"/>
                    </a>

                    <a href="https://www.linkedin.com/in/chandan-kumar-yadav-829736171" target='blank'>
                        <img src={LinkedIn} alt="LinkedIn-icon"/>
                    </a>

                    <a href="https://www.instagram.com/chandan_kyadav?igshid=MmVlMjlkMTBhMg==">
                        <img src={Instagram} alt="Instagram-icon"/>
                    </a>  
                    
                </div>
            </div>
            <div className="intro-right">
                <img src={Boy} alt="Boy" />
                <img src={Glassesimoji} alt="Glass-emoji" />
                <div style={{top:"-4%" , left:"68%"}} className="floating-div">
                  <Floatingimoji image={Crown} text1='Web' text2='Developer'/>
                </div>
                <div style={{top:"19.5rem", left:"0rem"}}className="floating-div">
                  <Floatingimoji image={Thumbup} text1='Best Design' text2='Award'/>
                </div>
            </div>
            
        </div>
    );
}

export default Intro;