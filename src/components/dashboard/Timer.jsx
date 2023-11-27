import React, { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import inc from '..//../assets/Vector.png'
import dec from '..//../assets/Vector2.png'
function Timer() {
    const [hr,setHr] = useState(0)
    const [min,setMin] = useState(0)
    const [sec,setSec] = useState(0)
    const [startPaying,setStartplaying] = useState(false)
    const incSecond = ()=>{
        if(sec==59){
            return
        }
        setSec((sec)=>sec+1)
    }
    const decSecond = ()=>{
        if(sec==0){
            return
        }
        setSec((sec)=>sec-1)
    }
    const incMinute=()=>{
        if(min==59){
            return
        }
        setMin((min)=>min+1)
    }
    const decMinute=()=>{
        if(min==0){
            return
        }
        setMin((min)=>min-1)
    }
    const incHour=()=>{
        setHr((hr)=>hr+1)
    }
    const decHour=()=>{
        if(hr==0){
            return
        }
        setHr((hr)=>hr-1)
    }
    function TimeConversion(totalSec) {
        const totalMins = Math.floor(totalSec / 60);
        const seconds = totalSec % 60;
        const hours = Math.floor(totalMins / 60);
        const minutes = totalMins % 60;
        return `${hours}:${minutes}:${seconds}`;
      }
    function resetTimer(){
        setHr(0)
        setMin(0)
        setSec(0)
    }
    function renderRemainingTime({remainingTime }){
        if (remainingTime===0){
            return (startPaying? (<div style={{fontSize:'25px'}}>Times's Up</div>):<div style={{fontSize:'25px'}}>Start Timer</div>)
        }
        return(
            <div style={{fontSize:'35px'}}>{TimeConversion(remainingTime)}</div>
        )
    }

  return (
    <div style={{
        background:'#1E2343',
        width:'60vw',
        height:'27vh',
        borderRadius:'20px',
        display: "flex",
        boxSizing: "border-box",
        padding: "10px",
        alignItems: "center",
        justifyContent: "space-evenly",
    }}
    >
        <div ><CountdownCircleTimer isPlaying={startPaying} duration={sec+min*60+hr*60*60} colors={"#FF6A6A"} size={180} strokeWidth={10} >{renderRemainingTime}</CountdownCircleTimer> </div>
        <div style={{width:'35vw',textAlign:'center'}}>
            <div style={{
                display:'flex',
                justifyContent:'space-evenly',
                fontSize:'20px',
            }} >
                <div style={{textAlign:'center',padding:'6px'}}>
                    <div>Hours</div>
                    <img style={{width:'25px',height:'20px'}} onClick={incHour} src={inc} alt="increment" />
                    <div style={{fontSize:'40px',paddingBottom:'10px'}}>{hr}</div>
                    <img style={{width:'25px',height:'20px'}} onClick={decHour} src={dec} alt="decrement" />
                    </div>
                    <div style={{marginTop:'45px',fontSize:'60px',}} >:</div>
                    <div style={{textAlign:'center',padding:'5px'}}>
                    <div>Minutes</div>
                    <img style={{width:'25px',height:'20px'}} onClick={incMinute} src={inc} alt="increment" />
                    <div style={{fontSize:'40px',paddingBottom:'10px'}}>{min}</div>
                    <img style={{width:'25px',height:'20px'}} onClick={decMinute} src={dec} alt="decrement" />
                    </div>
                    <div style={{marginTop:'45px',fontSize:'60px'}} >:</div>
                    <div style={{textAlign:'center',padding:'5px'}}>
                    <div>Seconds</div>
                    <img style={{width:'25px',height:'20px'}} onClick={incSecond} src={inc} alt="increment" />
                    <div style={{fontSize:'40px',paddingBottom:'10px'}}>{sec}</div>
                    <img style={{width:'25px',height:'20px'}} onClick={decSecond} src={dec} alt="decrement" />
                    </div>
            </div>
            <div style={{background:'#FF6A6A',width:'25vw',height: '34px',marginLeft:'77px',borderRadius:'20px'}} onClick={()=>setStartplaying((state)=>!state)} onDoubleClick={resetTimer} >{startPaying?<p>Pause</p>:<p>Start</p>}</div>
        </div>
    </div> 
    
  )
}

export default Timer