import style from "../../styles/balance.module.css";
import { Fragment } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
const Balance = () => {
  return (
    <Fragment>
      <div className={style.balanceContainer}>
        <div className={style.conversion}>
          <div className={style.rate}>
            <p> Conversion rate = N590</p>
          </div>
          <span className={style.total} style={{ display: "flex" }}>
            <h5>Total Asset</h5>
            <HiOutlineDotsVertical className={style.dots} />
          </span>
          <span className={style.naira}>N0.00</span>
          <span className={style.p}>
            <h5>Naira</h5>
          </span>
        </div>
        <div className={style.affliate}>
          <h4>Affliate</h4>
          <div
            className={style.earnings}
            style={{
              display: "flex",
              alignItems: "center",
              width: "90%",
              margin: ".6rem auto",
              backgroundColor: "#ffffff",
              height: "5rem",
              background: "rgba(120, 62, 253, 0.1)",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "12px",
            }}
          >
            <img
              src="/images/Frame 44.svg"
              style={{ width: "3.3rem", height: "3.3rem", marginLeft: ".4rem" }}
            />
            <div className={style.texts2}>
              <p>Your Referrals</p>
              <h6>6</h6>
            </div>
          </div>
          <div
            className={style.earnings}
            style={{
              display: "flex",
              alignItems: "center",
              width: "90%",
              margin: ".6rem auto",
              backgroundColor: "#ffffff",
              height: "5rem",
              background: "rgba(0, 222, 163, 0.1)",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "12px",
            }}
          >
            <img
              src="/images/Frame 44 (1).svg"
              style={{ width: "3.3rem", height: "3.3rem", marginLeft: ".4rem" }}
            />
            <div className={style.texts2}>
              <p>Your Earnings</p>
              <h6>3,000,000</h6>
            </div>
          </div>
          <div
            className={style.earnings}
            style={{
              display: "flex",
              alignItems: "center",
              width: "90%",
              margin: ".6rem auto",
              backgroundColor: "#ffffff",
              height: "5rem",
              background: "rgba(250, 209, 195, 0.1)",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "12px",
            }}
          >
            <img
              src="/images/Group 7260.svg"
              style={{ width: "2.3rem", height: "2.3rem", marginLeft: "1rem" }}
            />
            <div className={style.texts2} style={{ marginLeft: "1rem" }}>
              <p>Withdraw</p>
              <h6>1,000,000</h6>
            </div>
          </div>
        </div>
        <div className={style.update}>
          <img src="/images/icon.svg" />
          <h5 style={{marginBottom: ".7rem"}}>Keep you safe</h5>
          <p>
            Update your security
            <br /> password, keep your account
            <br /> safe!
          </p>
          <h5>Update Privacy</h5>
        </div>
      </div>
    </Fragment>
  );
};
export default Balance;
