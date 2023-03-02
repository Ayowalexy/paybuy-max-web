import Layout from "../public/components/layout.pages";
import style from "../styles/deposit.module.css";
import { Text } from "@chakra-ui/react";
import CardTab from "../public/components/card-tab";
const Deposit = () => {
  return (
    <Layout>
      <div className={style.depositContainer}>
        <div className={style.container}>
          <div className={style.big}>
            <div className={style.bigContainer}>
              <Text
                style={{
                  textAlign: "justify",
                  color: "#020246",
                  paddingTop: "2rem",
                }}
                fontSize={{ lg: "1rem" }}
                fontWeight={{ lg: "700" }}
              >
                How would you like to deposit?
              </Text>
              <CardTab />
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
              fontSize={{ lg: "1.1rem" }}
            >
              Buy Bitcoin and more with Mastercard, Visa & Verve Cards{" "}
            </Text>
            <Text
              style={{
                textAlign: "left",
                width: "90%",
                margin: "1rem auto 0 auto",
              }}
              fontSize={{ lg: ".9rem" }}
            >
              Get your Bitcoin and other digital assets using our service after
              successful deposit - no more “temporary holds” on your Bitcoin
              that traditional excahnges have in place. Exchange your non
              reloadable gift card today!
            </Text>
            <div className={style.cardImage}>
              <img src="/images/bitcoin-img.png" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Deposit;
