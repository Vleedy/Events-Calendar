import React, { useRef, useEffect, FC, useState } from 'react';
import { gsap } from 'gsap';
import Dot from './Dot';

interface CircleProperty {
  setIdInterval: Function;
  quantity: number;
  idInterval: number;
}

const Circle: FC<CircleProperty> = ({ setIdInterval, quantity, idInterval }) => {
  const round = useRef(null);
  const prev = useRef(idInterval);

  useEffect(() => {
    gsap.fromTo(
      round.current,
      {
        rotation: `+=${0}`,
      },
      { rotation: `+=${(360 / 6) * (prev.current - idInterval)}`, duration: 1.2, delay: 0.1 }
    );
    prev.current = idInterval;
  }, [idInterval]);

  return (
    <div className="circle" ref={round}>
      {[...Array(quantity)].map((_, i) => {
        return (
          <Dot
            key={i}
            idInterval={idInterval}
            id={i}
            setIdInterval={setIdInterval}
            variable={{ '--i': i }}
          />
        );
      })}
    </div>
  );
};

export default Circle;
