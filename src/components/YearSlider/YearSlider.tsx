import React, { FC, useEffect, useRef, useState } from 'react';
import EventsSlider from '../EventsSlider';
import './YearSlider.scss';

interface activeIntervalProps {
  idInterval: number;
  interval: {
    id: number;
    from: number;
    to: number;
    area: string;
    events: {
      year: number;
      describe: string;
    }[];
  };
  setIdInterval: Function;
  quantity: number;
}

const YearSlider: FC<activeIntervalProps> = ({ quantity, idInterval, setIdInterval, interval }) => {
  const prevYear = useRef(interval);
  const [count, setCount] = useState(prevYear.current.from);
  const [countTo, setCountTo] = useState(prevYear.current.to);
  const [isOpen, setIsOpen] = useState(false);
  const goForward: Function = () => {
    if (idInterval + 1 === quantity) {
      setIdInterval(0);
    } else {
      setIdInterval(() => idInterval + 1);
    }
  };
  const goBack: Function = () => {
    if (idInterval === 0) {
      setIdInterval(quantity - 1);
    } else {
      setIdInterval(() => idInterval - 1);
    }
  };
  useEffect(() => {
    if (count !== interval.from) {
      const timer = setInterval(() => {
        if (count !== interval.from)
          setCount((state) => state + Math.sign(interval.from - prevYear.current.from));
      }, 40);
      return () => clearInterval(timer);
    }
    prevYear.current = interval;
  }, [count, interval]);
  useEffect(() => {
    if (countTo !== interval.to) {
      const timer = setInterval(() => {
        if (countTo !== interval.to)
          setCountTo((state) => state + Math.sign(interval.to - prevYear.current.to));
      }, 40);
      return () => clearInterval(timer);
    }
    prevYear.current = interval;
  }, [countTo, interval]);
  useEffect(() => {
    setTimeout(() => setIsOpen(true), 320);
    return setIsOpen(false);
  }, [interval, idInterval]);

  return (
    <>
      <div className="interval__main">
        <div className="interval__area">{interval.area}</div>
        <div className="interval__main_blue">{count}</div>
        <div className="interval__main_red">{countTo}</div>
      </div>
      <div className="arrow__wrapper">
        <div className="arrow__button arrow__button_back" onClick={() => goBack()}></div>
        <div className="counter">{`${interval.id}/${quantity}`}</div>
        <div className="arrow__button arrow__button_forward" onClick={() => goForward()}></div>
      </div>
      <div className={`swiper__box ${isOpen ? 'swiper__box_show' : ''}`}>
        <EventsSlider events={interval.events} />
      </div>
    </>
  );
};

export default YearSlider;
