import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Genrelist({ genre }) {
  const [genreList, setGenreList] = useState([]);
//   const API_KEY = import.meta.env.VITE_MOVIES_API_KEY
// console.log(JSON.stringify(import.meta.env.VITE_MOVIES_API_KEY));
  useEffect(() => {
    const options = {
        method: 'GET',
        url: `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2022`,
        headers: {
          'X-RapidAPI-Key':import.meta.env.VITE_MOVIES_API_KEY,
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      
      const fetchGenres= async ()=>{
        try {
            const response = await axios.request(options);
            setGenreList(response.data.results.splice(2,4))
        } catch (error) {
            console.error(error);
        }
      }
    fetchGenres();
  }, []); 

  return (
    <>
      <p style={{ overflowY: 'hidden',marginLeft:'70px',fontSize:'25px',color:'#878787' }}>{genre}</p>
      <div style={{ display: 'flex', overflow: 'hidden', marginLeft: '50px' ,marginBottom:'20px'}}>
       {
        genreList.map((item)=>{
            return (
                <div style={{ width: "25vw",margin:'5px' }}>
                <img style={{
                  objectFit: "cover",
                  width: "20vw",
                  height: "18vh",
                  borderRadius: "12px",
                }} src={item?.primaryImage?.url} alt="title image" />
                </div>
            )
        })
       }
      </div>
    </>
  );
}

export default Genrelist;
