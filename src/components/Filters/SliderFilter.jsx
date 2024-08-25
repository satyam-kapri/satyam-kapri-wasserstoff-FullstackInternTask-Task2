import React, { useEffect } from 'react'
import Slider from '@mui/material/Slider';
function SliderFilter({filters,filtername,setFilters,reset,setReset}) {
 

  const minDistance = 1;
  const [value1, setValue1] = React.useState([2007, 2051]);

  // reset the sliders to default
   useEffect(()=>{
     if(reset===true){
         setValue1([2007,2051]);
         setReset(false);
     }
   },[reset])


   // handle change of a slider
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    let mn,mx;
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      mn=Math.min(newValue[0], value1[1] - minDistance);mx=value1[1];
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
      mn=value1[0],mx=Math.max(newValue[1], value1[0] + minDistance);
    }
    let f=filters;
    Object.entries(f[filtername]).forEach(([k,v])=>{
      if(k<mn)f[filtername][k]=0;
      if(k>=mn && k<=mx)f[filtername][k]=1;
      if(k>mx)f[filtername][k]=0;
    })
    setFilters(f);
  };

  return (
    <div>
       <Slider
        getAriaLabel={() => 'Minimum distance'}
        min={2007}
        max={2051}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        disableSwap
      />
    </div>
  )
}

export default SliderFilter
