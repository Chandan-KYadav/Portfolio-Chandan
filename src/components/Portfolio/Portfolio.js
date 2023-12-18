import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Ecommerce from './Portfolio_Ecommerce.png';
import Blog from './Portfolio_Blog.png';
import Calculator from './Portfolio_Calculator.png';

const Portfolio = () => {
    return (
        <div className="portfolio" id='Portfolio'>

            {/*Heading*/}
            <span>Recent Projects</span>
            <span>Portfolio</span>



            {/*swiper*/}
            <Swiper 
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Ecommerce} alt="Ecommerce" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Blog} alt="Blog" />
                </SwiperSlide>

                <SwiperSlide className='images'>
                    <img src={Calculator} alt="Calculator" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Portfolio;