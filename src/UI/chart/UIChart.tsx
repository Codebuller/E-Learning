import React, { useEffect, useState } from "react"
import styles from './UIChart.module.css'
import {Legend, LineChart , XAxis, CartesianGrid, Line, YAxis,Tooltip} from "recharts";
import { getDataForCharts } from "../../helpers/firebase";
import Spiner from "../spiner/UISpiner";
interface dataChart {
  
  name: string;
  sprint: number;
  audio: number;

}
const UIChart = () => {
  
  const [data,setData] = useState<dataChart[]>([]);
  const [er,setEr] = useState<boolean>(true);
  useEffect(()=>{
    const fetch = async ()=>{
      try{setData(await getDataForCharts())}
      catch(er){
        setEr(false)
      }
    }
    fetch()
  },[])
    if((data ?? false) && data.length > 1)
  return (
    <div className={styles.main_container}>
         
         <LineChart width={300} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="sprint" stroke="#c41717" />
            <Line type="monotone" dataKey="audio" stroke="#2B788B" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis  dataKey="name" />
            <YAxis />
            <Tooltip  />
            <Legend/>
        </LineChart>
        
    </div>
  )
  else
    return(
  <>
  {
    er &&  <Spiner/>
  }
   </>


      )
};

export default UIChart;
