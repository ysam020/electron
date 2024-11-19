import React from "react";
import { useFormik } from "formik";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { validationSchema } from "../../../schemas/employeeOnboarding/onboardEmployee";
import CustomButton from "../../customComponents/CustomButton";
import CustomTextField from "../../customComponents/CustomTextField";

function OnboardEmployee() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      employment_type: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await axios.post(
          `https://sameer-yadav.online/api/onboard-employee`,
          values,
          {
            withCredentials: true,
          }
        );
        alert(res.data.message);
        resetForm();
      } catch (error) {
        console.error("Error occurred while onboarding employee:", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row>
        <Col xs={4}>
          <CustomTextField
            id="first_name"
            name="first_name"
            label="First Name"
            formik={formik}
          />
        </Col>

        <Col xs={4}>
          <CustomTextField
            id="middle_name"
            name="middle_name"
            label="Middle Name"
            formik={formik}
          />
        </Col>

        <Col xs={4}>
          <CustomTextField
            id="last_name"
            name="last_name"
            label="Last Name"
            formik={formik}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          <CustomTextField
            id="email"
            name="email"
            label="Email"
            formik={formik}
          />
        </Col>

        <Col xs={4}>
          <CustomTextField
            id="employment_type"
            name="employment_type"
            label="Employment type"
            formik={formik}
            select
            options={[
              { value: "Internship", label: "Internship" },
              { value: "Probation", label: "Probation" },
              { value: "Permanent", label: "Permanent" },
            ]}
          />
        </Col>
      </Row>

      <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
    </form>
  );
}

export default React.memo(OnboardEmployee);
