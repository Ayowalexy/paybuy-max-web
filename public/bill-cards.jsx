import { AiFillBulb } from "react-icons/ai";
import { HiWifi } from "react-icons/hi";
import { GiNetworkBars } from "react-icons/gi";
import { GiTap } from "react-icons/gi";
import { FaShoppingCart} from "react-icons/fa";
import { FaSatelliteDish} from "react-icons/fa";

const BillCard = [
  {
    icon: <AiFillBulb />,
    text: "Buy Electricity",
  },
  {
    icon: <HiWifi />,
    text: "Buy Data",
  },
  {
    icon: <GiNetworkBars />,
    text: "Airtime Package",
  },
  {
    icon: <FaSatelliteDish />,
    text: "Cable TV",
  },
  {
    icon: <GiTap />,
    text: "PayWater",
  },
  {
    icon: <FaShoppingCart/>,
    text: "Standing order",
  },
];
export default BillCard;
