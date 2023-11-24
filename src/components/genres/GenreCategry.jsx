import React from 'react'
import styles from './genrecategory.module.css'
import action from '..//../assets/image 2.png'
import drama from '..//../assets/image 3.png'
import romance from '..//../assets/image 4.png'
import  thriller from '..//../assets/image 6.png'
import western from '..//../assets/image 7.png'
import horror from '..//../assets/image 8.png'
import fantasy from '..//../assets/image 9.png'
import music from '..//../assets/image 10.png'
import fiction from '..//../assets/image 11.png'
function GenreCategry() {
  const genreData =[
    {
      category:'Action',
      color:'#FF5209',
      image:action,
    },
    {
      category:'Drama',
      color:'#D7A4FF',
      image:drama,
      },
    {
      category:'Romance', 
      color:'#11B800',
      image:romance,
      },
    {
      category:'Thriller',
      color:'#84C2FF',
      image:thriller,
      },
    {
      category:'Western',
      color:'#902500',
      image:western,
    }
    ,
    {
      category:'Horror',
      color:'#7358FF',
      image:horror,
    },
    {
      category:'Fantasy',
      color:'#FF4ADE',
      image:fantasy,
    },
    {
      category:'Music',
      color:'#E61E32',
      image:music,
      },
    {
      category:'Fiction',
      color:'#6CD061',
      image:fiction,
      },
  ]
  return (
    <div className={styles.genrecat} >
       <div className={styles.pickedcat}>
       <div className={styles.superapp} >Superapp</div>
        <p>Choose your entertainment category</p>
       </div>
       <div className={styles.categories}>
        {
          genreData.map((item)=>
            <CategoryCard data={item}/>
          )
        }
       </div>
    </div>
  )
}
const CategoryCard=({data})=>{
  return(
    <div
    data={data}
    style={{
      background: data.color,
      color:'white',
      borderRadius: '10px',
      padding:'7px',
    }}>
      <p>{data.category}</p>
      <img src={data.image} alt={data.category}  style={{
        width:'185px',
        height:'110px',
        borderRadius:'10px'
      }}/>
    </div>
  )
}
export default GenreCategry