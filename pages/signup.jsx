import { Text } from "@chakra-ui/react";
import style from "../styles/signup.module.css";
import { BsEnvelopeOpen } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEye } from "react-icons/ai"
import { useState } from "react";
import { setData, setProducts, setDetails } from "../public/redux/auth";
import { signUpUser } from "../public/redux/auth/thunk-action";
import { Spinner } from "../public/components/spinner";
import { useVerify } from "../public/context/verify.context";


const SignUp = () => {
  const { setEmail} = useVerify()
  const [shows, setShows] = useState(false);
  const dispatch = useDispatch();
  // const {data, products, details} = useSelector(state => state.authReducers)
  const { loading } = useSelector(state => state.authReducers)
  // console.log(data)
  // console.log(products)
  let detail = {
    email: 'seinde4'
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("email is required"),
    password: Yup.string()
      .matches(/\d/, "Password must have a number")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
    name: Yup.string().required("fullname is required"),
    referer: Yup.string(),
  });
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      password: "",
      email: "",
      name: "",
      referer: ""
    },
    validationSchema,
    onSubmit: async (values) => {
      // delete values.name
      // delete values.referer
      await dispatch(signUpUser(values)).then(res => {
        if (res.meta.requestStatus === 'fulfilled') {
          setEmail(values.email)
          router.push('/otppage')
        }
      })
    },
  });
  const router = useRouter();
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
            Sign Up
          </Text>
          <form>
            <span>
              <label>Fullname</label>
              <input type="text" name="name" onChange={handleChange} onBlur={handleBlur} placeholder="James Smith" />
              <BsEnvelopeOpen className={style.envelope} />
              {!!errors.name && touched.name && (
                <Text
                  style={{
                    color: "red",
                    fontFamily: "Gotham",
                    paddingLeft: ".2rem",
                    paddingTop: ".4rem",
                  }}
                  fontSize={{ lg: ".7rem" }}
                >
                  {errors.name}
                </Text>
              )}
            </span>
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
                type={shows ? "text" : "password"}
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
            <span>
              <label
                style={{
                  fontWeight: "300",
                  color: "#676767",
                  display: "flex",
                  marginLeft: ".3rem",
                }}
              >
                <Text style={{ fontWeight: "600", color: "#000" }}>
                  Referral Code
                </Text>{" "}
                (Optional)
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                name="referer"
                type="referer"
              />
            </span>
            <div className={style.submit} onClick={handleSubmit}>
              {/* Sign Up */}
              {loading === "pending" ? <Spinner /> : "Sign up"}
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
                Do you have an account? <Text style={{ color: "#f24005", marginLeft: ".3rem" }} onClick={() => router.push("/signin")}>Sign In now</Text>
              </Text>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
/* 
              <div onClick={() => setShows(!shows)}><AiFillEye className={style.eye} /></div> 
              */
export default SignUp;
