import Layout from "../public/components/layout.pages";
import { Text } from "@chakra-ui/react";
import style from "../styles/transactions.page.module.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { BiDotsVertical } from "react-icons/bi";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
//  import CustomizedTables from "../public/components/mui-table";
import TableData from "../public/table-data";
import { padding } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { userTransaction } from "../public/redux/transaction/thunk-action";
import { useEffect } from "react";


const Transactions = () => {
  const dispatch = useDispatch();
  const {loading, transactions} = useSelector(state => state.transactionReducers)
  const theme = useTheme();
  const { secondary } = theme.colors;

  useEffect(() => {
    dispatch(userTransaction())
  }, [])
  console.log(transactions)
  return (
    <Layout>
      <div className={style.transactionpage}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            textAlign: "right",
          }}
        >
          <Text
            fontSize={{ lg: ".8rem" }}
            style={{
              color: " #2A2B31",
              fontWeight: "500",
              fontFamily: "Gotham",
            }}
          >
            FROM{" "}
            <span
              style={{
                background: "#f24005",
                padding: ".3rem 1rem",
                color: "#fff",
                fontWeight: "300",
                fontSize: ".75rem",
                fontFamily: "Gotham",
              }}
            >
              Dec 08, 2019
            </span>
          </Text>
          <Text
            fontSize={{ lg: ".8rem" }}
            style={{
              color: " #2A2B31",
              fontWeight: "500",
              marginLeft: "1rem",
              fontFamily: "Gotham",
            }}
          >
            TO{" "}
            <span
              style={{
                background: "#f24005",
                padding: ".3rem 1rem",
                color: "#fff",
                fontWeight: "300",
                fontSize: ".75rem",
                fontFamily: "Gotham",
              }}
            >
              Dec 08, 2021
            </span>
          </Text>
        </div>
        <div className={style.firstline}>
          <div className={style.first}>
            <h4>{transactions.length}</h4>
            <p>Transactions</p>
            <button>Export History</button>
          </div>
          <div className={style.second}>
            <Tabs variant="unstyled">
              <TabList className={style.tabhead}>
                <Tab
                  _selected={{
                    color: "#A7A4A8",
                    bg: "white.500",
                    fontSize: ".8rem",
                    fontWeight: "600",
                    fontFamily: "Gotham",
                  }}
                  style={{
                    fontSize: ".8rem",
                    fontWeight: "600",
                    fontFamily: "Gotham",
                  }}
                >
                  ALL
                </Tab>
                <Tab
                  _selected={{
                    color: "#A7A4A8",
                    bg: "white.500",
                    fontSize: ".8rem",
                    fontWeight: "600",
                    fontFamily: "Gotham",
                  }}
                  style={{
                    fontSize: ".8rem",
                    fontWeight: "600",
                    fontFamily: "Gotham",
                  }}
                >
                  SEND
                </Tab>
                <Tab
                  _selected={{
                    color: "#A7A4A8",
                    bg: "white.500",
                    fontSize: ".8rem",
                    fontWeight: "600",
                    fontFamily: "Gotham",
                  }}
                  style={{
                    fontSize: ".8rem",
                    fontWeight: "600",
                    fontFamily: "Gotham",
                  }}
                >
                  RECENT
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <TableContainer className="table1">
                    <Table
                      variant="striped"
                      colorScheme="secondary"
                      style={{
                        borderCollapse: "separate",
                        borderSpacing: "0px 14px",
                      }}
                    >
                      <Thead style={{ background: "white" }}>
                        <Tr style={{ fontFamily: "Gotham" }}>
                          <Th style={{ fontFamily: "Gotham" }}>
                            <Text fontSize={{ lg: ".65rem" }}>Date / Time</Text>
                          </Th>
                          <Th style={{ fontFamily: "Gotham" }}>
                            <Text fontSize={{ lg: ".65rem" }}>
                              Transaction Type
                            </Text>
                          </Th>
                          <Th style={{ fontFamily: "Gotham" }}>
                            <Text fontSize={{ lg: ".65rem" }}>
                              Coin Quantity{" "}
                            </Text>
                          </Th>
                          <Th style={{ fontFamily: "Gotham" }}>
                            <Text fontSize={{ lg: ".65rem" }}> Status</Text>
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody style={{}}>
                        {transactions?.map(
                          ({
                            menu,
                            transactionArrow,
                            address,
                            bankaccount,
                            type,
                            status,
                            statusMark,
                            created_at,
                            currency,
                            amount,
                            color,
                          }) => (
                            <Tr
                              style={{
                                background: "white",
                                width: "90%",
                                height: "3.3rem",
                                textAlign: "center",
                              }}
                            >
                              <td>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    paddingLeft: "10%",
                                    fontFamily: "Gotham",
                                    margin: "auto",
                                  }}
                                >
                                  <span className={style.menudots}>{menu}</span>
                                  <span style={{ marginLeft: ".5rem" }}>
                                    {" "}
                                    <Text fontSize={{ lg: ".8rem" }}>
                                      {new Date(created_at).toLocaleDateString()}
                                    </Text>
                                  </span>
                                </div>
                              </td>
                              <td
                                style={{
                                  paddingLeft: "2rem",
                                  fontFamily: "Gotham",
                                }}
                              >
                               <Text fontSize={{ lg: ".8rem" }}>
                                      {type}
                                    </Text>
                              </td>
                              <td>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    paddingLeft: "14%",
                                    fontFamily: "Gotham",
                                    margin: "auto",
                                  }}
                                >
                                  <span>
                                    <Text fontSize={{ lg: "1.02rem" }} fontWeight={{lg: "500"}}>
                                      {amount}
                                    </Text>
                                  </span>
                                  <span style={{marginLeft: ".2rem"}}>
                                    <Text fontSize={{ lg: "1rem" }}>
                                      {currency}
                                    </Text>
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    fontFamily: "Gotham",
                                    background: "#FAF3F1",
                                    width: "90%",
                                    height: "2rem",
                                    padding: "0 10%"
                                  }}
                                >
                                  <span>
                                    <Text fontSize={{ lg: ".7rem" }}>
                                      {status}
                                    </Text>
                                  </span>
                                  <span className={style.statusmark} style={{ color, marginLeft: ".3rem" }}>{statusMark}</span>
                                </div>
                              </td>
                            </Tr>
                          )
                        )}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                <TabPanel>
                <TableContainer className="table1">
                    <Table
                      variant="striped"
                      colorScheme="secondary"
                      style={{
                        borderCollapse: "separate",
                        borderSpacing: "0px 14px",
                      }}
                    >
                      <Thead style={{ background: "white" }}>
                        <Tr style={{ fontFamily: "Gotham" }}>
                          <Th style={{ fontFamily: "Gotham" }}>
                            <Text fontSize={{ lg: ".65rem" }}>Date / Time</Text>
                          </Th>
                          <Th style={{ fontFamily: "Gotham" }}>
                            <Text fontSize={{ lg: ".65rem" }}>
                              Transaction Type
                            </Text>
                          </Th>
                          <Th style={{ fontFamily: "Gotham" }}>
                            <Text fontSize={{ lg: ".65rem" }}>
                              Coin Quantity{" "}
                            </Text>
                          </Th>
                          <Th style={{ fontFamily: "Gotham" }}>
                            <Text fontSize={{ lg: ".65rem" }}> Status</Text>
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody style={{}}>
                        {transactions
                        ?.filter((elem)=> elem.type === "Transfer"
                        )
                        ?.map(
                          ({
                            menu,
                            transactionArrow,
                            address,
                            bankaccount,
                            type,
                            status,
                            statusMark,
                            created_at,
                            currency,
                            amount,
                            color,
                          }) => (
                            <Tr
                              style={{
                                background: "white",
                                width: "90%",
                                height: "3.3rem",
                                textAlign: "center",
                              }}
                            >
                              <td>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    paddingLeft: "10%",
                                    fontFamily: "Gotham",
                                    margin: "auto",
                                  }}
                                >
                                  <span className={style.menudots}>{menu}</span>
                                  <span style={{ marginLeft: ".5rem" }}>
                                    {" "}
                                    <Text fontSize={{ lg: ".8rem" }}>
                                      {new Date(created_at).toLocaleDateString()}
                                    </Text>
                                  </span>
                                </div>
                              </td>
                              <td
                                style={{
                                  paddingLeft: "2rem",
                                  fontFamily: "Gotham",
                                }}
                              >
                               <Text fontSize={{ lg: ".8rem" }}>
                                      {type}
                                    </Text>
                              </td>
                              <td>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    paddingLeft: "14%",
                                    fontFamily: "Gotham",
                                    margin: "auto",
                                  }}
                                >
                                  <span>
                                    <Text fontSize={{ lg: "1.02rem" }} fontWeight={{lg: "500"}}>
                                      {amount}
                                    </Text>
                                  </span>
                                  <span style={{marginLeft: ".2rem"}}>
                                    <Text fontSize={{ lg: "1rem" }}>
                                      {currency}
                                    </Text>
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    fontFamily: "Gotham",
                                    background: "#FAF3F1",
                                    width: "90%",
                                    height: "2rem",
                                    padding: "0 10%"
                                  }}
                                >
                                  <span>
                                    <Text fontSize={{ lg: ".7rem" }}>
                                      {status}
                                    </Text>
                                  </span>
                                  <span className={style.statusmark} style={{ color, marginLeft: ".3rem" }}>{statusMark}</span>
                                </div>
                              </td>
                            </Tr>
                          )
                        )}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                <TabPanel>
                <TableContainer className="table1">
                    <Table
                      variant="striped"
                      colorScheme="secondary"
                      style={{
                        borderCollapse: "separate",
                        borderSpacing: "0px 14px",
                      }}
                    >
                      <Thead style={{ background: "white" }}>
                        <Tr style={{ fontFamily: "Gotham" }}>
                          <Th style={{ fontFamily: "Gotham" }}>
                            <Text fontSize={{ lg: ".65rem" }}>Date / Time</Text>
                          </Th>
                          <Th style={{ fontFamily: "Gotham" }}>
                            <Text fontSize={{ lg: ".65rem" }}>
                              Transaction Type
                            </Text>
                          </Th>
                          <Th style={{ fontFamily: "Gotham" }}>
                            <Text fontSize={{ lg: ".65rem" }}>
                              Coin Quantity{" "}
                            </Text>
                          </Th>
                          <Th style={{ fontFamily: "Gotham" }}>
                            <Text fontSize={{ lg: ".65rem" }}> Status</Text>
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody style={{}}>
                        {transactions
                        ?.filter((elem)=> elem.type === "Deposit"
                        )
                        ?.map(
                          ({
                            menu,
                            transactionArrow,
                            address,
                            bankaccount,
                            type,
                            status,
                            statusMark,
                            created_at,
                            currency,
                            amount,
                            color,
                          }) => (
                            <Tr
                              style={{
                                background: "white",
                                width: "90%",
                                height: "3.3rem",
                                textAlign: "center",
                              }}
                            >
                              <td>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    paddingLeft: "10%",
                                    fontFamily: "Gotham",
                                    margin: "auto",
                                  }}
                                >
                                  <span className={style.menudots}>{menu}</span>
                                  <span style={{ marginLeft: ".5rem" }}>
                                    {" "}
                                    <Text fontSize={{ lg: ".8rem" }}>
                                      {new Date(created_at).toLocaleDateString()}
                                    </Text>
                                  </span>
                                </div>
                              </td>
                              <td
                                style={{
                                  paddingLeft: "2rem",
                                  fontFamily: "Gotham",
                                }}
                              >
                               <Text fontSize={{ lg: ".8rem" }}>
                                      {type}
                                    </Text>
                              </td>
                              <td>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    paddingLeft: "14%",
                                    fontFamily: "Gotham",
                                    margin: "auto",
                                  }}
                                >
                                  <span>
                                    <Text fontSize={{ lg: "1.02rem" }} fontWeight={{lg: "500"}}>
                                      {amount}
                                    </Text>
                                  </span>
                                  <span style={{marginLeft: ".2rem"}}>
                                    <Text fontSize={{ lg: "1rem" }}>
                                      {currency}
                                    </Text>
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    fontFamily: "Gotham",
                                    background: "#FAF3F1",
                                    width: "90%",
                                    height: "2rem",
                                    padding: "0 10%"
                                  }}
                                >
                                  <span>
                                    <Text fontSize={{ lg: ".7rem" }}>
                                      {status}
                                    </Text>
                                  </span>
                                  <span className={style.statusmark} style={{ color, marginLeft: ".3rem" }}>{statusMark}</span>
                                </div>
                              </td>
                            </Tr>
                          )
                        )}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Transactions;
