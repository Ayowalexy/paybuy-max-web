import style from "../../styles/header.module.css";
import { useTheme } from "@chakra-ui/react";
import { TfiBell } from "react-icons/tfi";
import { TiArrowSortedDown } from "react-icons/ti";
import { useSelector } from "react-redux";
const Header = () => {
  const {details} = useSelector(state => state.authReducers)
  const theme = useTheme();
  const { orange } = theme.colors.brand;
  return (
    <div className={style.headerContainer}>
      <div className={style.head}>
        <div className={style.subHead}>
          <h3 className={style.text}>Dashboard</h3>
          <div className={style.bell}>
            <div className={style.bellIcon}>
              <TfiBell style={{ fontWeight: "200", fontSize: "1rem" }} />
            </div>
            <span className={style.ellipse}></span>
          </div>
        </div>
        <div className={style.userName}>
          <img src="/images/user.svg" />
          <h6>{details?.firstname}{details?.lastname}</h6>
          <TiArrowSortedDown style={{ color: orange }} />
        </div>
      </div>
    </div>
  );
};
export default Header;
