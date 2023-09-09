import React from "react"
import styles from './UIIndicators.module.css'
const UIIndicators = ({text,part,color}:{text:string[],part:number,color:string}) => {
    
    
  return (
    <div className={styles.container}>
    <svg className={styles.svg} transform='rotate(-90)'  viewBox="0 0 120 120">
   
    <defs>
         <mask id={part+color+text[0]}>
          <circle  cx="60" cy="60" r="52" fill="none"  stroke="white" strokeWidth="4"  strokeDasharray="326.72" strokeDashoffset={326.72 - (part/100)*326.72}>
             <animate attributeName="stroke-dashoffset" dur="3s" from={326.72} to={326.72 - (part/100)*326.72} repeatCount={1} />
         </circle>
         </mask>
    </defs>
        
           <circle   cx="60" cy="60" r="52" fill="none" stroke="#E4E4E4" strokeWidth="4" />
            <circle   cx="60" cy="60" r="52" fill="none" stroke={color} strokeWidth="4"
              mask={`url(#${part+color+text[0]})`}>
            
            </circle>
    </svg>
    <h1 className={styles.first}>{text[0]}</h1>
    <h1 className={styles.second}>{text[1]}</h1>
    <h1 className={styles.third}>{text[2]}</h1>
    

    </div>
    
  )
};

export default UIIndicators;
