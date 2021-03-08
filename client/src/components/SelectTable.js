import React from 'react';
import './SelectTable.scss';

const SelectTable = ({ selectedFormula }) => {
  const {
    kcal_Scp,
    kcal_g,
    g_prot_g_poweder,
    g_poweder_scp,
    g_poweder_level_cup,
    g_poweder_tbls,
    g_poweder_tsp,
    disp,
    g_poweder_can,
    oz_lbs_powder_can,
  } = selectedFormula;
  return (
    <div>
      <h3 className='section_data-header'>Data</h3>
      <table>
        <tbody>
          <tr className='tr'>
            <th>kcal/scp</th>
            <th>kcal/g</th>
            <th>g pro/ g pwd</th>
            <th>g pwd/scp</th>
            <th>g pwd/lvl cup</th>
          </tr>
          <tr className='table-data-row-top'>
            <td className=' table-data-cell-right'>{kcal_Scp}</td>
            <td className=' table-data-cell-right'>{kcal_g}</td>
            <td className=' table-data-cell-right'>{g_prot_g_poweder}</td>
            <td className=' table-data-cell-right'>{g_poweder_scp}</td>
            <td>{g_poweder_level_cup}</td>
          </tr>
          <tr className='table-data-row-bottom'>
            <td className='table-data-cell-right'>{g_poweder_tbls}</td>
            <td className='table-data-cell-right'>{g_poweder_tsp}</td>
            <td
              className='
                  table-data-cell-right'>
              {disp}
            </td>
            <td className='table-data-cell-right'>{g_poweder_can}</td>
            <td>{oz_lbs_powder_can}</td>
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
    </div>
  );
};

export default SelectTable;
