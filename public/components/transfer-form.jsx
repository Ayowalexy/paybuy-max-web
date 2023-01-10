import style from "../../styles/transfer-form.module.css";
import Basic from "./formik";
const TransferForm = () => {
  return (
    <div className={style.transfer}>
      <div className={style.form}>
        <div className={style.money}>
        <div className={style.imgcontainer}>
          <p> Available Balance</p>
          <div className={style.amount} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img src="/images/naira.svg" />
            <h2>25,064.00</h2>
          </div>
          <div className={style.circle1}></div>
          <div className={style.circle2}></div>
        </div>
        </div>
        <div className={style.transferForm}>
        <Basic/>
        </div>
      </div>
    </div>
  );
};
export default TransferForm;
