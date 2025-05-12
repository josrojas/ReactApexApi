// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';
import 'swiper/css/keyboard';

import styles from './sliderStyles/slide.module.css';

import Bloodhound from '../Recon/Bloodhound';
import Crypto from '../Recon/Crypto';
import Seer from '../Recon/Seer';
import Vantage from '../Recon/Vantage';
import Valkyrie from '../Recon/Valkyrie';
import Sparrow from '../Recon/Sparrow';
import ReconClass from '../Slider/Classes/classRecon';

export default () => {
  return (
    <div className={styles.container}>
      <Swiper
        // install Swiper modules
        className={styles.swiper}
        modules={[Navigation, Pagination, EffectFlip, Keyboard]}
        spaceBetween={1}
        slidesPerView={1}
        effect={'flip'}
        pagination={true}
        navigation={true}
        grabCursor={true}
        keyboard={true}
      >
        <SwiperSlide><Bloodhound /></SwiperSlide>
        <SwiperSlide><Crypto /></SwiperSlide>
        <SwiperSlide><Seer /></SwiperSlide>
        <SwiperSlide><Vantage /></SwiperSlide>
        <SwiperSlide><Valkyrie /></SwiperSlide>
        <SwiperSlide><Sparrow /></SwiperSlide>
      </Swiper>

      <div className={styles.classContainer}>
        <ReconClass />
      </div>
    </div >
  );
};