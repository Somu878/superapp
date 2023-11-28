import React, { useEffect ,useState} from 'react'
import axios from 'axios'
function News() {
    const [news, setNews] =useState('')
    useEffect(()=>{
        const NewsFromApi = async ()=>{
            await axios.get('https://newsapi.org/v2/everything?q=Apple&from=2023-11-27&sortBy=popularity&apiKey=d9eeab569a2247de8983f8ac4b16cdbc').then(async (data) => await data.json())
            .then((res) => setNews(res.articles[0]));
        }
        NewsFromApi()
    },[]);
  return (
    <div style={{width:'30vw',height:'87vh',marginLeft:'-15px',background:'white',borderRadius:'20px'}}>
        <img src={news.urlToImage} alt="jhs"  style={{ height: "50vh", borderRadius: "12px", width: "30vw" }} />
    </div>
  )
}

export default News