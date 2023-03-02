import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import style from "../../styles/coins.module.css";
import { MdContentCopy } from "react-icons/md";

const CoinTab = () => {
  return (
    <Tabs variant="unstyled">
      <TabList>
        <Tab _selected={{ color: "white", bg: "green.500" }}>Tab 1</Tab>
        <Tab>
          Tab 7
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>ten!</p>
        </TabPanel>
        <TabPanel>
          <p className={style.para}>Your bitcoin address:</p>
          <div
            style={{
              background: "#FAF3F1",
              borderRadius: "2px",
              width: "100%",
              height: "35px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
              padding: ".5rem",
            }}
          >
            <p>{singleCoin.code}</p>
            <MdContentCopy className={style.copy} />
          </div>
          <p className={style.para3}>
            Hey Boss!, kindly confirm the wallet address you copied.{" "}
          </p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default CoinTab;
