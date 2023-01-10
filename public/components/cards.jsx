import style from "../../styles/cards.module.css";
import { VscArrowSwap } from "react-icons/vsc";
import Chart from "./linechart";
const Cards = ({ elem }) => {
  const { icon, coin, currency, amount, dip } = elem;
  return (
    <div className={style.card}>
      <div className={style.cardText}>
        <div className={style.cardtexts}>
          <img src={icon} />
          <span className={style.coinText}>
            <p>{coin}</p> <VscArrowSwap className={style.arrow} />
            <p>{currency}</p>
          </span>
          <h4>{amount}</h4>
          <p className={style.dip}>{dip}</p>
        </div>
        <div className={style.cardGraph}>
          <Chart />
        </div>
      </div>
    </div>
  );
};
export default Cards;
