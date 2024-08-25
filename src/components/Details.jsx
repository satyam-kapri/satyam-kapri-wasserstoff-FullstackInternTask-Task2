import React, { useContext, useEffect, useState } from 'react'
import '../css/Details.css'
import { DataContext } from '../context/DataContext';
function Details() {

  const [filteredOut,setFilteredOut]=useState(0); //for count of filtered out data
  const {data}=useContext(DataContext);

  useEffect(()=>{
     setFilteredOut(1000-data.length);
  },[data])


  return (
   
      <div class="details w-full h-auto p-2 md:p-4 flex flex-col justify-between rounded-lg  highlight-white">
            <div className='flex flex-col items-center justify-between py-4 rounded-lg' style={{background:'#fdfdfd45'}}>
            <span className='text-xl font-semibold'>1000</span>
            <span>Total Entries</span>
            </div>
            <div className='flex flex-col items-center justify-between py-4 rounded-lg' style={{background:'#fdfdfd45'}}>
            <span className='text-xl font-semibold'>{filteredOut}</span>
            <span>Filtered Out</span>
            </div>
            <div className='flex flex-col items-center justify-between py-4 rounded-lg' style={{background:'#fdfdfd45'}}>
            <span className='text-xl font-semibold'>{1000-filteredOut}</span>
            <span>Remaining</span>
            </div>
            

     </div>
   
  )
}

export default Details
