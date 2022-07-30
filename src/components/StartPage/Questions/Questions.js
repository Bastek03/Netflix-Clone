import React from "react";
import styles from './Questions.module.css';
import cross from './cross-svgrepo-com.svg';
import StartInput from "../StartInput/StartInput";

const Questions = () => {


    const showAnswer = (number) => {
        const ans = document.getElementById('ans' + number);
        const cross = document.getElementById('img' + number);

        if (ans.className === styles.close) {
            ans.classList.add(styles.open);
            ans.classList.remove(styles.close);

            cross.classList.add(styles.svgOpen);
            cross.classList.remove(styles.svgClose);
        } else {
            ans.classList.remove(styles.open);
            ans.classList.add(styles.close);

            cross.classList.remove(styles.svgOpen);
            cross.classList.add(styles.svgClose);
        }
    }

    return (
        <div className={styles.container}>
            <h1>Często zadawane pytania</h1>


            <ul>
                <li>
                    <button onClick={() => showAnswer(1)} className={styles.button}>
                        <div>
                        Czym jest Netflix? 
                        </div>
                        <img src={cross} className={styles.svgClose} id="img1" alt=""></img>
                    </button>

                    <div id="ans1" className={styles.close}>
                        <span className={styles.txt}>
                            Netflix to usługa przesyłania strumieniowego, dzięki której użytkownicy mogą korzystać z szerokiej oferty nagradzanych filmów, seriali, programów, anime oraz produkcji dokumentalnych za pośrednictwem tysięcy urządzeń połączonych z internetem.
                            <br></br>
                            <br></br>
                            Możesz oglądać do woli, gdziekolwiek jesteś — bez reklam i za jedną miesięczną opłatą. Co tydzień dodajemy nowe tytuły, więc zawsze jest coś ciekawego do obejrzenia.
                        </span>
                    </div>

                </li>

                <li>
                    <button onClick={() => showAnswer(2)} className={styles.button}>Ile kosztuje korzystanie w serwisu Netflix?
                    
                    <img src={cross} className={styles.svgClose} id="img2" alt=""></img></button>
                    <div id="ans2" className={styles.close}>
                        <span className={styles.txt}>
                            Oglądaj materiały z serwisu Netflix na smartfonie, tablecie, telewizorze Smart TV, laptopie lub innym urządzeniu do odtwarzania — za jedną stałą opłatą miesięczną. Mamy plany w cenie od 29 zł do 60 zł miesięcznie. Bez dodatkowych kosztów i bez umów.
                        </span>
                    </div>
                </li>


                <li>
                    <button onClick={() => showAnswer(3)} className={styles.button}>Gdzie mogę oglądać?<img src={cross} id="img3" className={styles.svgClose} alt=""></img></button>
                    <div id="ans3" className={styles.close}>
                        <span className={styles.txt}>
                            Oglądaj, gdzie i kiedy chcesz. Zaloguj się za pomocą danych swojego konta w witrynie netflix.com na komputerze lub na innym urządzeniu z dostępem do Internetu i zainstalowaną aplikacją Netflix, takim jak telewizor Smart TV, smartfon, tablet, odtwarzacz multimedialny czy konsola do gier.
                            <br></br>
                            <br></br>
                            Możesz także pobierać ulubione programy na urządzenia przenośne z systemem iOS lub Android oraz na urządzenia z aplikacją dla systemu Windows 10. Pobrane tytuły możesz oglądać poza domem, bez połączenia z internetem. Korzystaj z serwisu Netflix, gdzie tylko chcesz.
                        </span>
                    </div>
                </li>

                <li>
                    <button onClick={() => showAnswer(4)} className={styles.button}>Jak zrezygnować z członkowstwa?<img src={cross} id="img4" className={styles.svgClose} alt=""></img></button>
                    <div id="ans4" className={styles.close}>
                        <span className={styles.txt}>
                            Netflix niczego nie narzuca. Żadnych zbędnych umów ani zobowiązań. Możesz w łatwy sposób anulować członkostwo online — wystarczą dwa kliknięcia. Nie naliczamy opłat za rezygnację, dlatego możesz rozpocząć członkostwo i zrezygnować z niego w dowolnej chwili.
                        </span>
                    </div>
                </li>

                <li>
                    <button onClick={() => showAnswer(5)} className={styles.button}>Jakie materiały mogę oglądać w serwisie Netflix?<img src={cross} id="img5" className={styles.svgClose} alt=""></img></button>
                    <div id="ans5" className={styles.close}>
                        <span className={styles.txt}>
                            Serwis Netflix oferuje dostęp do obszernej biblioteki zawierającej filmy pełnometrażowe i dokumentalne, seriale, programy, anime, nagradzane Netflix Originals i nie tylko. Oglądaj do woli, kiedy tylko chcesz.
                        </span>
                    </div>
                </li>

                <li>
                    <button onClick={() => showAnswer(6)} className={styles.button}>Czy Netflix jest odpowiedni dla dzieci?<img src={cross} id="img6" className={styles.svgClose} alt=""></img></button>
                    <div id="ans6" className={styles.close}>
                        <span className={styles.txt}>
                            W ramach członkostwa w serwisie Netflix otrzymujesz dostęp do specjalnej sekcji dla dzieci. Młodzi widzowie mogą oglądać tam filmy, seriale i programy przeznaczone właśnie dla nich, a rodzice mają nad wszystkim kontrolę.

                            Profile dla dzieci chronione są kodem PIN kontroli rodzicielskiej, który uniemożliwia dostęp do treści przekraczających określone kategorie wiekowe, a także pozwala blokować konkretne tytuły.
                        </span>
                    </div>
                </li>

            </ul>

            
            <div>
                <StartInput id={1}/>
            </div>
            
                
        </div>
    )
}

export default Questions;