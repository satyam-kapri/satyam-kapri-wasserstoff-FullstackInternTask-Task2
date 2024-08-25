import React, { useContext, useEffect, useState } from 'react'
import ApexCharts from 'react-apexcharts';
import '../../css/PieChart.css'
import { DataContext } from '../../context/DataContext';
function PieChart() {
// main data
const {data}=useContext(DataContext);
  
// count the frequency of each topic
const frequency = {};
data.forEach((i) => {
  if (i.topic !== "") {
    frequency[i.topic] = (frequency[i.topic] || 0) + 1;
  }
});
const series = Object.values(frequency);
const categories=Object.keys(frequency);

// options for the chart
  const options = {
    series: series,
    labels:categories,
    chart: {
    type: 'donut',
    background:'none',
    toolbar:{

      show:false
    }
  },
  plotOptions: {
    pie: {
      expandOnClick: true,
      donut: {
        size: '85%', // Controls the overall size of the donut
        labels: {
          show: true,
          total:{
            show:true,
            label:'Total Topics'
          }
        },
        
      },
      startAngle: -90,
      endAngle: 270
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'gradient',
  },
  theme:{
    mode:'dark',
    palette: 'palette8', 
  },
  legend: {
    formatter: function(val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex]
    }
  },
  stroke:{
  width:0
  },
  
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  return (
     
      <div class="piechart p-4 md:p-8 flex flex-col justify-between bg-base rounded-lg  highlight-white">
        <div className='flex items-center p-0.5 px-4 rounded-full bg-base-lighter highlight-white w-min'>
                    <p className='w-max'><span className='text-light-orange'>Topics </span>Distribution</p>
        </div>
       <ApexCharts options={options} series={options.series} type='donut' height={200}></ApexCharts>
</div>
   
  )
}

export default PieChart
