import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Genrelist({ genre }) {
  const [genreList, setGenreList] = useState([]);
  useEffect(() => {
    const options = {
        method: 'GET',
        url: `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`,
        headers: {
          'X-RapidAPI-Key': 'd19e1263e3msh3991af654d5761fp11dbeejsn713a6d266677',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      
      const fetchGenres= async ()=>{
        try {
            const response = await axios.request(options);
            setGenreList(response.data.results.splice(4,4))
        } catch (error) {
            console.error(error);
        }
      }
    fetchGenres();
  }, []); 

  return (
    <>
      <p style={{ overflowY: 'hidden' }}>{genre}</p>
      <div style={{ display: 'flex', overflow: 'hidden', marginLeft: '2vw' }}>
       {
        genreList.map((item)=>{
            return (
                <div style={{ width: "20vw", margin: "2vw" }}>
                <img style={{
                  objectFit: "cover",
                  width: "20vw",
                  height: "15vh",
                  borderRadius: "12px",
                }} src={item?.primaryImage?.url} alt="imga" />
                </div>
            )
        })
       }
      </div>
    </>
  );
}

export default Genrelist;
