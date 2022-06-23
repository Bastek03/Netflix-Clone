import React from "react";
import Tile from "../Tile/Tile";
import Tv from "../TileAnimations/Tv/Tv";
import Phone from "../TileAnimations/Phone/Phone";
import Pc from "../TileAnimations/Pc/Pc";
import Kids from "../TileAnimations/Kids/Kids";

const Tiles = () => {

    const tvAnim = <Tv />;
    const phoneAnim = <Phone />;
    const pc = <Pc />;
    const kids = <Kids />;

    const tvh = "Oglądaj na telewizorze.";
    const tvm = "Oglądaj na telewizorach Smart TV, konsolach PlayStation i Xbox, odtwarzaczach Chromecast, Apple TV oraz Blu-ray i nie tylko.";

    const phoneh = "Pobierz ulubione tytuły i oglądaj offline.";
    const phonem = "Zapisz ulubione tytuły, aby zawsze mieć coś do obejrzenia.";

    const pch = "Oglądaj wszędzie.";
    const pcm = "Oglądaj filmy, seriale i programy bez ograniczeń na telefonie, tablecie, laptopie, telewizorze... Bez dodatkowych opłat.";

    const kidsh = "Utwórz profile dla dzieci.";
    const kidsm = "Pozwól dzieciom przeżywać przygody w towarzystwie uwielbianych bohaterów — w specjalnej sekcji serwisu oferowanej bezpłatnie w ramach członkostwa.";

    return(
        <React.Fragment>

            <Tile animation={tvAnim} header={tvh} mess={tvm}></Tile>
            <Tile animation={phoneAnim} order={2} header={phoneh} mess={phonem}></Tile>
            <Tile animation={pc} header={pch} mess={pcm}></Tile>
            <Tile animation={kids} order={2} header={kidsh} mess={kidsm}></Tile>

        </React.Fragment>
    )
}

export default Tiles;