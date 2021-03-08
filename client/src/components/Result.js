import React from 'react';
import './Result.scss';

const Result = ({ selectedFormula, kcalOz = 0, scoops = 0 }) => {
  const {
    // kcal_Scp,
    kcal_g,
    // g_prot_g_poweder,
    // g_poweder_scp,
    // g_poweder_level_cup,
    // g_poweder_tbls,
    // g_poweder_tsp,
    // disp,
    g_poweder_can,
    // oz_lbs_powder_can,
  } = selectedFormula;

  const ml = (formulala, kcalOz) => {
    return formulala * 10 - kcalOz;
  };
  const oz = (formulala, oz) => {
    return (formulala - 10) * oz;
  };
  return (
    <div className='section'>
      <h3>Water</h3>
      <p className='section_water-ml'>
        {ml(kcal_g, kcalOz)}
        <span>ml</span>
      </p>
      <p className='section_water-oz'>
        {oz(g_poweder_can, scoops)}
        <span>oz</span>
      </p>
    </div>
  );
};

export default Result;
