import React from "react";
import styles from './Kids.module.css';
import backImg from './kids.png';

const Kids = () => {


    return(
        <div className={styles.container}>
            <img className={styles.img} alt="" src={backImg}></img>
        </div>
    )
}

export default Kids;