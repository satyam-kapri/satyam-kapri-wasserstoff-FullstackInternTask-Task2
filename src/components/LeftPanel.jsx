import React, { useContext, useEffect, useState } from 'react'
import '../css/LeftPanel.css'
import SliderFilter from './Filters/SliderFilter'
import { Button} from '@mui/material'
import SelectFilter from './Filters/SelectFilter'
import { DataContext } from '../context/DataContext'
import { toast } from 'react-toastify'

function LeftPanel() {

  const {filters,setFilters,applyFilters,resetFilters}=useContext(DataContext);
  const [reset,setReset]=useState(false);
 
  return (
      
      <div className="leftpanel p-4 md:p-8 flex flex-col  bg-base rounded-lg  ">
       
       <div className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
       </svg>
       &nbsp;
       <h1 className='text-lg'>Data Filters</h1>
       </div>

       {/* all filters */}
       {filters &&
       <div className='filters overflow-y-scroll overflow-x-hidden py-4 px-4 mt-2'>
           <div className='mb-4'>
           <h1 className='text-sm text-txt'>End Year</h1>
           <SliderFilter filters={filters} filtername={'end_year'} setFilters={setFilters} reset={reset} setReset={setReset}></SliderFilter>
           </div>
           
           <div className='mb-4'>
          <SelectFilter filters={filters} filtername={'topic'} setFilters={setFilters} reset={reset} setReset={setReset}></SelectFilter>
           </div>
           
           <div className='mb-4'>
          <SelectFilter filters={filters} filtername={'sector'} setFilters={setFilters} reset={reset} setReset={setReset}></SelectFilter>
           </div>
           
           <div className='mb-4'>       
             <SelectFilter filters={filters} filtername={'region'} setFilters={setFilters} reset={reset} setReset={setReset}></SelectFilter>
           </div>
           
           <div className='mb-4'>
           <SelectFilter filters={filters} filtername={'pestle'} setFilters={setFilters} reset={reset} setReset={setReset}></SelectFilter>
           </div>
           
           <div className='mb-4'>
           <SelectFilter filters={filters} filtername={'source'} setFilters={setFilters} reset={reset} setReset={setReset}></SelectFilter>
           </div>
           
           <div className='mb-4'>
          <SelectFilter filters={filters} filtername={'country'} setFilters={setFilters} reset={reset} setReset={setReset}></SelectFilter>
           </div>
       </div>
        }

        {/* apply and reset buttons */}
         <div className='flex justify-around'>
         <Button variant='contained' sx={{height:'30px'}} onClick={()=>{setFilters(filters);applyFilters();toast("Filters applied successfully",{type:'success'})}}>Apply</Button>
         <Button variant='outlined' sx={{height:'30px'}} onClick={()=>{resetFilters();setReset(true);toast("Reset successfully",{type:'success'})}}>Reset</Button>
         </div>
    
     </div>
    
  )
}

export default LeftPanel
