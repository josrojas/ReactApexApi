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

import Catalyst from '../Controller/Catalyst';
import Caustic from '../Controller/Caustic';
import Rampart from '../Controller/Rampart';
import Wattson from '../Controller/Wattson';
import ControlClass from '../Slider/Classes/classControl';

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
        <SwiperSlide><Catalyst /></SwiperSlide>
        <SwiperSlide><Caustic /></SwiperSlide>
        <SwiperSlide><Rampart /></SwiperSlide>
        <SwiperSlide><Wattson /></SwiperSlide>
      </Swiper>

      <div className={styles.classContainer}>
        <ControlClass />
      </div>
    </div>
  );
};