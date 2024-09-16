// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation, Keyboard  } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';
import 'swiper/css/keyboard';

import styles from './slide.module.css';

import Bloodhound from '../Recon/Bloodhound';
import Crypto from '../Recon/Crypto';
import Seer from '../Recon/Seer';
import Vantage from '../Recon/Vantage';
import Valkyrie from '../Recon/Valkyrie';

export default () => {
  return (
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
    </Swiper>
  );
};