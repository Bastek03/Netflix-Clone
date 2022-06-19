import style from './Start.module.css';
import Header from '../../components/StartPage/Header/Header';
import Tiles from '../../components/StartPage/Content/Tiles/Tiles';

function Start() {
  return (
    <div className={style.container}>
      
      <Header />

      <Tiles />

    </div>
  );
}

export default Start;
