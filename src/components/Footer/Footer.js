import './Footer.css';
import Wave from './../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="wave" style={{width:'100%'}} />
            <div className="footer-content">
                <span>chandanyadav5648@gmail.com</span>
                <div className="footer-icons">
                    <a href='https://www.instagram.com/chandan_kyadav?igshid=MmVlMjlkMTBhMg=='><Insta color='white' size='3rem'/></a>
                    <a href='https://www.linkedin.com/in/chandan-kumar-yadav-829736171'><Linkedin color='white' size='3rem' /></a>
                    <a href="https://github.com/Chandan-KYadav"><Github color='white' size='3rem'/></a>
                </div>

            </div>
        </div>
    );
}

export default Footer;