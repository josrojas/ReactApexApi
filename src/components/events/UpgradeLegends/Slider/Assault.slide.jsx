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

import Ash from '../Assault/Ash';
import Ballistic from '../Assault/Ballistic';
import Bangalore from '../Assault/Bangalore';
import Fuse from '../Assault/Fuse';
import Maggie from '../Assault/Maggie';
import AssaultClass from '../Slider/Classes/classAssault';

export const assaultSearch = ['Ash', 'Ballistic', 'Bangalore', 'Fuse', 'Maggie'];

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
        <SwiperSlide><Ash /></SwiperSlide>
        <SwiperSlide><Ballistic /></SwiperSlide>
        <SwiperSlide><Bangalore /></SwiperSlide>
        <SwiperSlide><Fuse /></SwiperSlide>
        <SwiperSlide><Maggie /></SwiperSlide>
      </Swiper>

      <div className={styles.classContainer}>
        <AssaultClass />
      </div>
    </div>
  );
};