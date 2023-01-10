import Layout from "../public/components/layout.pages";
import style from "../styles/btc.module.css";
const Coin = () => {
  return (
    <Layout>
      <div className={style.firstDiv}>
        <div className={style.firstDiv1}>
        <div className={style.secDiv}></div>
        <div className={style.thirdDiv}></div>
        </div>
        <div className={style.firstDiv2}></div>
      </div>
    </Layout>
  );
};
export default Coin;
