import React from 'react';
import './TableCals.scss';
const TableCalc = ({ selectedFormula, kcalOz = 0, scoops = 0 }) => {
  const {
    // kcal_Scp,
    // kcal_g,
    // g_prot_g_poweder,
    // g_poweder_scp,
    g_poweder_level_cup,
    // g_poweder_tbls,
    g_poweder_tsp,
    // disp,
    g_poweder_can,
    // oz_lbs_powder_can,
  } = selectedFormula;

  const formulaTotalVol = (formula) => {
    return formula + 10 + scoops - kcalOz;
  };
  const dispMlOz = (formula) => formula - 10 + kcalOz;
  const totalCal = (formula) => formula + 12 - kcalOz;
  return (
    <>
      <hr></hr>
      <div className='table-calc'>
        <div>
          Disp (ml/ scp)
          <p>{dispMlOz(g_poweder_level_cup)}</p>
        </div>
        <div>
          Formula Total Vol. (oz)
          <p>{formulaTotalVol(g_poweder_can)}</p>
        </div>
        <div>
          Total Cals/ Formula
          <p>{totalCal(g_poweder_tsp)}</p>
        </div>
      </div>
    </>
  );
};

export default TableCalc;
