import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { InputOtp } from "primereact/inputotp";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { validationSchemaForgotPassword } from "../schemas/auth/forgotPasswordSchema";
import { validationSchemaOtp } from "../schemas/auth/updatePasswordSchema";
import CustomButton from "../components/customComponents/CustomButton";

function ForgotPasswordForm(props) {
  const [otpSent, setOtpSent] = useState(false); // State for OTP sent
  const [username, setUsername] = useState("");

  const formikForgotPassword = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: validationSchemaForgotPassword, // Set validation schema
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          `https://sameer-yadav.online/api/forgot-password`,
          values,
          {
            withCredentials: true,
          }
        );
        if (res.data.message === "OTP sent to your email") {
          setUsername(values.username);
          setOtpSent(true); // Switch to OTP form
        }
        alert(res.data.message); // Show success message
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert(error.response.data.message);
        } else {
          alert("An unexpected error occurred. Please try again later.");
        }
      }
    },
  });

  const formikOtp = useFormik({
    initialValues: {
      otp: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchemaOtp,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          `https://sameer-yadav.online/api/update-password`,
          {
            username,
            otp: values.otp,
            password: values.password,
          },
          {
            withCredentials: true,
          }
        );
        alert(res.data.message);
        if (res.data.message === "Password has been successfully reset") {
          props.setForgotPassword(false);
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert(error.response.data.message);
        } else {
          alert("An unexpected error occurred. Please try again later.");
        }
      }
    },
  });

  return (
    <>
      {!otpSent ? (
        <form onSubmit={formikForgotPassword.handleSubmit}>
          <InputText
            id="username"
            name="username"
            placeholder="Username"
            value={formikForgotPassword.values.username}
            onChange={formikForgotPassword.handleChange}
            className={
              formikForgotPassword.touched.username &&
              formikForgotPassword.errors.username
                ? "p-invalid"
                : ""
            }
          />
          {formikForgotPassword.touched.username &&
            formikForgotPassword.errors.username && (
              <small className="p-error">
                {formikForgotPassword.errors.username}
                <br />
              </small>
            )}

          <CustomButton
            isSubmitting={formikForgotPassword.isSubmitting}
            name={"Reset"}
          />
        </form>
      ) : (
        <form onSubmit={formikOtp.handleSubmit}>
          <span style={{ color: "#0060ae", fontWeight: 800, fontSize: "14px" }}>
            Enter OTP
          </span>
          <InputOtp
            placeholder="Enter OTP"
            value={formikOtp.values.otp}
            onChange={(e) => formikOtp.setFieldValue("otp", e.value)} // Handle value directly
            mask
            integerOnly
            length={6}
          />

          {formikOtp.touched.otp && formikOtp.errors.otp && (
            <small className="p-error">{formikOtp.errors.otp}</small>
          )}

          <Password
            toggleMask
            id="password"
            name="password"
            placeholder="New Password"
            value={formikOtp.values.password}
            onChange={formikOtp.handleChange}
            className={
              formikOtp.touched.password && formikOtp.errors.password
                ? "p-invalid"
                : ""
            }
            feedback={false}
          />

          {formikOtp.touched.password && formikOtp.errors.password && (
            <small className="p-error">{formikOtp.errors.password}</small>
          )}

          <Password
            toggleMask
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formikOtp.values.confirmPassword}
            onChange={formikOtp.handleChange}
            className={
              formikOtp.touched.confirmPassword &&
              formikOtp.errors.confirmPassword
                ? "p-invalid"
                : ""
            }
            feedback={false}
          />
          {formikOtp.touched.confirmPassword &&
            formikOtp.errors.confirmPassword && (
              <small className="p-error">
                {formikOtp.errors.confirmPassword}
              </small>
            )}
          <br />
          <CustomButton
            isSubmitting={formikOtp.isSubmitting}
            name={"Confirm"}
          />
        </form>
      )}
    </>
  );
}

export default ForgotPasswordForm;
