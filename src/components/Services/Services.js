import './Services.css';
import HeartEmojis from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Cards from '../Cards/Cards';
import Resume from './ResumeN.pdf';

const Services = () => {
    return (
        <div className="services" id="Services">
            <div className="services-left">
                <span>My Awesome</span>
                <span>services</span>
                <span>Lorem ipsum is simply dummy text of printing Lorem
                    <br />
                    ispum is simply dummy text of printing.
                </span>
                <a href={Resume} download>
                    <button className="button services-btn">Download CV</button>
                </a>
            </div>

            <div className="cards">
                <div style={{ left: '14rem' }}>
                    <Cards
                        image={HeartEmojis}
                        heading={'Languages and Scripts'}
                        detail={'Python, C#, Javascript, ReactJS and NodeJS '}
                    />
                </div>

                <div style={{ left: '-2rem', top: '10rem' }}>
                    <Cards
                        image={Glasses}
                        heading={'Web Tech Stack'}
                        detail={'HTML, Css and Frames - Bootstrap & Tailwind Css'}
                    />
                </div>

                <div style={{ left: '11rem', top: '16rem' }}>
                    <Cards
                        image={Humble}
                        heading={'DataBase and Others'}
                        detail={'MySQL, PostgreSQL, MongoDB, Git and Jquary'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Services;