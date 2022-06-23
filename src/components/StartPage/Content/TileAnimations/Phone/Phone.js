import React from "react";
import styles from './Phone.module.css';
import backimg from './mobile.jpg';
import downicon from './download-icon.gif';
import mobile from './boxshot.png';

const Phone = () => {



    return(
        <div className={styles.animationWrapper}>
            
            <div style={{position: 'relative'}}>

                <img src={backimg} className={styles.img} alt="tv"></img>
                
                <div className={styles.downDiv}>

                    <img style={{margin: '10px', height: '80px'}} src={mobile} alt=""></img>

                    <h4>Pobieranie...</h4>
                
                    <img src={downicon} className={styles.downIcon} alt=""></img>

                </div>


            </div>

        </div>
    )
}

export default Phone;