import React from "react";
import tvImage from './tv.png';
import tvVideo from './video.m4v';
import styles from './Tv.module.css';

const Tv = () => {


    return(

        <div className={styles.animationWrapper}>
            
            <div style={{position: 'relative'}}>
                <img src={tvImage} className={styles.img} alt="tv"></img>
                <div className={styles.videoWrap}>
                    <video src={tvVideo} className={styles.video} muted={true} loop={true} autoPlay={true}></video>
                </div>
            </div>


        </div>
    )
}

export default Tv;