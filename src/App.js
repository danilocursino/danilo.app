import { useState, createContext } from 'react';

import './css/App.scss';

import { BubbleCanvas } from './Bubble';
import * as utils from './Util';

export const BubbleContext = createContext();



function Bubbles() {
  const color = utils.randomColor();
  const [colorObj] = useState({
    color: color,
    colorFull: '#' + color,
    colorDark: utils.isColorDark('#' + color),
    colorBlack: utils.isColorBlack('#' + color)
  });
  const [winHeight, updateWinHeight] = useState(window.innerHeight);
  const [winWidth, updateWinWidth] = useState(window.innerWidth);
  const [quantity] = useState(utils.randomNumber(9, 15));

  window.addEventListener('resize', () => {
    updateWinHeight(window.innerHeight);
    updateWinWidth(window.innerWidth);
  });

  return (
    <BubbleContext.Provider value={{ colorObj, winHeight, winWidth, quantity }}>
      <BubbleCanvas />
    </BubbleContext.Provider>
  );
}

export default Bubbles;
