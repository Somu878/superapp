import React from 'react'
import styles from './Banner.module.css'
import bannerImage from '../../assets/bannerimage.png'
function Banner() {
  return (
    <div className='bannercontainer'>
        <div className={styles.bannertext}>Discover new things on Superapp</div>
        <img className={styles.bannerimage}src={bannerImage} alt="banner image" />
    </div>
  )
}

export default Banner