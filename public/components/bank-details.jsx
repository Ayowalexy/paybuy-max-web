import { useFormik } from "formik";
import * as Yup from "yup";
import style from "../../styles/account.module.css"
import { useDispatch, useSelector } from "react-redux";
import { TfiReload } from "react-icons/tfi"
import { Text } from "@chakra-ui/react";
import BankAccount from "./bank-acct";
import { Select } from '@chakra-ui/react'
import { useEffect } from "react";
import { getBanks, createBank } from "../redux/banks/thunk-action";

const BankDetails = ({ handleToggle }) => {
    const dispatch = useDispatch()
    // const { loading } = useSelector(state => state.authReducers)
    const { getBankNames, loading} = useSelector(state => state.bankReducers)
    const validationSchema = Yup.object().shape({
        num: Yup.string().required("please enter a valid account number"),
        bank: Yup.string().required("please select a bank"),
    });
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        touched,
        setFieldValue
    } = useFormik({
        initialValues: {
            num: "",
            bank: "",

        },
        validationSchema,
        onSubmit: async (values) => {
            const obj = {
                currency_id: "1",
                account_number: values.num,
                bank_id: values.bank
            }
            console.log("values", obj)
            await dispatch(createBank(obj)).then(res => {
                if (res.meta.requestStatus === 'fulfilled') {
                    
                }
            })
        }
    });

    useEffect(() => {
    dispatch(getBanks())
    }, [])
    return (
        <>
            <div className={style.first}>
                <div>
                    <label>
                        <Text fontSize={{ lg: ".85rem" }}
                            style={{ fontFamily: "Gotham", fontWeight: "500" }}>
                            Account Number
                        </Text>
                    </label>
                    <input type='num' name="num" placeholder="Account no." onChange={handleChange} onBlur={handleBlur} />
                    <div className={style.error}>{errors.num && touched.num && errors.num}</div>
                </div>

                <div>
                    <label>
                        <Text fontSize={{ lg: ".85rem" }}
                            style={{ fontFamily: "Gotham", fontWeight: "500" }}>
                            Bank Name
                        </Text>
                    </label>
                    <Select onChange={(e) => setFieldValue("bank", e.target.value)} placeholder='Select option' style={{background: "#fff", border: "none", outline: "none"}}>
                        {getBankNames?.map((elem) => (
                        <option value={elem.id}><Text>{elem.name}</Text></option>

                        ))}
                    </Select>
                    <div className={style.error}>{errors.bank && touched.bank && errors.bank}</div>
                </div>
            </div> 
            <div className={style.buttons}>
                <button className={style.butt1} onClick={() => handleToggle()}>
                    <Text fontSize={{ lg: ".9rem" }}
                        style={{ fontFamily: "Gotham", color: "#676767", fontWeight: "500", marginRight: "1rem" }}>
                        Cancel
                    </Text></button>
                <span className={style.butt2} style={{ color: "white", fontFamily: "Gotham", fontWeight: "500", fontSize: ".85rem", marginTop: "2rem" }}>
                    <div className={style.span} onClick={handleSubmit}>
                        <TfiReload style={{ marginRight: ".5rem", fontSize: '1rem', fontWeight: "600" }} />
                        <p>Update</p>
                    </div>
                </span>
            </div>
        </>
    )
}
export default BankDetails;