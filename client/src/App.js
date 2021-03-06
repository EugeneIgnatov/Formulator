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
        <div>
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
              <tr>
                <td>44.7</td>
                <td>4.75</td>
                <td>0.15</td>
                <td>9.4</td>
                <td>107</td>
              </tr>
              <tr>
                <td>7.2</td>
                <td>2.2</td>
                <td>0.74</td>
                <td>400</td>
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

        <div>
          <h2 className='section_water-header'>Water</h2>
          <p className='section_water-ml'>53.28ml</p>
          <p className='section_water-oz'>1.80 oz</p>
        </div>
      </section>
    </div>
  );
}

export default App;
