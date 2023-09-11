import React from "react"
import styles from './UIChart.module.css'
import {Legend, LineChart , XAxis, CartesianGrid, Line, YAxis,Tooltip} from "recharts";
const UIChart = () => {
    const data = [{name: 'Page A', coll: 400},
    {name: 'Сентябрь', coll: 300},
    {name: 'Ноябрь', coll: 323},
    {name: 'Октябрь', coll: 260, },
    {name: 'Page A', coll: 300, },
    {name: 'Page A', coll: 350, },
    {name: 'Page A', coll: 100, }];
  return (
    <div className={styles.main_container}>
         
         <LineChart width={300} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="coll" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis  dataKey="name" />
            <YAxis />
            <Tooltip  />
            <Legend/>
        </LineChart>
        
    </div>
  )
};

export default UIChart;
