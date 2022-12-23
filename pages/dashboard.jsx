import Layout from "./layout.pages";
import style from "../styles/dashboard.module.css";
import Data from "../public/data";
import Cards from "../public/components/cards";

const Dashboard = () => {
  return (
    <Layout>
      <div className={style.dashboardContainer}>
        <div className={style.firstContainer}>
          <div className={style.img1}>
            <div className={style.bvnText}>
              <h6>Hey Boss!</h6>
              <p>Please input your BVN</p>
            </div>
            <button>Submit now</button>
          </div>
          <img src="/images/warning.svg" className={style.img2} />
          <div className={style.cards}>
            {Data.map((elem) => (
              <Cards elem={elem}/>
            ))}
          </div>
        </div>
        <div className={style.secContainer}></div>
      </div>
    </Layout>
  );
};
export default Dashboard;
