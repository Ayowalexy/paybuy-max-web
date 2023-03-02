import Layout from "../public/components/layout.pages";
import style from "../styles/withdraw.module.css";
import { Text } from "@chakra-ui/react";

const Withdraw = () => {
  return (
    <Layout>
      <div className={style.withdrawContainer}>
        <p> Withdraw</p>
        <div className={style.container}>
          <div className={style.big}>
            <div className={style.money}>
              <div className={style.imgcontainer}>
                <p> Available Balance</p>
                <div
                  className={style.amount}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src="/images/naira.svg" />
                  <h2>25,064.00</h2>
                </div>
                <div className={style.circle1}></div>
                <div className={style.circle2}></div>
              </div>
            </div>
            <div className={style.textBox}>
              <Text
                style={{ textAlign: "center", color: "#020246" }}
                fontSize={{ lg: "1rem" }}
                fontWeight={{ lg: "700" }}
              >
                How much would you like to withdraw?
              </Text>
              <form className={style.form}>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "justify",
                  }}
                  className={style.formSpan}
                >
                  <Text
                    style={{
                      textAlign: "justify",
                      color: "#4F5B76",
                      fontFamily: "Gotham",
                    }}
                    fontSize={{ lg: ".9rem" }}
                    fontWeight={{ lg: "700" }}
                  >
                    Amount
                  </Text>
                  <input type="name" placeholder="(min. N1000)" />
                </span>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: ".8rem",
                  }}
                  className={style.formSpan2}
                >
                  <Text
                    style={{
                      textAlign: "justify",
                      color: "#4F5B76",
                      fontFamily: "Gotham",
                    }}
                    fontSize={{ lg: ".9rem" }}
                    fontWeight={{ lg: "700" }}
                  >
                    Pin
                  </Text>
                  <input type="password" placeholder="xxxx" />
                  <button className={style.withdrawalBtn}>
                    {" "}
                    Confirm Withdrawal
                  </button>
                </span>
              </form>
            </div>
          </div>
          <div className={style.small}>
            <Text
              style={{
                color: "#020246",
                fontWeight: "600",
                fontFamily: "Gotham",
                textDecoration: "underline",
                width: "90%",
                margin: "4rem auto 0 auto",
              }}
              fontSize={{ lg: ".95rem" }}
            >
              Buy Bitcoin and more with Mastercard, Visa & Verve Cards{" "}
            </Text>
            <Text
            style={{textAlign: "left", width: "90%", margin: "1rem auto 0 auto"}}
            fontSize={{lg: ".9rem"}}
            >
              Get your Bitcoin and other digital assets using our service after
              successful deposit - no more “temporary holds” on your Bitcoin
              that traditional excahnges have in place. Exchange your non
              reloadable gift card today!
            </Text>
            <div className={style.cardImage}>
            <img src="/images/bitcoin-img.png"/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Withdraw;
