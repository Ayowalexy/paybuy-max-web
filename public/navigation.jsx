import {MdDashboard} from "react-icons/md"
import {BsWallet} from "react-icons/bs"
import {CgArrowsExchangeAlt} from "react-icons/cg"
import {BsCreditCardFill} from "react-icons/bs"
import {BsCreditCard2FrontFill} from "react-icons/bs"
import {AiFillCalculator} from "react-icons/ai"
import {SiGoogleanalytics} from "react-icons/si"
import {FiSettings} from "react-icons/fi"
const navigation = [
    {
        name: "Dashboard",
        route: "/dashboard",
        icon: MdDashboard
    },
    {
        name: "My Wallet",
        route: "/mywallet",
        icon: BsWallet
    },
    {
        name: "Transactions",
        route: "/transactions",
        icon: CgArrowsExchangeAlt
    },
    {
        name: "Bill Payment",
        route: "/billpayment",
        icon: BsCreditCardFill
    },
    {
        name: "Virtual Card",
        route: "/virtualcard",
        icon: BsCreditCard2FrontFill
    },
    {
        name: "Calculator",
        route: "/calculator",
        icon: AiFillCalculator
    },
    {
        name: "Analytics",
        route: "/analytics",
        icon: SiGoogleanalytics
    },
    {
        name: "Account Settings",
        route: "/settings",
        icon: FiSettings
    },

]
export default navigation;