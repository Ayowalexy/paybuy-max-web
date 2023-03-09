import { Text } from "@chakra-ui/react";
import style from "../styles/signup.module.css";
import { BsEnvelopeOpen } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {AiFillEye} from "react-icons/ai"
import { useState } from "react";
const SignUp = () => {
  const [shows, setShows] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector(state => state.authReducer)
  console.log(state)
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("email is required"),
    password: Yup.string().required("password is required"),
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
    },
    validationSchema,
    onSubmit: (values) => {},
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
                type= {shows ? "text" : "password"}
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
                name="password"
                type="password"
              />
            </span>
            <div className={style.submit} onClick={handleSubmit}>
              Sign Up
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
                Do you have an account? <Text style={{color: "#f24005", marginLeft: ".3rem"}} onClick={() => router.push("/signin")}>Sign In now</Text>
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
