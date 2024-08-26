import React, {useState, useContext } from 'react'
import '../../css/MapChart.css'
import { Chart } from "react-google-charts";
import { DataContext } from '../../context/DataContext';
import Dropdown from '../Dropdown';
function MapChart() {
  // dropdown states
  const [showDropdown,setShowDropdown]=useState(false);
  const [item1,setItem1]=useState('Relevance');
  const [item2,setItem2]=useState('Likelihood');
  const [item3,setItem3]=useState('Intensity');

  // select item from dropdown
  const selectItem=(item)=>{
    if(item==="Likelihood"){
      setItem1("Likelihood");setItem2("Intensity");setItem3("Relevance");
    }
    else if(item==="Relevance"){
      setItem1("Relevance");setItem2("Intensity");setItem3("Likelihood");
    }
    else{
      setItem1("Intensity");setItem2("Relevance");setItem3("Likelihood");
    }
  }

  // main data
  const {data}=useContext(DataContext);

  // creating data for the chart
  const newdata = [
    ["Country", "likelihood"],
  ];
  let frequency={}
  data.forEach((item)=>{
    if(item.country!=="" && item[item1.toLowerCase()]!==""){
      frequency[item.country]=frequency[item.country]||0 + item[item1.toLowerCase()]; 
    }
  })
  Object.keys(frequency).forEach((k)=>{
    newdata.push([k,frequency[k]]);
  })
  // console.log(newdata);

  // options for the chart
  const options = {
   colorAxis:{width:'10%',colors:['#FFEEA9','#FFBF78','#FFC100'],position:'right'},
    datalessRegionColor: "#5e5e5e",
    backgroundColor: "#131419",
  };
  options['dataMode']='regions';

return (
  
      <div class="mapchart relative w-full  p-4 md:p-8 flex flex-col justify-between bg-base rounded-lg  highlight-white" >
        <div className='z-10 flex items-center p-0.5 px-4 pl-1 rounded-full bg-base-lighter highlight-white w-min'>
        <p className='w-max flex items-center'>
                      <span  onClick={()=>{setShowDropdown(!showDropdown);}} className='text-light-orange flex items-center justify-between rounded-xl cursor-pointer px-2' style={{background:'rgb(155 152 127 / 14%)'}}>{item1}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke='#FFC96F' d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                      </span>
                      &nbsp;
                      by Country
        </p> 
</div> 
{
showDropdown &&
<Dropdown item2={item2} item3={item3} selectItem={selectItem} setShowDropdown={setShowDropdown}></Dropdown>
  
}
   <div className='flex justify-center'>
      <Chart
      chartType="GeoChart"
      width="90%"
      height="330px"
      data={newdata}
      options={options}
    />
    </div>
</div>
   
  )
}

export default MapChart
