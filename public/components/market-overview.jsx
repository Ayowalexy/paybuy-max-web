import style from "../../styles/market-overview.module.css";
import AreaCharts from "./area-chart";
const MarketOverview = () => {
  return (
    <div className={style.overviewContainer}>
      <div className={style.firstDiv}>
        <span className={style.marketText}>
          <h3>Market Overview</h3>
          <p>7.2141,997.5 (25%)</p>
        </span>
        <div className={style.time}>
          <h6>ALL</h6>
          <h6>1M</h6>
          <h6>6M</h6>
          <h6>1Y</h6>
          <h6>YTD</h6>
        </div>
      </div>
      <div className={style.secDiv}>
      <AreaCharts/>
      </div>
    </div>
  );
};
export default MarketOverview;
