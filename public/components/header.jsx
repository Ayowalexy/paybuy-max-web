import style from "../../styles/header.module.css";
import { useTheme } from "@chakra-ui/react";
import { TfiBell } from "react-icons/tfi";
import { TiArrowSortedDown } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCoin } from "../redux/coins";
const Header = () => {
  const dispatch = useDispatch();
  // const {details} = useSelector(state => state.authReducers)
  const {user} = useSelector(state => state.authReducers)
  console.log(user)
  const theme = useTheme();
  const { orange } = theme.colors.brand;

  // const handleAdd = () => {
  //   const data =  {
  //       icon: "/images/coin1.svg",
  //       coin: "BTC",
  //       currency: "USD",
  //       amount: "9784.79",
  //       dip: "7.2%"
  //     }
  //   // dispatch(addCoin(data))
  // }

  return (
    <div className={style.headerContainer}>
      <div className={style.head}>
        <div className={style.subHead}>
          <h3 className={style.text}>Dashboard</h3>
          <div className={style.bell}>
            {/* <div className={style.bellIcon} onClick={handleAdd}> */}
            <div className={style.bellIcon}>
              <TfiBell style={{ fontWeight: "200", fontSize: "1rem" }} />
            </div>
            <span className={style.ellipse}></span>
          </div>
        </div>
        <div className={style.userName}>
          <img src="/images/user.svg" />
          {/* <h6>{details?.firstname}{details?.lastname}</h6> */}
          <h6>{user.name}</h6>
          <TiArrowSortedDown style={{ color: orange }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
