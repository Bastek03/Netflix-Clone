import React from "react";
import styles from './StartInput.module.css';

const StartInput = props => {

    const movePlaceholder = () => {
        let placeholder = document.getElementsByClassName(styles.floatingPlaceholder);
        placeholder[props.id].classList.add(styles.floatingPlaceholderFocus);
    }

    const backPlaceholder = () => {
        let placeholder = document.getElementsByClassName(styles.floatingPlaceholder);
        placeholder[props.id].classList.remove(styles.floatingPlaceholderFocus);
    }

    return(
        <div className={styles.container}>
            <p>Zaczynamy oglądać? Wprowadź adres e-mail, aby utworzyć lub odnowić konto.</p>
            <div className={styles.startForm}>

                <span id="floatingPlaceholder" className={styles.floatingPlaceholder}>Adres e-mail</span>

                <input onFocus={movePlaceholder} onBlur={backPlaceholder} autoComplete="email" type="text" className={styles.startInput}></input>

                <button className={styles.startButton}>Rozpocznij &#62;</button>

            </div>
        </div>
    )
}

export default StartInput;