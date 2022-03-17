// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import coverImg from "../../imgs/coverImg.png";

export default () => {
    return (
        <Swiper
            spaceBetween={5}
            slidesPerView={1}
        >
            <SwiperSlide><img className={"coverImg"} src={coverImg} alt="first-post"/></SwiperSlide>
            <SwiperSlide><img className={"coverImg"} src={coverImg} alt="first-post"/></SwiperSlide>
            <SwiperSlide><img className={"coverImg"} src={coverImg} alt="first-post"/></SwiperSlide>
            <SwiperSlide><img className={"coverImg"} src={coverImg} alt="first-post"/></SwiperSlide>
        </Swiper>
    );
};
