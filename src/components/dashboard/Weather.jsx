import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Weather() {
    const [time,setTime] = useState()
    const [date,setDate] = useState()
    useEffect(()=>{
        const date = new Date()
        var hrs = date.getHours()
        var mins = date.getMinutes()
        var amorpm = hrs>=12? 'PM':'AM'
        hrs =hrs%12
        hrs = hrs?hrs:12
        mins = mins < 10 ? "0" + mins : mins;
        var formattedTime = hrs+ ":"+ mins +" "+amorpm;
        setTime(formattedTime) 
    })
    useEffect(()=>{
        const date = new Date()
        var year = date.getFullYear()
        var month = date.getMonth()+1
        var day = date.getDate()
        var formattedDate = day + "-"+month+"-"+year
        setDate(formattedDate)

    })
  return (
    <div style={{
        width:"32.5vw",
        height:'22vh',
        background:'#101744',
        borderRadius:'15px'
    }}>
        <div style={{
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center',
            background:'#FF4ADE',
            height:'7vh',
            borderTopLeftRadius:'15px',
            borderTopRightRadius:'15px',
            fontSize:'33px',
            fontWeight:'500',
        }} >
            <span>{date}</span>
            <span>{time}</span>
        </div>
    </div>
  )
}

export default Weather