import React, { useState,useContext } from 'react'
import '../../css/BarChart.css'
import ApexCharts from 'react-apexcharts';
import { DataContext } from '../../context/DataContext';
import Dropdown from '../Dropdown';
function BarChart() {

  // dropdown states
  const [showDropdown,setShowDropdown]=useState(false);
  const [item1,setItem1]=useState('Likelihood');
  const [item2,setItem2]=useState('Intensity');
  const [item3,setItem3]=useState('Relevance');

  // for selected dropdown item
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

//  count the frequency of data items
 let frequency={};
 data.forEach((i)=>{
  if(i.region!=="" && i[item1.toLowerCase()]!==""  && i[item1.toLowerCase()]!==undefined){
    frequency[i.region]=frequency[i.region]||0 +i[item1.toLowerCase()];
  }
 })
 const series=Object.values(frequency);
 const categories=Object.keys(frequency);

//  options for the chart
  var options = {
    series: [{
    data: series
  }],
    chart: {
    type: 'bar',
    height:'100%',
    background:'none',
    zoom: {
      enabled: true,
      type: 'x', // Enable zoom along the x-axis
      autoScaleYaxis: true // Optionally enable auto-scaling of y-axis
    },
    toolbar:{
      show:false
    },
   
  },
  theme:{mode:'dark'},
  tooltip:{
   theme:'dark'
  },
  colors:['#FFC96F'],
  plotOptions: {
    
    bar: {
      barHeight:'40%',
      borderRadius: 1,
      borderRadiusApplication: 'end',
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  
  xaxis: {
    categories: categories
  },
  grid:{
    show:false
  }
  };
  return (
   
      <div class="barchart relative w-full  p-4 md:pb-1 md:p-8 flex flex-col justify-between bg-base rounded-lg  highlight-white">
        <div className='flex items-center p-0.5 px-4 pl-1 rounded-full bg-base-lighter highlight-white w-min'>
        <p className='w-max flex items-center'>
                      <span  onClick={()=>{setShowDropdown(!showDropdown);}} className='text-light-orange flex items-center justify-between rounded-xl cursor-pointer px-2' style={{background:'rgb(155 152 127 / 14%)'}}>{item1}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke='#FFC96F' d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                      </span>
                      &nbsp;
                      by Regions
        </p> 
</div>

{
showDropdown &&
<Dropdown item2={item2} item3={item3} selectItem={selectItem} setShowDropdown={setShowDropdown}></Dropdown>
  
}
       <ApexCharts options={options} type='bar' series={options.series} height={'370px'}></ApexCharts>
</div>
    
  )
}

export default BarChart
