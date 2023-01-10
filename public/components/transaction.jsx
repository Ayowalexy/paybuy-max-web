import { TbArrowRight } from "react-icons/tb";
import style from "../../styles/transaction.module.css"

const Transaction = ({ element }) => {
  const { time, date, code, btc } = element;
  return (
    <div className={style.transactionInfo}>
      <span style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <p className={style.para}>
          {time}, {date}
        </p>
        <span style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <TbArrowRight className={style.arrow} />
        <p className={style.btc}>{btc}</p>
        </span>
      </span>
      <p className={style.code}>{code}</p>
    </div>
  );
};
export default Transaction;
