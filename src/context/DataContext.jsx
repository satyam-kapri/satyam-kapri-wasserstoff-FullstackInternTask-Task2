import React, { createContext, useEffect, useState,} from 'react';
import axios from 'axios';

// Context
const DataContext = createContext();

// Provider component
function DataProvider({ children }) {
  const [originalData,setOriginalData]=useState([]);
  const [data,setData]=useState([]);
  const [filters,setFilters]=useState(null);
  const[loading,setLoading]=useState(true);

  useEffect(()=>{
    
    async function fetch(){
      const res=await axios.get('http://localhost:5000/getjsondata');//fetching json data
      setData(res.data);
      setOriginalData(res.data);

      //setting filters to default 1(enabled)
      let f={};
      res.data.forEach((item)=>{
        Object.entries(item).forEach(([k,v])=>{
          if(k && v){
            if (!f[k]) {
              f[k] = {};
            }
            f[k][v] = 1;
          }
        })
      })
      setFilters(f);
      setLoading(false);
    }
    fetch();
  
  },[])

  //apply the selected filters and change the data
  const applyFilters=()=>{
    let d= originalData.filter((item)=>{
         let flag=0;
         Object.entries(item).forEach(([k,v])=>{
          if(filters[k][v]===0){
            flag=1;
          }
         })
         if(flag)return false;
         return true;
    })
    setData(d);
  }

  // reset the filters to default 1 and change the data to original data
  const resetFilters=()=>{
    let f={};
    originalData.forEach((item)=>{
      Object.entries(item).forEach(([k,v])=>{
        if(k && v){
          if (!f[k]) {
            f[k] = {};
          }
          f[k][v] = 1;
        }
      })
    })
    setFilters(f);
    setData(originalData);
  }

  return (
    <DataContext.Provider value={{data,filters,setFilters,applyFilters,resetFilters,loading}}>
      {children}
    </DataContext.Provider>
  );
}
export {DataContext,DataProvider}; 