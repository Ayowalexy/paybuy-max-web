import React from "react";
import { Formik } from "formik";
import style from "../../styles/formik.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";
const Basic = () => {
  const validationSchema = Yup.object().shape({
    amount: Yup.string().required("please enter an amount"),
    account: Yup.string().required("please enter an account number"),
  });
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      amount: "",
      account: "",
    },
    validationSchema,
    onSubmit: (values) => {},
  });
  return (
    <div className={style.formikContainer}>
      <h1>How much would you like to Transfer?</h1>
          <form onSubmit={handleSubmit}>
            <div className={style.inputfield}>
              <label className={style.label}>Amount</label>
              <input
                type="text"
                name="amount"
                onChange={handleChange}
                onBlur={handleBlur}
              />
                                        <div className={style.error}>{errors.referral && touched.referral && errors.referral}</div>
            </div>
            <div className={style.error}>{errors.amount && touched.amount && errors.amount}</div>
            <div className={style.inputfield}>
              <label className={style.label}>Account Number</label>
              <input
                type="text"
                name="account"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>            
            <div className={style.error}>{errors.account && touched.account && errors.account}</div>
            <div className={style.inputfield}>
              <label className={style.label}>Add Note</label>
              <input
                type="text"
                name="note"
              />
            </div>
            <button type="submit" className={style.basicbtn}>
              Confirm Password
            </button>
          </form>
    </div>
  );
};

export default Basic;
