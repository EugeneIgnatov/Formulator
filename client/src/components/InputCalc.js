import React from 'react';

const InputCalc = ({ kcalOz, setKcalOz, scoops, setScoops }) => {
  return (
    <div>
      <form>
        <div className='header_input'>
          <label htmlFor='kcal/oz'>KCAL/ oz.</label>
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
        <div className='header_input'>
          <label htmlFor='scoops'>#Scoops</label>
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
      </form>
    </div>
  );
};

export default InputCalc;
