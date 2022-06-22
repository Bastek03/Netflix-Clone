import React from "react";
import styles from './Footer.module.css';


const Footer = () => {
    return(
        <div className={styles.container}>
            

            <div className={styles.wrapper}>

                <p>Pytania? Zadzwoń pod numer 00 800 112 4392</p>


                <div className={styles.listDiv}>
                    <ul>
                        <li><span>Często zadawane pytania</span></li>
                        <li><span>Relacje z inwestorami</span></li>
                        <li><span>Jak oglądać?</span></li>
                        <li><span>Informacje o firmie</span></li>
                        <li><span>Informacje prawne</span></li>
                    </ul>

                    <ul>
                        <li><span>Centrum pomocy</span></li>
                        <li><span>Praca</span></li>
                        <li><span>Warunki korzystania</span></li>
                        <li><span>Skontaktuj się z nami</span></li>
                        <li><span>Tylko na Netflix</span></li>
                    </ul>

                    <ul>
                        <li><span>Konto</span></li>
                        <li><span>Zrealizuj karty podarunkowe</span></li>
                        <li><span>Prywatność</span></li>
                        <li><span>Test prędkości połączenia</span></li>
                    </ul>

                    <ul>
                        <li><span>Media Center</span></li>
                        <li><span>Kup karty podarunkowe</span></li>
                        <li><span>Ustawienia plików cookie</span></li>
                        <li><span>Gwarancja prawna</span></li>
                    </ul>

                </div>
                
                <div className={styles.customSelect}>
                    <select>
                        <option>Polski</option>
                        <option>English</option>
                    </select>
                </div>

                <p>NetflixClone by Sebastian Dawidzki</p>

            </div>

        </div>
    )
}

export default Footer;