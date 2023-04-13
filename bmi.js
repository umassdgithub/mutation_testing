module.exports= function bmi(w_lbs,h_foot,h_inches) {
  // convert w to kg
  if(typeof(w_lbs)==='number' && typeof(h_foot)==='number' && typeof(h_inches)==='number')
  {
    const w_kg = Math.abs(w_lbs / 2.205);
    const h_meter = ((h_foot*12 + h_inches) * 2.54) / 100
   // console.log(`you are ${h_meter.toFixed(2)} meters, and ${w_kg.toFixed(2)} kg`)
   // convert h from f
   if(w_kg<0){ // infeasible decision point
           return -2
      }
    return parseFloat((w_kg/(h_meter*h_meter)).toFixed(2));
  }
  else{
   // console.log("Input not correct!")
    return -1
  }
}