import React, { useState } from "react";
import styles from './StartInput.module.css';
import Swal from 'sweetalert2';

const StartInput = props => {

    const [inputValue, setInputValue] = useState('');

    const inputValueHandler = event => {
        let value = event.target.value;
        setInputValue(value);
    }

    const movePlaceholder = () => {
        let placeholder = document.getElementsByClassName(styles.floatingPlaceholder);
        placeholder[props.id].classList.add(styles.floatingPlaceholderFocus);
    }
    let emailOk = false;
    const backPlaceholder = () => {
        let value = document.getElementsByClassName(styles.startInput);
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (value[props.id].value !== "") {
            if (value[props.id].value.match(validRegex)) {
                let field = document.getElementsByClassName(styles.error);
                field[props.id].style.visibility = 'hidden';
                emailOk = true;
            }else {
                const error = "Wprowadź prawidłowy adres e-mail";
                let field = document.getElementsByClassName(styles.error);
                field[props.id].textContent = error;
                field[props.id].style.visibility = 'visible';
            }

        }else {
            if (value.length <= 5) {
                let field = document.getElementsByClassName(styles.error);
                field[props.id].textContent = "Adres e-mail jest wymagany.";
            }
            let placeholder = document.getElementsByClassName(styles.floatingPlaceholder);
            placeholder[props.id].classList.remove(styles.floatingPlaceholderFocus);
        }

    }

    const startButton = () => {
        if (emailOk) {
            Swal.fire({
                title: 'Great!',
                text: inputValue,
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            })
        }
    }

    return(
        <div className={styles.container}>

            <p>Zaczynamy oglądać? Wprowadź adres e-mail, aby utworzyć lub odnowić konto.</p>

            <div className={styles.startForm}>

                <div className={styles.floatingLabelWrapper}>
                    <input onFocus={movePlaceholder} onBlur={backPlaceholder} onChange={inputValueHandler} autoComplete="on" type="email" className={styles.startInput}></input>
                    
                    <span id="floatingPlaceholder" className={styles.floatingPlaceholder}>Adres e-mail</span>
                    <div className={styles.error}>
                        <span>error</span>
                    </div>
                </div>
                
                <button onClick={startButton} className={styles.startButton}>Rozpocznij &#62;</button>

            </div>

        </div>
    )
}

export default StartInput;