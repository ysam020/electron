import React, { useContext, useRef, useState } from "react";
import { useFormik } from "formik";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { UserContext } from "../../../contexts/UserContext";
import Snackbar from "@mui/material/Snackbar";
import { handleSingleFileUpload } from "../../../utils/aws/awsSingleFileUpload";
import { validationSchema } from "../../../schemas/employeeOnboarding/completeOnboarding";
import CustomButton from "../../customComponents/CustomButton";
import CustomUploadButton from "../../customComponents/CustomUploadButton";
import CustomTextField from "../../customComponents/CustomTextField";

function CompleteOnboarding() {
  const { user } = useContext(UserContext);
  const [fileSnackbar, setFileSnackbar] = useState(false);
  const fileInputRefs = useRef({
    employeePhoto: null,
    resume: null,
    addressProof: null,
  });

  const formik = useFormik({
    initialValues: {
      skill: "",
      company_policy_visited: "",
      introduction_with_md: "",
      employee_photo: "",
      resume: "",
      address_proof: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await axios.post(
          `https://sameer-yadav.online/api/complete-onboarding`,
          { ...values, username: user.username },
          {
            withCredentials: true,
          }
        );
        alert(res.data.message);
        resetForm();
      } catch (error) {
        console.error("Error occurred while completing onboarding:", error);
      }
    },
  });

  const employee_name = [user.first_name, user.middle_name, user.last_name]
    .filter(Boolean)
    .join(" ");

  return (
    <form onSubmit={formik.handleSubmit}>
      Name:&nbsp;
      {employee_name}
      <br />
      Email:&nbsp;{user.email}
      <br />
      Employment Type:&nbsp;{user.employment_type}
      <br />
      <Row>
        <Col xs={4}>
          <CustomTextField
            id="skill"
            name="skill"
            label="Skill"
            formik={formik}
          />
        </Col>

        <Col xs={4}>
          <CustomTextField
            id="company_policy_visited"
            name="company_policy_visited"
            label="Gone through company policy?"
            formik={formik}
            select
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <CustomUploadButton
            name={"Employee Photo"}
            onChange={(e) => {
              handleSingleFileUpload(
                e,
                "employee_photo",
                "kyc",
                formik,
                setFileSnackbar
              );
            }}
            ref={(el) => (fileInputRefs.current.employeePhoto = el)}
          />
          <br />
          {formik.values.employee_photo !== "" ? (
            <>
              <br />
              <a href={formik.values.employee_photo}>
                {formik.values.employee_photo}
              </a>
            </>
          ) : (
            ""
          )}
        </Col>
        <Col>
          <CustomUploadButton
            name={"Resume"}
            onChange={(e) =>
              handleSingleFileUpload(
                e,
                "resume",
                "kyc",
                formik,
                setFileSnackbar
              )
            }
            ref={(el) => (fileInputRefs.current.resume = el)}
          />
          <br />
          {formik.touched.resume && formik.errors.resume ? (
            <div style={{ color: "#D32F2F" }}>{formik.errors.resume}</div>
          ) : null}
          {formik.values.resume !== "" ? (
            <>
              <br />
              <a href={formik.values.resume}>{formik.values.resume}</a>
            </>
          ) : (
            ""
          )}
        </Col>

        <Col>
          <CustomUploadButton
            name={"Address Proof"}
            onChange={(e) =>
              handleSingleFileUpload(
                e,
                "address_proof",
                "kyc",
                formik,
                setFileSnackbar
              )
            }
            ref={(el) => (fileInputRefs.current.addressProof = el)}
          />
          <br />
          {formik.touched.address_proof && formik.errors.address_proof ? (
            <div style={{ color: "#D32F2F" }}>
              {formik.errors.address_proof}
            </div>
          ) : null}
          {formik.values.address_proof !== "" ? (
            <>
              <br />
              <a href={formik.values.address_proof}>
                {formik.values.address_proof}
              </a>
            </>
          ) : (
            ""
          )}
        </Col>
      </Row>
      <br />
      <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
      <Snackbar
        open={fileSnackbar}
        message="File uploaded successfully!"
        sx={{ left: "auto !important", right: "24px !important" }}
      />
    </form>
  );
}

export default React.memo(CompleteOnboarding);
