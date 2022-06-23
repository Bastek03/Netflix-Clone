import React from "react";
import styles from './Tile.module.css';

const Tile = props => {

    const order = props.order;
    console.log(typeof(order));


    return(
        <div className={styles.container}>
            

            <div className={styles.wrapper}>

                <div className={styles.content} style={{order: order}}>
                    <h1>{props.header}</h1>
                    <h2>{props.mess}</h2>
                </div>
                
                {props.animation}


            </div>


        </div>
    )
}

export default Tile;