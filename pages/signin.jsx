import { Text } from "@chakra-ui/react";
import style from "../styles/signup.module.css";
import { BsEnvelopeOpen } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../public/redux/auth";
import { setCoins } from "../public/redux/coins";
import Data from "../public/data";
import { loginUser, userProfile } from "../public/redux/auth/thunk-action";
import { Spinner } from "../public/components/spinner";

const SignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {loading} = useSelector(state=> state.authReducers)

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("email is required"),
    password: Yup.string().required("password is required"),
  });
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    isSubmitting,
    errors,
    touched,
    values,
    isValid,
    isValidating,
  } = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // const user = {
      //   firstname: "emmanuel",
      //   lastname: "Senderouszz"
      // }
      await dispatch(loginUser(values)).then(res => {
        if (res.meta.requestStatus === 'fulfilled') {
          dispatch(userProfile())
          router.push('/dashboard')
        }
      })
      // dispatch(setCoins(Data))
      // dispatch(setDetails(user))
      // router.push("/dashboard")
    },
  });
  return (
    <div className={style.signupContainer}>
      <div className={style.image}>
        <div className={style.imgtext}>
          <span className={style.logo}>
            <img src="/images/logos2.svg" />
          </span>
          <Text
            style={{ color: "#fff", fontWeight: "600", fontFamily: "Gotham" }}
            fontSize={{ lg: "1.5rem" }}
          >
            Welcome to Paybuymax
          </Text>
          <Text
            fontSize={{ lg: ".8rem" }}
            style={{
              textAlign: "center",
              marginTop: ".6rem",
              color: "#fff",
              fontFamily: "Gotham",
            }}
          >
            By creating an account you agree to our
            <span style={{ color: "#FFCC29" }}>
              {" "}
              Terms and
              <br /> Conditions
            </span>{" "}
            and{" "}
            <span style={{ color: "#FFCC29" }}>
              Data Protection Guidelines.
            </span>
          </Text>
        </div>
      </div>
      <div className={style.sign}>
        <div className={style.center}>
          <Text
            fontSize={{ lg: "1.4rem" }}
            style={{ color: "#000", fontWeight: "600", fontFamily: "Gotham" }}
          >
            Sign In
          </Text>
          <form>
            <span>
              <label>Email</label>
              <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} placeholder="dummytext@paybuymax.com" />
              <BsEnvelopeOpen className={style.envelope} />
              {!!errors.email && touched.email && (
                <Text
                  style={{
                    color: "red",
                    fontFamily: "Gotham",
                    paddingLeft: ".2rem",
                    paddingTop: ".4rem",
                  }}
                  fontSize={{ lg: ".7rem" }}
                >
                  {errors.email}
                </Text>
              )}
            </span>
            <span>
              <label>Password</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
                type="password"
                placeholder="***********"
              />
              {!!errors.password && touched.password && (
                <Text
                  style={{
                    color: "red",
                    fontFamily: "Gotham",
                    paddingLeft: ".2rem",
                    paddingTop: ".4rem",
                  }}
                  fontSize={{ lg: ".7rem" }}
                >
                  {errors.password}
                </Text>
              )}
            </span>
            <div className={style.submit} onClick={handleSubmit}>
               {/* Sign Up */}
               {loading === "pending" ? <Spinner /> : "Sign in"}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1rem"
              }}
            >
              <Text
                fontSize={{ lg: ".8rem" }}
                style={{
                  color: "#676767",
                  fontFamily: "Gotham",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Don't have an account yet? <Text style={{color: "#f24005", marginLeft: ".3rem"}} onClick={() => router.push("/signup")}>Sign up now</Text>
              </Text>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignIn;