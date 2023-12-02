import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Weather() {
    const [weather,setWeather] = useState(false)
    const [time,setTime] = useState()
    const [date,setDate] = useState()
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
    useEffect(() => {
        const Weathernow = async () => {
          try {
            const response = await axios.get(
             `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Yanam&aqi=no`
            );
            setWeather(response.data);
          } catch (error) {
            console.error('Error fetching weather:', error);
          }
        };
        Weathernow();
      }, []);
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
        borderRadius:'15px',
        marginTop:'18px'
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
        <div>
            {weather?(
                <div style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:"space-around",
                }}
                >{''} <div>
                    <img src={weather.current.condition.icon} style={{width:'75px',height:'75px'}} />
                    <p style={{fontWeight:'510',marginTop:'-18px',textAlign:'center'}}>{weather.current.condition.text}</p>
                </div>
                <div>
                    <p style={{
                        fontSize:'37px',
                        margin:'5px',
                    }}>
                        <span>{weather.current.temp_c}</span>°C
                    </p>
                    <p>{weather.current.pressure_mb} mbar</p>
                    <p style={{
                        marginTop:'-23px',fontWeight:'510'
                    }}>Pressure🌡</p>
                </div>
                <div>
                    <p style={{marginTop:'5px'}}><span>{weather.current.wind_kph}</span> km/h</p>
                    <p style={{marginTop:'-20px',fontWeight:'510'}}>Wind 🍃</p>
                    <p><span>{weather.current.humidity}</span> %</p>
                    <p style={{marginTop:'-20px',fontWeight:'510'}}>Humidty💧</p>
                </div>
                </div>
            ):(<div style={{margin:'40px',fontSize:'25px',textAlign:'center'}}>Loading..Please wait</div>)}
        </div>
    </div>
  )
}

export default Weather