import style from "../styles/signup.module.css";
import styles from "../styles/otp.module.css";
import { Text } from "@chakra-ui/react";
import Otp from "../public/components/otp";
import { verifyOtp, resendOtp } from "../public/redux/auth/thunk-action";
import { useDispatch, useSelector } from "react-redux";
import { useVerify } from "../public/context/verify.context";
import { useRouter } from "next/router";
import { Spinner } from "../public/components/spinner";
import { useState } from "react";

const otpPage = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const { email } = useVerify()
    const [otp, setOtp] = useState('');

    console.log(email)
    const { loading } = useSelector(state => state.authReducers)
    const handleVerify = async () => {
        const data = { email, code: otp }
        await dispatch(verifyOtp(data)).then(res => {
            if (res.meta.requestStatus === 'fulfilled') {
                router.push('/signin')
            }
        })
    }

    const handleResend = () => {
        const obj = {
            email
        }
        dispatch(resendOtp(obj))
    }
    return (
        <div style={{ position: "relative" }} className={style.signupContainer}>
            <div className={style.image}>
            </div>
            <div className={style.sign}>
            </div>
            <div className={styles.otpmodal}>
                <div className={styles.contain}>
                    <div className={styles.logo}>
                        <img src="/images/logo.png" />
                    </div>
                    <div className={styles.texts}>
                        <Text
                            fontSize={{ lg: "1.4rem" }}
                            fontWeight={{ lg: "600" }}
                            style={{ fontFamily: "Gotham" }}
                        >Please Verify Account</Text>
                        <Text fontSize={{ lg: ".8rem" }}
                            style={{ fontFamily: "Gotham", textAlign: "center", marginTop: "1.4rem" }}>Enter the six digit code we sent to your email address to verify<br />
                            your new Paybuymax account </Text>
                    </div>
                    <Otp otp={otp} setOtp={setOtp} />
                    <button className={styles.resendbtn} onClick={() => handleResend()}>{loading === "pending" ? <Spinner /> : "Resend"}</button>
                    <button className={styles.verifybtn} onClick={handleVerify}>{/* Sign Up */}
              {loading === "pending" ? <Spinner /> : "Verify & continue"}</button>
                </div>
            </div>
        </div>
    )
}
export default otpPage; 