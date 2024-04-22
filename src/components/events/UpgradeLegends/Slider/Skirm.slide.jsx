// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation  } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';

import styles from './slide.module.css';

import Horizon from '../Skirmisher/Horizon';
import Octane from '../Skirmisher/Octane';
import Pathfinder from '../Skirmisher/Pathfinder';
import Revenant from '../Skirmisher/Revenant';
import Valkyrie from '../Skirmisher/Valkyrie';
import Wraith from '../Skirmisher/Wraith';


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
      <SwiperSlide><Horizon /></SwiperSlide>
      <SwiperSlide><Octane /></SwiperSlide>
      <SwiperSlide><Pathfinder /></SwiperSlide>
      <SwiperSlide><Revenant /></SwiperSlide>
      <SwiperSlide><Valkyrie /></SwiperSlide>
      <SwiperSlide><Wraith /></SwiperSlide>
    </Swiper>
  );
};