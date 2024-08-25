import React, { useContext, useEffect, useState } from 'react'
import '../../css/LineChart.css'
import { DataContext } from '../../context/DataContext';
import ApexCharts from 'react-apexcharts';
import Dropdown from '../Dropdown';

function LineChart() {
  
  // dropdown states
  const [showDropdown,setShowDropdown]=useState(false);
  const [item1,setItem1]=useState('Intensity');
  const [item2,setItem2]=useState('Likelihood');
  const [item3,setItem3]=useState('Relevance');

  //select item from dropdown
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

  const {data}=useContext(DataContext);

  // Parse the date
  const parseDate = dateString => new Date(dateString);

  // Create a map to store unique dates with their values
  const dateMap = new Map();

  // Iterate through data and remove duplicates by keeping only the latest value
  data.forEach(d => {
    const date = parseDate(d.published);
    dateMap.set(date.getTime(), { date, value: d[item1.toLowerCase()] }); // Use getTime() for unique keys
  });
 
  // Convert map to array and sort by date
  const uniqueData = Array.from(dateMap.values()).map((d) => {
    let date=d.date.getTime();
    let value= d.value;
   
    if(date!=="" && value!=="" && !isNaN(date) && !isNaN(value))return {date,value};
  }).filter(d => d !== undefined);
  
  // sort the data in increasing order according to date
  uniqueData.sort((a, b) => a.date - b.date);
 
  // options for the chart
  const options = {
    chart: {
      type: 'line',
      height: 200,
      width:200,
      background:'none'
      ,toolbar:{show:true,
        tools:{
           download:false
        }
      }
    },
    theme:{mode:'dark'},
    xaxis: {
    
      type: 'datetime', // Use datetime for proper date-based x-axis
      title: {
        show:false
      }
      ,
      min:new Date('2015-12-01').getTime(),
      max:new Date('2016-04-30').getTime()
    },
    yaxis: {
      title: {
        show:false
      }
    },
    colors:['#FFC96F'],
    stroke: {
      colors:['#FFC96F'],
      curve: 'smooth',
      width: 2
    },
    title: {
      show:false
    },
    markers: {
      size: 0
    },
    tooltip: {
        theme:'dark',
      x: {
        format: 'dd MMM yyyy' // Format date in tooltip
      }
      ,colors:{}
    },
    grid: {
      show: false
    }
    
  };
  
  return (

<div  className='linechart relative w-full h-full md:h-full p-4 md:p-8 md:pb-1 flex flex-col justify-between rounded-lg highlight-white bg-gradient-to-br from-light-orange/10 to-40% to-base '>
<div  className='flex items-center mb-2 p-0.5 px-4 pl-1 rounded-full bg-base-lighter highlight-white w-min'>
                    <p className='w-max flex items-center'>
                      <span  onClick={()=>{setShowDropdown(!showDropdown);}} className='text-light-orange flex items-center justify-between rounded-xl cursor-pointer px-2' style={{background:'rgb(155 152 127 / 14%)'}}>{item1}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke='#FFC96F' d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                      </span>
                      &nbsp;
                      with Published Year
                    </p> 
                   
</div>

{
showDropdown &&
<Dropdown item2={item2} item3={item3} selectItem={selectItem} setShowDropdown={setShowDropdown}></Dropdown>
  
}

<ApexCharts 
        options={options} 
        series={[{ name: 'Value', data:uniqueData.map(d => [d.date, d.value])}]} 
        type="line" 
        height={200}
        
/>
</div>
  )
}

export default LineChart
