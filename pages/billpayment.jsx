import Layout from "../public/components/layout.pages";
import style from "../styles/billpayment.module.css";
import BillCard from "../public/bill-cards";
import { Text } from "@chakra-ui/react";
const BillPayment = () => {
  return (
    <Layout>
      <div className={style.billpayment}>
        <div className={style.search}>
          <form>
            <input type="name" placeholder="Search Biller" />
          </form>
        </div>
        <div className={style.division}>
          <div className={style.first}>
            <div className={style.billimg}>
              <img src="/images/bulb.svg" />
            </div>
            <div className={style.billtext}>
              <Text>BUY YOUR ELECTRICITY</Text>
            </div>
          </div>
          <div className={style.cards}>
            <div className={style.card}>
              {BillCard.map(({ icon, text }) => (
                <div className={style.item}>
                  <span className={style.icon}>{icon}</span>
                  <Text fontSize={{ lg: "1rem" }} style={{ fontWeight: "600" }}>
                    {text}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BillPayment;
