import React, {useState} from 'react'
function Traction() {
const [tractionDes, setTractionDesc] = useState("");  
const [tractionMetric, setTractionMetric] = useState("");  
const [mvpDesc, setmvpDesc] = useState("");  
const tractionDescription = (event)=>{
    setTractionDesc(event.target.value);
}
const tractionMetricHandle = (event)=>{
    setTractionMetric(event.target.value);
}
const mvpDescHandle = (event)=>{
    setmvpDesc(event.target.value);
}

const handleSubmit = (event)=>{
    //setTractionDesc(event.target.value);
    event.preventDefault();
    console.log(tractionMetric,mvpDesc,tractionDes);
}

const returnPrev = ()=>{

}
  return (
    <>
    
   <div className='header'></div>
    <div className='wrapper'>
    <form onSubmit={handleSubmit}>
        <label className='traction-desc'>Traction Description Field *</label>
        <input type="text" 
         value={tractionDes}
         required
         onChange={tractionDescription} 
         className='traction-desc-input'/>
        
        <label>Traction Metrics *</label>
        <input type="text" 
         value={tractionMetric}
         required
         onChange={tractionMetricHandle} />

        <label>Prototype and MVP Description Fields *</label>
        <input type="text" 
         value={mvpDesc}
         required
         onChange={mvpDescHandle} />
        
         <input type="submit" value="Submit" />
         <input type="button" value="Back" onClick={returnPrev} />
        </form> 
    </div>
    </>
  )
}

export default Traction