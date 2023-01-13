import React, { FC, useEffect, useRef } from 'react';
import gsap from 'gsap';
interface DotProps {
  variable: object;
  setIdInterval: Function;
  id: number;
  idInterval: number;
}
const Dot: FC<DotProps> = ({ idInterval, variable, setIdInterval, id }) => {
  const num = useRef(null);
  const q = gsap.utils.selector(num);
  useEffect(() => {
    gsap.to(q('.number'), { rotation: `+=${-30 * idInterval}`, duration: 0, delay: 0 });
  }, []);
  return (
    <li onClick={() => setIdInterval(id)} style={variable}>
      <div ref={num} className={id === idInterval ? 'dot_active' : 'dot'}>
        <div className="number">{id + 1}</div>
      </div>
    </li>
  );
};

export default Dot;
