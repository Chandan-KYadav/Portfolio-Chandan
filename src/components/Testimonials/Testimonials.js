import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from './../../img/profile1.jpg'
import profilePic2 from './../../img/profile2.jpg'
import profilePic3 from './../../img/profile3.jpg'
import profilePic4 from './../../img/profile4.jpg'
import { Pagination } from "swiper/modules";
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {
    const clients = [
        {
            img: profilePic1,
            review:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam aut repudiandae, mollitia fugiat suscipit."

        },
        {
            img: profilePic2,
            review:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam aut repudiandae."
        },

        {
            img: profilePic3,
            review:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam aut repudiandae."
        },

        {
            img: profilePic4,
            review:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  quisquam quos."
        }
    ];



    return (
        <div className="t-wrapper" id='Testimonials'> 
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Exceptional Work </span>
                <span>from me...</span>
            </div>

            {/*slider*/}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="tmt">
                                <img src={client.img} alt="client" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
export default Testimonials;
