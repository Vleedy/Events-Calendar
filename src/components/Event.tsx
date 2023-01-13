import React, { FC } from 'react';
import { EventsItems } from './EventsSlider';

const Event: FC<EventsItems> = ({ year, describe }) => {
  return (
    <div className="eventCart">
      <h4>{year}</h4>
      <p>{describe}</p>
    </div>
  );
};

export default Event;
