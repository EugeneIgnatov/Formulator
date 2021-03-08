import React from 'react';
import './InputCalc.scss';

const InputCalc = ({ kcalOz, setKcalOz, scoops, setScoops }) => {
  return (
    <div className='header_input'>
      <div>
        <h3>KCAL/ oz.</h3>
        <input
          name='kcalOz'
          type='number'
          inputMode='numeric'
          onKeyDown={(e) =>
            (e.keyCode === 69 ||
              e.keyCode === 190 ||
              e.keyCode === 189 ||
              e.keyCode === 187) &&
            e.preventDefault()
          }
          onPaste={(e) => e.preventDefault()}
          min={0}
          value={kcalOz}
          onChange={(e) => {
            setKcalOz(e.target.value);
          }}
        />
      </div>
      <div>
        <h3 htmlFor='scoops'>#Scoops</h3>
        <input
          name='scoops'
          type='number'
          inputMode='numeric'
          onKeyDown={(e) =>
            (e.keyCode === 69 ||
              e.keyCode === 190 ||
              e.keyCode === 189 ||
              e.keyCode === 187) &&
            e.preventDefault()
          }
          onPaste={(e) => e.preventDefault()}
          min={0}
          value={scoops}
          onChange={(e) => {
            setScoops(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default InputCalc;
