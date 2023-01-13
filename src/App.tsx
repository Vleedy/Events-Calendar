import React, { useState } from 'react';
import './App.scss';
import Circle from './components/Circle';
import YearSlider from './components/YearSlider/YearSlider';
import { data } from './data';

function App() {
  const [idInterval, setIdInterval] = useState<number>(2);

  return (
    <div className="App">
      <div className="container">
        <h1>
          Исторические
          <br />
          даты
        </h1>
        <div className="line line_vertical"></div>

        <Circle idInterval={idInterval} quantity={data.length} setIdInterval={setIdInterval} />
        <YearSlider
          interval={data[idInterval]}
          quantity={data.length}
          idInterval={idInterval}
          setIdInterval={setIdInterval}
        />
        <div className="line line_horizontal"></div>
      </div>
    </div>
  );
}

export default App;
