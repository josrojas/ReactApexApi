// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation  } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';

import styles from './slide.module.css';

import Conduit from '../Support/Conduit';
import Gibraltar from '../Support/Gibraltar';
import Lifeline from '../Support/Lifeline';
import Loba from '../Support/Loba';
import Mirage from '../Support/Mirage';
import Newcastle from '../Support/Newcastle';

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
      <SwiperSlide><Conduit /></SwiperSlide>
      <SwiperSlide><Gibraltar /></SwiperSlide>
      <SwiperSlide><Lifeline /></SwiperSlide>
      <SwiperSlide><Loba /></SwiperSlide>
      <SwiperSlide><Mirage /></SwiperSlide>
      <SwiperSlide><Newcastle /></SwiperSlide>
    </Swiper>
  );
};