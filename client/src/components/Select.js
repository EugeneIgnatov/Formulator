import React from 'react';
import './Select.scss';

const Select = ({ formula, setFormula }) => {
  return (
    <div className='select'>
      <h3>Formula</h3>
      <select
        data-testid='select'
        value={formula}
        name='formulaName'
        id='formulaName'
        onChange={(e) => setFormula(e.target.value)}>
        <option value='Elecare Infant'>Elecare Infant</option>
        <option
          data-testid='select-option'
          value='Elecare Jr.(unflavored/vanila)'>
          Elecare Jr.(unflavored/vanila)
        </option>
      </select>
    </div>
  );
};

export default Select;
