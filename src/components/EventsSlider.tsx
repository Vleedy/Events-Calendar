import { FC } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Event from './Event';

import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export type EventsItems = {
  year: number;
  describe: string;
};
interface Events {
  events: EventsItems[];
}

const EventsSlider: FC<Events> = ({ events }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        freeMode={true}>
        {events?.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Event year={item.year} describe={item.describe} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default EventsSlider;
