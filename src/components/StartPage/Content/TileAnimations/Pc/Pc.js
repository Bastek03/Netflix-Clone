import React from "react";
import styles from './Pc.module.css';
import backgroundPng from './device.png';
import backgroundVid from './devices.m4v';


const Pc = () => {



    return(
        <div className={styles.container}>
            <img className={styles.backImg} src={backgroundPng} alt=""></img>

            <video className={styles.video} src={backgroundVid} loop={true} autoPlay></video>
        </div>
    )
}


export default Pc;