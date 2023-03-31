import React, { Component } from 'react';
import OtpInput from 'react-otp-input';
import { useState } from 'react';
import style from '../../styles/otp-form.module.css'

const Otp = ({otp, setOtp}) => {

    return (
      <OtpInput
        value={otp}
        onChange={(value) => setOtp(value)}
        numInputs={6}
        inputStyle={style.input}
        containerStyle={style.container}
        isInputSecure={true}
        focusStyle={style.focus}
        className={style.inputfolder}
      />
    );
  }
export default Otp