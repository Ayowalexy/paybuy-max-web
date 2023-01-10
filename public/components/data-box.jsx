import { Fragment } from "react";
import GraphData from "./graph-data";
import style from "../../styles/data-box.module.css";
import { useRouter } from "next/router";
const DataBox = ({ elem }) => {
  const { icon, name, percent, dollar, dip, coin, code, } = elem;
  const router = useRouter();
  const {coins} = router.query;
  return (
    <Fragment>
      <div className={style.dataBoxContainer} onClick = {() => router.push(`/mywallet/${name.toLowerCase()}`)}>
        <p className={style.balance}>Available Balance</p>
        <div className={style.inner}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={icon} />
              <p className={style.name}>{name}</p>
            </div>
            <p className={style.percent}>{percent}</p>
          </div>
          <div className={style.dollar}>
            <p>DOLLAR EQUIVALENT</p>
            <h3>{dollar}</h3>
          </div>
        </div>
        <div className={style.graph}>
          <GraphData />
        </div>
        <div
          style={{
            width: "90%",
            height: "3rem",
            margin: "1rem auto",
            background: "#FAF3F1",
            borderRadius: "2px",
          }}
        >
          <span
            className={style.code}
            style={{ display: "flex", alignItems: "center" }}
          >
            <p>{dip} </p>
            <p style={{ marginLeft: ".2rem" }}>{coin}</p>
          </span>
          <p className={style.copyText}>{code}</p>
        </div>
      </div>
    </Fragment>
  );
};
export default DataBox;
