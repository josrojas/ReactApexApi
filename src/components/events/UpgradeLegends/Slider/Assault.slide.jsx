// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation  } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';

import styles from './slide.module.css';

import Ash from '../Assault/Ash';
import Ballistic from '../Assault/Ballistic';
import Bangalore from '../Assault/Bangalore';
import Fuse from '../Assault/Fuse';
import Maggie from '../Assault/Maggie';

export default () => {
  return (
    <Swiper
    // install Swiper modules
      className={styles.swiper}
      modules={[Navigation, Pagination, EffectFlip]}
      spaceBetween={1}
      slidesPerView={1}
      effect={'flip'}
      pagination={true}
      navigation={true}
      grabCursor={true}      
    >
      <SwiperSlide><Ash /></SwiperSlide>
      <SwiperSlide><Ballistic /></SwiperSlide>
      <SwiperSlide><Bangalore /></SwiperSlide>
      <SwiperSlide><Fuse /></SwiperSlide>
      <SwiperSlide><Maggie /></SwiperSlide>
    </Swiper>
  );
};