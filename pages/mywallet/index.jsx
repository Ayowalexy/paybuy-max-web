import { useRouter } from "next/router";
import Layout from "../../public/components/layout.pages"
import style from "../../styles/mywallet.module.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { Img } from "@chakra-ui/react";
import {HiPlus} from "react-icons/hi"
import Crypto from "../../public/crypto";
import DataBox from "../../public/components/data-box";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userWallet, newWallet } from "../../public/redux/wallet/thunk-action";
import ModeBox from "../../public/components/modal";

const MyWallet = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {loading, wallet} = useSelector(state => state.walletReducers)
 const [open, setOpen] = useState(false);


  useEffect(() => {
    dispatch(userWallet())
  }, [])
  return (
    <Layout>
       <ModeBox  open= {open} setOpen={setOpen} />
      <div className={style.walletContainer}>
        <div className={style.wallets}>
          <div className={style.wallet1}>
            <img src="/images/Shape.svg" />
            <div className={style.ellipse1}></div>
            <div className={style.ellipse2}></div>
            <div className={style.picText}>
              <p>Account in Naira</p>
              <p>Available funds</p>
              <span style={{ display: "flex", alignItems: "center", cursor: "pointer"}}
              onClick={() => router.push("/deposit")}
              >
                <AiFillPlusCircle
                  className={style.icons}
                  style={{ zIndex: "2", position: "relative" }}
                />
                <p style={{marginLeft: "-.1rem"}}>Add Funds</p>
              </span>
            </div>
            <div className={style.amount}>
              <Img src="/images/naira.svg" />
              <h2>25,064.00</h2>
            </div>
            <div className={style.btns}>
              <button
              onClick={() => router.push("/transfer")}
                className={style.btn1}
                style={{ background: "#ffffff", color: "#000" }}
              >
                Transfer Funds
              </button>
              <button
                className={style.btn1}
                style={{ background: "#000", color: "#ffffff" }}
                onClick={() => router.push("/withdraw")}
              >
                Withdraw
              </button>
              <button
                className={style.btn1}
                style={{ background: "#ffffff", color: "#000" }}
              >
                Link Bank Account
              </button>
            </div>
          </div>

          <div className={style.wallet2}>
            <h5>Sell your gift card</h5>
            <div className={style.imgText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis at
                adipiscing cras pretium, nunc, malesuada. Pulvinar aliquam enim
                venenatis, nunc, etiam lacus in vitae.
              </p>
              <img src="/images/image 3.svg" />
            </div>
            <button className={style.sellBtn}> Sell</button>
          </div>
        </div>
        <div className={style.cardsContainer}>
          {wallet?.map((elem) => (
            <DataBox elem={elem} />
          ))}
          <div style={{border: "2px dashed rgba(42, 43, 49, 0.3)", borderRadius: "2px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}} onClick={() => setOpen(true)}>
          <span className={style.iconPlus}><HiPlus /></span>
          <p className={style.para}>Add wallet</p>
          </div>
        </div>
       
      </div>
    </Layout>
  );
};
export default MyWallet;