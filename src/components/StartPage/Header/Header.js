import React, { Component } from "react";
import styles from './Header.module.css';
import netflixLogo from './netflix_logo.png';
import { Link } from 'react-router-dom';
import StartInput from "../StartInput/StartInput";
// import $ from 'jquery';

class Header extends Component {

    render(){
        
        return(

            <div className={styles.wrapper}>

                <div className={styles.header}>

                    <img src={netflixLogo} className={styles.logo} alt="netflix logo"></img>

                    <div className={styles.customSelect}>
                        <select>
                            <option>Polski</option>
                            <option>English</option>
                        </select>
                    </div>

                    <Link to='/Netflix-Clone/login' className={styles.loginButton}>
                        Zaloguj się
                    </Link>
                    
                    
                </div>


                <div className={styles.startContainer}>

                    <h1>Nieograniczona oferta filmów, seriali, programów i nie tylko.</h1>

                    <h2>Oglądaj wszędzie. Anuluj w każdej chwili.</h2>
                    
                </div>

                <div className={styles.startInputWrapper}>
                    <StartInput id={0}/>
                </div>

            </div>
        )
    }
}

export default Header;