import './App.scss';
import { useState } from 'react';

import data from './data';

function App() {
  const [formula, setFormula] = useState('');
  return (
    <div className='App'>
      {/* <h1 className='header'>Formulator</h1> */}
      <header>
        <form>
          <div className='header_select'>
            <label htmlFor='formulaName'>Formula</label>
            <select
              value={formula}
              name='furmulaName'
              id='formulaName'
              onChange={(e) => setFormula(e.target.value)}>
              <option name='Elecare Infant'>Elecare infant</option>
              <option name='Elecare Jr.(unflavored/vanila)'>
                Elecare Jr. (unflavored/vanila)
              </option>
            </select>
          </div>
          <div className='header_input'>
            <label htmlFor='kcal/oz'>KCAL/ oz.</label>
            <input placeholder='0'></input>
          </div>
          <div className='header_input'>
            <label htmlFor='scoops'>#Scoops</label>
            <input placeholder='0'></input>
          </div>
        </form>
      </header>
      <section className='section'>
        <div className='section_data'>
          <h2 className='section_data-header'>Data</h2>
          <table>
            <tbody>
              <tr>
                <th>kcal/scp</th>
                <th>kcal/g</th>
                <th>g pro/ g pwd</th>
                <th>g pwd/scp</th>
                <th>g pwd/lvl cup</th>
              </tr>
              <tr className='table-data-row-top'>
                <td className=' table-data-cell-right'>44.7</td>
                <td className=' table-data-cell-right'>4.75</td>
                <td className=' table-data-cell-right'>0.15</td>
                <td className=' table-data-cell-right'>9.4</td>
                <td>107</td>
              </tr>
              <tr className='table-data-row-bottom'>
                <td className='table-data-cell-right'>7.2</td>
                <td className='table-data-cell-right'>2.2</td>
                <td
                  className='
                  table-data-cell-right'>
                  0.74
                </td>
                <td className='table-data-cell-right'>400</td>
                <td>14.1</td>
              </tr>
              <tr>
                <th>g pwd/Tbsp</th>
                <th>g pwd/tsp</th>
                <th>disp (ml/g)</th>
                <th>g pwd/can</th>
                <th>oz pwd/can</th>
              </tr>
            </tbody>
          </table>
          <hr></hr>
          <div className='section-footer'>
            <div>
              Disp (ml/ scp)
              <p>6.54</p>
            </div>
            <div>
              Formula Total Vol. (oz)
              <p>2.02</p>
            </div>
            <div>
              Total Cals/ Formula
              <p>44.5</p>
            </div>
          </div>
        </div>
        <div className='section_water-div'>
          <h2>Water</h2>
          <p className='section_water-ml'>53.28ml</p>
          <p className='section_water-oz'>1.80 oz</p>
        </div>
      </section>
    </div>
  );
}

export default App;
