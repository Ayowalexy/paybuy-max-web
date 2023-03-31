import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BankDetails from "./bank-details";
import { useSelector, useDispatch } from "react-redux";
import { showBanks } from "../redux/banks/thunk-action";
import style from "../../styles/bank-acct.module.css"
import {RiDeleteBinFill} from "react-icons/ri"
import { deleteBanks } from "../redux/banks/thunk-action";

const BankAccount = ({handleToggle}) => {
    // const [less, setLess] = useState(4)
    const dispatch = useDispatch();
    const {showAccounts} = useSelector(state => state.bankReducers)
    
const handleDelete = async (id) => {
    const obj ={
        bankaccount_id: id.toString()
    }
   await dispatch(deleteBanks(obj)).then(res => {
    if(res.meta.requestStatus=== "fulfilled"){
        dispatch(showBanks())
    }
   })
}

    useEffect(() => {
        dispatch(showBanks())
    },[])
    return (
        <div className={style.accounts}>
            <Text fontSize={{ lg: "1.1rem" }}
                style={{ fontFamily: "Gotham", fontWeight: "500", marginTop: "2rem", marginBottom:".5rem"}}>
                Linked Accounts
            </Text>
            <div className={style.allAccts}>
                {showAccounts.map((elem) => (
                    <div style={{display: "flex", alignItems: "center", width: "100%",borderBottom: "1px solid #e3e1e1",justifyContent: "space-between"}}>
                    <div className={style.singleAcct}>
                        <Text>{elem.bank_name}</Text>
                        <Text>*******{elem.account_number.slice(6,)}</Text>
                    </div>
                    <RiDeleteBinFill className={style.bin} onClick={() => handleDelete(elem.id)}/>
                    </div>
                ))}
            </div>
            <button style={{ background: "#f24405",width: "8rem", height: "3rem",marginTop: "1.4rem", borderRadius: ".4rem", color: "#fff" }} onClick={() => handleToggle()}>Add New</button>
            
        </div>
    )
}
export default BankAccount;