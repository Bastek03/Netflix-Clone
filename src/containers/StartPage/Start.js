import style from './Start.module.css';
import Header from '../../components/StartPage/Header/Header';
import Tiles from '../../components/StartPage/Content/Tiles/Tiles';
import Questions from '../../components/StartPage/Questions/Questions';
import Footer from '../../components/StartPage/Footer/Footer';

function Start() {
  return (
    <div className={style.container}>
      
      <Header />

      <Tiles />

      <Questions />

      <Footer />

    </div>
  );
}

export default Start;
