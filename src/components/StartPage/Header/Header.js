import React, { Component } from "react";
import styles from './Header.module.css';
import netflixLogo from './netflix_logo.png';
import { Link } from 'react-router-dom';


class Header extends Component {

    render(){

        const movePlaceholder = () => {
            let placeholder = document.getElementById('floatingPlaceholder');
            placeholder.classList.add(styles.floatingPlaceholderFocus);
        }

        const backPlaceholder = () => {
            let placeholder = document.getElementById('floatingPlaceholder');
            placeholder.classList.remove(styles.floatingPlaceholderFocus);
        }


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

                    <Link to='/login' className={styles.loginButton}>
                        Zaloguj się
                    </Link>
                    
                    
                </div>


                <div className={styles.startContainer}>
                    <h1>Nieograniczona oferta <br></br> filmów, seriali, programów <br></br>i nie tylko.</h1>
                    <h2>Oglądaj wszędzie. Anuluj w każdej chwili.</h2>
                    
                    <p>Zaczynamy oglądać? Wprowadź adres e-mail, aby utworzyć lub odnowić konto.</p>
                    <div className={styles.startForm}>

                        <span id="floatingPlaceholder" className={styles.floatingPlaceholder}>Adres e-mail</span>

                        <input onFocus={movePlaceholder} onBlur={backPlaceholder} autoComplete="email" type="text" className={styles.startInput}></input>

                        <button className={styles.startButton}>Rozpocznij &#62;</button>

                    </div>

                </div>

            </div>
        )
    }
}

export default Header;