import './Works.css';
import Upwork from './../../img/Upwork.png';
import Fiverr from './../../img/fiverr.png';
import Facebook from './../../img/Facebook.png';
import Amazon from './../../img/amazon.png';
import Shopify from './../../img/Shopify.png';
import { Link } from 'react-scroll';


const Works = () => {
    return (
        <div className="works">
            {/*Left side*/}
            {/* same as services-left side*/}
            <div className="services-left">
                <span>Works for All these</span>
                <span>Brands and Clients</span>
                <span>Lorem ipsum is simply dummy text of printing Lorem
                    <br />
                    ispum is simply dummy text of printing.
                    <br />
                    Lorem ipsum is simply dummy text of printing
                    <br />
                    Lorem ipsum is simply dummy text of printing
                </span>
                 
                <Link spy={true} to='Contact' smooth={true}>
                    <button className="button services-btn">
                        Hire me
                    </button>
                </Link>  
            </div>

            {/*Right side*/}
            <div className="works-right">
                <div className="works-main-circle">
                    <div className="works-second-circle">
                        <img src={Upwork} alt="icon" />
                    </div>
                    <div className="works-second-circle">
                        <img src={Fiverr} alt="icon" />
                    </div>
                    <div className="works-second-circle">
                        <img src={Amazon} alt="icon" />
                    </div>
                    <div className="works-second-circle">
                        <img src={Shopify} alt="icon" />
                    </div>
                    <div className="works-second-circle">
                        <img src={Facebook} alt="icon" />
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Works;