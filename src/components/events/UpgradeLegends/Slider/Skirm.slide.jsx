// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';
import 'swiper/css/keyboard';

import styles from '../Slider/sliderStyles/slide.module.css';

import Alter from '../Skirmisher/Alter';
import Horizon from '../Skirmisher/Horizon';
import Octane from '../Skirmisher/Octane';
import Pathfinder from '../Skirmisher/Pathfinder';
import Ash from '../Skirmisher/Ash';
import Wraith from '../Skirmisher/Wraith';
import SkirmClass from '../Slider/Classes/classSkirm';

export default () => {
  return (
    <div className={styles.container}>
      <Swiper
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
        <SwiperSlide><Ash /></SwiperSlide>
        <SwiperSlide><Wraith /></SwiperSlide>
      </Swiper>

      <div className={styles.classContainer}>
        <SkirmClass />
      </div>
    </div>
  );
};