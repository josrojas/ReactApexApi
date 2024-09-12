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

import Alter from '../Skirmisher/Alter';
import Horizon from '../Skirmisher/Horizon';
import Octane from '../Skirmisher/Octane';
import Pathfinder from '../Skirmisher/Pathfinder';
import Revenant from '../Skirmisher/Revenant';
import Wraith from '../Skirmisher/Wraith';

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
      <SwiperSlide><Alter /></SwiperSlide>
      <SwiperSlide><Horizon /></SwiperSlide>
      <SwiperSlide><Octane /></SwiperSlide>
      <SwiperSlide><Pathfinder /></SwiperSlide>
      <SwiperSlide><Revenant /></SwiperSlide>
      <SwiperSlide><Wraith /></SwiperSlide>
    </Swiper>
  );
};