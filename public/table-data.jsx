import { BiDotsVertical } from "react-icons/bi";
import {BsArrowRight} from "react-icons/bs";
import {BsArrowLeft} from "react-icons/bs";
import {AiOutlineCheck} from "react-icons/ai";
import {RxCounterClockwiseClock} from "react-icons/rx";
import {AiOutlineClose} from "react-icons/ai"

const TableData = [
    {
        menu: <BiDotsVertical />,
        date: "16:23, 12 dec 2018",
        transactionType: "/images/Group 5.svg",
        transactionArrow: <BsArrowRight />,
        transactionId: "1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t",
        Quantity: "0.0094",
        coin: " LTC",
        status: "Completed",
        statusMark: <AiOutlineCheck />,
        color: "#00FF75"
    },
    {
        menu:  <BiDotsVertical />,
        date: "09:49, 11 dec 2018",
        transactionType: "/images/Group 4.svg",
        transactionArrow: <BsArrowLeft />,
        transactionId: "1PRj85hu9RXPZTzxtko9stfs6nRo1vyrQB",
        Quantity: "0.4509",
        coin: " BTC",
        status: "Completed",
        statusMark: <AiOutlineCheck />,
        color: "#00FF75"
    },
    {
        menu:  <BiDotsVertical />,
        date: "04:08, 11 dec 2018",
        transactionType: "/images/Shape (3).svg",
        transactionArrow: <BsArrowRight />,
        transactionId: "1AGm6Jc43FUaYRKm8wj2cBpJ7FWgjxwCXW",
        Quantity: "5.456",
        coin: "DASH",
        status: "Pending",
        statusMark: <RxCounterClockwiseClock/>,
        color: "#5157DA"
    },
    {
        menu:  <BiDotsVertical />,
        date: "22:56, 10 dec 2018",
        transactionType: "/images/Shape (4).svg",
        transactionArrow: <BsArrowRight />,
        transactionId: "1P9RQEr2XeE3PEb44ZE35sfZRRW1JHU8qx",
        Quantity: "0.6774",
        coin: " ETH",
        status: "completed",
        statusMark: <AiOutlineCheck />,
        color: "#00FF75"
    },
    {
        menu:  <BiDotsVertical />,
        date: "07:27, 09 dec 2018",
        transactionType: "/images/Shape (4).svg",
        transactionArrow: <BsArrowLeft />,
        transactionId: "45RQEr2XeE3PEb44ZE35sfZRRewwtr224s1",
        Quantity: "0.3",
        coin: "XRP",
        status: "Incomplete",
        statusMark: <AiOutlineClose />,
        color: "red"

    },
]
export default TableData;