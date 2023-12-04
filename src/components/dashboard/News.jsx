import React, { useEffect ,useState} from 'react'
import { GetTime } from '../../helpers/Time'
import { GetDate } from '../../helpers/Date'
import axios from 'axios'
function News() {
  const[getDate,setgetDate] =useState()
  const [getTime,setgetTime] =useState()
    const [news, setNews] =useState('')
    const API_KEY = import.meta.env.VITE_NEWS_API_KEY
    useEffect(()=>{
      const getNews=async ()=>{
        try{
          const res=await axios.get(`/api/everything?q=Technology&apiKey=${API_KEY}`)
          // const res=await axios.get('http://localhost:3000/api/everything?q=Technology')
          setNews(res.data.articles[31]);
        }
        catch(err){
          console.error("Error fetching the news",err);
        }
      }
      getNews()},[]
    )
    useEffect(()=>{
      setgetTime(GetTime())
      setgetDate(GetDate())
    })
  return (
    <div style={{width:'27.5vw',height:'86vh',color:'black',marginLeft:'-15px',background:'white',borderRadius:'20px'}}>
      
        <img src={news.urlToImage} alt="News image from api"  style={{ height: "55vh", borderTopLeftRadius: "20px",borderTopRightRadius:'20px', width: "27.5vw" }} />
        <div
        style={{
          fontSize: "17px",
         
          lineHeight:'30px',
          textAlign:'left',
          fontFamily:'var(--dmsans)',
          margin:'25px',
          height:'26vh'
        }}
      >
        {news.description}...
      </div>
      <div style={{
          position: "absolute",
          background: "rgba(0, 0, 0, 0.74)",
          height: "16vh",
          width: "27.5vw",
          top: "45vh",
          boxSizing: "border-box",
        }}>
          <div style={{
            color:'white',
            margin:'15px',
            fontSize:'23px'
          }} >{news.title}
          </div>
          <span style={{ color: "white", fontSize: "17px", marginLeft:'16px',marginRight:'5px' }}>{getTime} l</span>
          <span style={{ color: "white", fontSize: "17px", marginRight: "10px" }}>{getDate}</span>
        </div>
    </div>
  )
}

export default News