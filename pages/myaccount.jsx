import Layout from "../public/components/layout.pages"
import style from '../styles/account.module.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react'
import { TfiReload } from "react-icons/tfi"
import { BiLogOutCircle } from "react-icons/bi"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { logoutUser, updateUserProfile } from "../public/redux/auth/thunk-action"
import { useRouter } from "next/router"
import { userProfile } from "../public/redux/auth/thunk-action"
import BankDetails from "../public/components/bank-details"
import BankAccount from "../public/components/bank-acct"
import { useState, useCallback } from "react"

const accountSettings = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    // const [ change, setChange] = useState(true)
    const [show, setShow] = useState(false);
    const handleToggle = () => {
        setShow(!show)
    }
    console.log('show', show)
    const { loading, user } = useSelector(state => state.authReducers);
    const validationSchema = Yup.object().shape({
        dob: Yup.string().required("please enter yout date of birth"),
        name: Yup.string().required("please enter your name"),
        email: Yup.string().required("please enter an email address"),
        phone: Yup.string().required("please enter a phone number"),
        telephone: Yup.string(),
        exchange: Yup.string(),
        address: Yup.string().required("please enter your address"),
        city: Yup.string().required("please enter your city"),
    });
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        touched,
    } = useFormik({
        initialValues: {
            name: "",
            dob: "",
            address: "",
            city: "",
            code: "",
            email: "",
            phone: "",
            telephone: "",
            exchange: "",

        },
        validationSchema,
        onSubmit: async (values) => {
            console.log("values", values)
            await dispatch(updateUserProfile(values)).then(res => {
                if (res.meta.requestStatus === 'fulfilled') {
                    dispatch(userProfile())
                }
            })
        }

    });
    const handleLogout = async () => {
        await dispatch(logoutUser()).then(res => {
            if (res.meta.requestStatus === 'fulfilled') {
                router.push('/signin')
            }
        })
    }
    console.log(errors)
    return (
        <Layout>
            <div className={style.box}>
                <div className={style.accountContainer}>
                    <div className={style.formsdata}>
                        <Tabs>
                            <TabList >
                                <Tab _selected={{ color: 'black', borderColor: "#f24405", borderBottom: "3px solid #f24405" }} style={{ fontFamily: "Gotham", fontWeight: "500", fontSize: ".87rem" }}>My profile</Tab>
                                <Tab _selected={{ color: 'black', borderColor: "#f24405", borderBottom: "3px solid #f24405" }} style={{ fontFamily: "Gotham", fontWeight: "500", fontSize: ".87rem" }}>Bank Details</Tab>
                                <Tab _selected={{ color: 'black', borderColor: "#f24405", borderBottom: "3px solid #f24405" }} style={{ fontFamily: "Gotham", fontWeight: "500", fontSize: ".87rem" }}>Security</Tab>
                                <Tab _selected={{ color: 'black', borderColor: "#f24405", borderBottom: "3px solid #f24405" }} style={{ fontFamily: "Gotham", fontWeight: "500", fontSize: ".87rem" }}>Referrals</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel style={{ width: "100%", padding: "0" }}>
                                    <Text fontSize={{ lg: "1rem" }}
                                        style={{ fontFamily: "Gotham", fontWeight: "500", marginTop: "2.5rem" }}>
                                        Personal Information
                                    </Text>
                                    <div className={style.first}>
                                        <div>
                                            <label>
                                                <Text fontSize={{ lg: ".85rem" }}
                                                    style={{ fontFamily: "Gotham", fontWeight: "500" }}>
                                                    Full Name
                                                </Text>
                                            </label>
                                            <input type='name' name="name" placeholder="Name" onChange={handleChange} onBlur={handleBlur} />
                                            <div className={style.error}>{errors.name && touched.name && errors.name}</div>
                                        </div>
                                        <div>
                                            <label>
                                                <Text fontSize={{ lg: ".85rem" }}
                                                    style={{ fontFamily: "Gotham", fontWeight: "500" }}>
                                                    Date of Birth
                                                </Text>
                                            </label>
                                            <input type='date' name="dob" placeholder="DOB" onChange={handleChange} onBlur={handleBlur} />
                                            <div className={style.error}>{errors.dob && touched.dob && errors.dob}</div>
                                        </div>
                                        <div>
                                            <label>
                                                <Text fontSize={{ lg: ".85rem" }}
                                                    style={{ fontFamily: "Gotham", fontWeight: "500" }}>
                                                    Address
                                                </Text>
                                            </label>
                                            <input type='address' name="address" placeholder="Address" onChange={handleChange} onBlur={handleBlur} />
                                            <div className={style.error}>{errors.address && touched.address && errors.address}</div>
                                        </div>

                                        <div className={style.innerInput}>
                                            <div>
                                                <label>
                                                    <Text fontSize={{ lg: ".85rem" }}
                                                        style={{ fontFamily: "Gotham", fontWeight: "500" }}>
                                                        City
                                                    </Text>
                                                </label>
                                                <input type='city' name="city" placeholder="City" onChange={handleChange} onBlur={handleBlur} />
                                                <div className={style.error}>{errors.city && touched.city && errors.city}</div>
                                            </div>
                                            <div>
                                                <label>
                                                    <Text fontSize={{ lg: ".85rem" }}
                                                        style={{ fontFamily: "Gotham", fontWeight: "500" }}>
                                                        Postal Code
                                                    </Text>
                                                </label>
                                                <input type='code' name="code" placeholder="Postal code" onChange={handleChange} onBlur={handleBlur} />
                                            </div>
                                        </div>
                                    </div>
                                    <Text fontSize={{ lg: "1rem" }}
                                        style={{ fontFamily: "Gotham", fontWeight: "500", marginTop: "2.5rem" }}>
                                        Contact Information
                                    </Text>
                                    <div className={style.first}>
                                        <div>
                                            <label>
                                                <Text fontSize={{ lg: ".85rem" }}
                                                    style={{ fontFamily: "Gotham", fontWeight: "500" }}>
                                                    Email Address
                                                </Text>
                                            </label>
                                            <input type='email' name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} />
                                            <div className={style.error}>{errors.email && touched.email && errors.email}</div>
                                        </div>
                                        <div>
                                            <label>
                                                <Text fontSize={{ lg: ".85rem" }}
                                                    style={{ fontFamily: "Gotham", fontWeight: "500" }}>
                                                    Phone Number
                                                </Text>
                                            </label>
                                            <input type='phone' name="phone" placeholder="Phone no." onChange={handleChange} onBlur={handleBlur} />
                                            <div className={style.error}>{errors.phone && touched.phone && errors.phone}</div>
                                        </div>
                                        <div>
                                            <label>
                                                <Text fontSize={{ lg: ".85rem" }}
                                                    style={{ fontFamily: "Gotham", fontWeight: "500" }}>
                                                    Phone Number 2
                                                </Text>
                                            </label>
                                            <input type='phone' name="telephone" placeholder="Phone no.2" onChange={handleChange} onBlur={handleBlur} />
                                            <div className={style.error}>{errors.telephone && touched.telephone && errors.telephone}</div>
                                        </div>

                                        <div>
                                            <label>
                                                <Text fontSize={{ lg: ".85rem" }}
                                                    style={{ fontFamily: "Gotham", fontWeight: "500" }}>
                                                    Exchange ID
                                                </Text>
                                            </label>
                                            <input type='exchange' name="exchange" placeholder="ID" onChange={handleChange} onBlur={handleBlur} />
                                        </div>
                                    </div>
                                    <div className={style.buttons}>
                                        <button className={style.butt1}>
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
                                </TabPanel>
                                <TabPanel>
                                    {/* <Text fontSize={{ lg: "1rem" }}
                                        style={{ fontFamily: "Gotham", fontWeight: "500", marginTop: "2.5rem" }}>
                                        Contact Information
                                    </Text> */}
                                    {!show  && <BankAccount handleToggle={handleToggle}/>}
                                    {show && (<BankDetails handleToggle={handleToggle} /> )}
                                </TabPanel>
                                <TabPanel>
                                    <Text fontSize={{ lg: "1rem" }}
                                        style={{ fontFamily: "Gotham", fontWeight: "500", marginTop: "2.5rem" }}>
                                        Security
                                    </Text>
                                    <div className={style.second}>
                                        <div>
                                            <label>
                                                <Text fontSize={{ lg: ".85rem" }}
                                                    style={{ fontFamily: "Gotham", fontWeight: "500" }}>
                                                    Old Password
                                                </Text>
                                            </label>
                                            <input type='new' name="new" placeholder="New password" onChange={handleChange} onBlur={handleBlur} />
                                            <div className={style.error}>{errors.new && touched.new && errors.new}</div>
                                        </div>

                                        <div>
                                            <label>
                                                <Text fontSize={{ lg: ".85rem" }}
                                                    style={{ fontFamily: "Gotham", fontWeight: "500" }}>
                                                    New Password
                                                </Text>
                                            </label>
                                            <input type='pass' name="pass" placeholder="New Password" onChange={handleChange} onBlur={handleBlur} />
                                            <div className={style.error}>{errors.pass && touched.pass && errors.pass}</div>
                                        </div>

                                        <div>
                                            <label>
                                                <Text fontSize={{ lg: ".85rem" }}
                                                    style={{ fontFamily: "Gotham", fontWeight: "500" }}>
                                                    Confirm Password
                                                </Text>
                                            </label>
                                            <input type='confirm' name="confirm" placeholder="Confirm password" onChange={handleChange} onBlur={handleBlur} />
                                            <div className={style.error}>{errors.confirm && touched.confirm && errors.confirm}</div>
                                        </div>

                                    </div>
                                    <div className={style.buttons}>
                                        <button className={style.butt1}>
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
                                </TabPanel>
                                <TabPanel>
                                    <Text fontSize={{ lg: "1rem" }}
                                        style={{ fontFamily: "Gotham", fontWeight: "500", marginTop: "2.5rem" }}>
                                        Referrals
                                    </Text>
                                    <div className={style.third}>
                                        <div>
                                            <label>
                                                <Text fontSize={{ lg: ".85rem" }}
                                                    style={{ fontFamily: "Gotham", fontWeight: "500" }}>
                                                    Your Referral Code
                                                </Text>
                                            </label>
                                            <div className={style.copy}>
                                                <input type='referral' name="referral" placeholder="QPUYTUH" onChange={handleChange} onBlur={handleBlur} />
                                                <button className={style.but3}>Copy</button>
                                            </div>
                                        </div>
                                        <div>
                                            <label>
                                                <Text fontSize={{ lg: ".85rem" }}
                                                    style={{ fontFamily: "Gotham", fontWeight: "500" }}>
                                                    Total Referral
                                                </Text>
                                            </label>
                                            <input type='total' name="total" placeholder="Total referrals" onChange={handleChange} onBlur={handleBlur} />
                                        </div>

                                        <div>
                                            <label>
                                                <Text fontSize={{ lg: ".85rem" }}
                                                    style={{ fontFamily: "Gotham", fontWeight: "500" }}>
                                                    Amount Earned
                                                </Text>
                                            </label>
                                            <input type='amount' name="amount" placeholder="N10000" onChange={handleChange} onBlur={handleBlur} />
                                        </div>

                                    </div>
                                    <div className={style.buttons}>
                                        <button className={style.butt1}>
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
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </div>
                    <div className={style.imgdetails}>
                        <div className={style.bgimg}>
                        </div>
                        <Text style={{ fontFamily: 'Gotham', fontWeight: '500', marginTop: '.7rem' }}
                            fontSize={{ lg: ".9rem" }}
                        >
                            {user.name}
                        </Text>
                        <div className={style.line}></div>
                        <span className={style.butt2} style={{ color: "white", fontFamily: "Gotham", fontWeight: "500", fontSize: ".85rem", marginTop: "2rem" }}>
                            <div className={style.span} onClick={() => handleLogout()}>
                                <BiLogOutCircle style={{ marginRight: ".5rem", fontSize: '1.2rem', fontWeight: "500" }} />
                                <p>Logout</p>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default accountSettings