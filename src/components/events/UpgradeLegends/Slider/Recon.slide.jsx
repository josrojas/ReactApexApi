// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation  } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';

import styles from './slide.module.css';

import Bloodhound from '../Recon/Bloodhound';
import Crypto from '../Recon/Crypto';
import Seer from '../Recon/Seer';
import Vantage from '../Recon/Vantage';

export default () => {
  return (
    <Swiper
    // install Swiper modules
      modules={[Navigation, Pagination, EffectFlip]}
      spaceBetween={1}
      slidesPerView={1}
      effect={'flip'}
      pagination={true}
      navigation={true}
      grabCursor={true}
      className={styles.swiper}
    >
      <SwiperSlide><Bloodhound /></SwiperSlide>
      <SwiperSlide><Crypto /></SwiperSlide>
      <SwiperSlide><Seer /></SwiperSlide>
      <SwiperSlide><Vantage /></SwiperSlide>
    </Swiper>
  );
};