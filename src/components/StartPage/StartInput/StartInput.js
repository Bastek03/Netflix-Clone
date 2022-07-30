import React from "react";
import styles from './StartInput.module.css';

const StartInput = props => {

    const movePlaceholder = () => {
        let placeholder = document.getElementsByClassName(styles.floatingPlaceholder);
        placeholder[props.id].classList.add(styles.floatingPlaceholderFocus);
    }
    
    let attempt = 0;
    const backPlaceholder = () => {

        let value = document.getElementsByClassName(styles.startInput);
        if (value[props.id].value !== "") {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value[props.id].value)) {

                let field = document.getElementsByClassName(styles.error);
                field[props.id].style.visibility = 'hidden';
            }else {
                const error = "Wprowadź prawidłowy adres e-mail";
                attempt = 1;
                let field = document.getElementsByClassName(styles.error);
                field[props.id].textContent = error;
                field[props.id].style.visibility = 'visible';
            }

        }else {
            console.log(attempt);
            if (attempt === 1) {
                let field = document.getElementsByClassName(styles.error);
                field[props.id].textContent = "Adres e-mail jest wymagany.";
            }
            let placeholder = document.getElementsByClassName(styles.floatingPlaceholder);
            placeholder[props.id].classList.remove(styles.floatingPlaceholderFocus);
        }

    }

    return(
        <div className={styles.container}>

            <p>Zaczynamy oglądać? Wprowadź adres e-mail, aby utworzyć lub odnowić konto.</p>

            <div className={styles.startForm}>

                <div className={styles.floatingLabelWrapper}>
                    <input onFocus={movePlaceholder} onBlur={backPlaceholder} autoComplete="email" type="text" className={styles.startInput}></input>
                    
                    <span id="floatingPlaceholder" className={styles.floatingPlaceholder}>Adres e-mail</span>
                </div>
                
                <button className={styles.startButton}>Rozpocznij &#62;</button>

            </div>
                <span className={styles.error}>error</span>
        </div>
    )
}

export default StartInput;