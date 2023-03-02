import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import style from "../../styles/card-tab.module.css";
import { Text } from "@chakra-ui/react";
import QuickTransfer from "../components/quick";
const CardTab = () => {
  return (
    <Tabs variant="unstyled">
      <TabList style={{ marginTop: "1rem", position: "relative" }}>
        <Tab
          _selected={{
            color: "white",
            bg: "#f24005",
            fontWeight: "700",
            letterSpacing: "1px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "4px",
          }}
          padding={{ lg: ".3rem 6rem" }}
          fontSize={{ lg: "1.1rem" }}
          style={{ fontWeight: "700" }}
        >
          Card
        </Tab>
        <Tab
          _selected={{
            color: "white",
            bg: "#f24005",
            fontWeight: "700",
            letterSpacing: "1px",
            marginLeft: "2rem",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "4px",
          }}
          padding={{ lg: ".3rem 4rem" }}
          fontSize={{ lg: "1.1rem" }}
          style={{ fontWeight: "700" }}
        >
          Quick Transfer
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <div className={style.atmCards}>
            <img src="/images/logos_mastercard.png" />
            <img src="/images/logos_visa.png" />
            <img src="/images/Verve_Image 1.png" />
          </div>
          <form style={{ marginTop: "2rem", marginLeft: "-1rem" }}>
            <span className={style.fullspan}>
              <Text
                fontSize={{ lg: ".9rem" }}
                style={{
                  color: "#4F5B76",
                  fontFamily: "Gotham",
                  fontStyle: "italic",
                  fontWeight: "500",
                  paddingBottom: ".2rem",
                  letterSpacing: "-.5px",
                }}
              >
                Card number
              </Text>
              <input type="name" placeholder="1234 1234 1234 1234" />
              <div
                style={{
                  display: "flex",
                  width: "12%",
                  justifyContent: "space-between",
                  marginLeft: "88%",
                }}
                className={style.imageDiv}
              >
                <img src="/images/logos_mastercard.png" />
                <img src="/images/logos_visa.png" />
                <img src="/images/Verve_Image 1.png" />
              </div>
            </span>
            <div
              style={{
                display: "grid",
                width: "95%",
                gridTemplateColumns: "1fr 1fr",
                gridColumnGap: "1rem",
                margin: ".5rem 0 0 0",
              }}
            >
              <span className={style.halfspan}>
                <Text
                  fontSize={{ lg: ".9rem" }}
                  style={{
                    color: "#4F5B76",
                    fontFamily: "Gotham",
                    fontStyle: "italic",
                    fontWeight: "500",
                    paddingBottom: ".2rem",
                    letterSpacing: "-.5px",
                  }}
                >
                  Expiry
                </Text>
                <input type="name" placeholder="MM/YY" />
              </span>
              <span className={style.halfspan}>
                <Text
                  fontSize={{ lg: ".9rem" }}
                  style={{
                    color: "#4F5B76",
                    fontFamily: "Gotham",
                    fontStyle: "italic",
                    fontWeight: "500",
                    paddingBottom: ".2rem",
                    letterSpacing: "-.5px",
                  }}
                >
                  CVV
                </Text>
                <input type="name" placeholder="CVV" />
              </span>
            </div>
            <div
              style={{
                display: "grid",
                width: "95%",
                gridTemplateColumns: "1fr 1fr",
                gridColumnGap: "1rem",
                margin: ".5rem 0 0 0",
              }}
            >
              <span className={style.halfspan}>
                <Text
                  fontSize={{ lg: ".9rem" }}
                  style={{
                    color: "#4F5B76",
                    fontFamily: "Gotham",
                    fontStyle: "italic",
                    fontWeight: "500",
                    paddingBottom: ".2rem",
                    letterSpacing: "-.5px",
                  }}
                >
                  Amount
                </Text>
                <input type="name" placeholder="(min. N 1,000)" />
              </span>
              <span className={style.halfspan}>
                <Text
                  fontSize={{ lg: ".9rem" }}
                  style={{
                    color: "#4F5B76",
                    fontFamily: "Gotham",
                    fontStyle: "italic",
                    fontWeight: "500",
                    paddingBottom: ".2rem",
                    letterSpacing: "-.5px",
                  }}
                >
                  Pin
                </Text>
                <input type="name" placeholder="xxxx" />
              </span>
            </div>
            <button className={style.topButton}>
              <Text
                fontSize={{ lg: "1.3rem" }}
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  fontFamily: "Gotham",
                }}
              >
                Top up
              </Text>
            </button>
            </form>
           
        </TabPanel>
        <TabPanel>
          <QuickTransfer />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default CardTab;
