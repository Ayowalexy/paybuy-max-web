import Layout from "../public/components/layout.pages";
import style from "../styles/dashboard.module.css";
import Data from "../public/data";
import Cards from "../public/components/cards";
import MarketOverview from "../public/components/market-overview";
import Balance from "../public/components/balance";
import RecentTable from "../public/components/table";
const Dashboard = () => {
  return (
    <Layout>
      <div className={style.dashboardcontainer}>
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
              <Cards elem={elem} />
            ))}
          </div>
          <MarketOverview />
          <RecentTable/>
        </div>
        <div className={style.secContainer}>
        <Balance/>
        </div>
      </div>
    </Layout>
  );
};
export default Dashboard;
