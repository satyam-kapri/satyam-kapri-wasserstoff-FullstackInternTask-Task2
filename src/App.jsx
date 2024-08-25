import React, { useContext } from 'react'
import './App.css'
import LineChart from './components/charts/LineChart'
import PieChart from './components/charts/PieChart'
import BarChart from './components/charts/BarChart'
import MapChart from './components/charts/MapChart'
import LeftPanel from './components/LeftPanel'
import Head from './components/Head'
import Details from './components/Details'
import { DataContext } from './context/DataContext'
import Loading from './components/Loading'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const {loading}=useContext(DataContext);
  return (
    <div>
      { loading===true?<Loading></Loading>:(<>
        
        {/* main header */}
        <div className='header sticky top-0 z-20'>
        <ToastContainer theme='dark' />
             <Head></Head>
        </div>
         
         {/* main body */}
        <div className='body p-4'>
            <LeftPanel></LeftPanel>
            <div className='grid'>
            <LineChart></LineChart>
            <PieChart></PieChart>  
            <Details></Details>
            <BarChart></BarChart>
            <MapChart></MapChart>
            </div>
        </div></>)
     }
    </div>

  )
}

export default App
