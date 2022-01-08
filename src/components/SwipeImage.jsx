// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// assets
import DuniaMencekam from '../assets/dunia-mencekam.jpg'
import Vespa from '../assets/the-brotos-verspa-race.jpeg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./swipeImage.css";
// import Swiper core and required modules
import SwiperCore, {
    Pagination,Navigation
  } from 'swiper';

  // install Swiper modules
  SwiperCore.use([Pagination,Navigation]);


const SwipeImage = () => {
    return (
        <>
            <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
            "clickable": true
            }} navigation={true} className="mySwiper">
                <SwiperSlide>
                    <div className="w-90">
                        <img src={Vespa} alt="banner" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-90">
                        <img src={Vespa} alt="banner" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-90">
                        <img src={Vespa} alt="banner" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-90">
                        <img src={Vespa} alt="banner" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-90">
                        <img src={Vespa} alt="banner" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-90">
                        <img src={Vespa} alt="banner" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-90">
                        <img src={Vespa} alt="banner" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-90">
                        <img src={Vespa} alt="banner" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-90">
                        <img src={Vespa} alt="banner" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-90">
                        <img src={Vespa} alt="banner" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-90">
                        <img src={Vespa} alt="banner" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SwipeImage