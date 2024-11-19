import React from "react";
import { useFormik } from "formik";
import Rating from "@mui/material/Rating";
import CustomButton from "../../customComponents/CustomButton";
import CustomTextField from "../../customComponents/CustomTextField";

function PerformanceAppraisal() {
  const formik = useFormik({
    initialValues: {
      employeeName: "",
      employeeEmail: "",
      department: "",
      appraisalDate: "",
      performanceScore: "",
      strengths: "",
      areasOfImprovement: "",
      goals: "",
      feedback: "",
      overallRating: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <br />
      <h4>Performance Appraisal</h4>
      <CustomTextField
        id="employeeName"
        name="employeeName"
        label="Employee Name"
        formik={formik}
      />
      <CustomTextField
        id="employeeEmail"
        name="employeeEmail"
        label="Employee Email"
        type="email"
        formik={formik}
      />
      <CustomTextField
        id="department"
        name="department"
        label="Department"
        formik={formik}
        select
        options={[
          { value: "Retail Banking", label: "Retail Banking" },
          { value: "Corporate Banking", label: "Corporate Banking" },
          { value: "Investment Banking", label: "Investment Banking" },
          { value: "Risk Management", label: "Risk Management" },
          {
            value: "Compliance and Regulatory Affairs",
            label: "Compliance and Regulatory Affairs",
          },
          { value: "Wealth Management", label: "Wealth Management" },
          { value: "Operations", label: "Operations" },
          { value: "IT Support", label: "IT Support" },
        ]}
      />
      <CustomTextField
        id="appraisalDate"
        name="appraisalDate"
        label="Appraisal Date"
        type="date"
        formik={formik}
      />
      <br />
      <br />
      Performance Score
      <br />
      <Rating
        name="performanceScore"
        value={formik.values.performanceScore}
        onChange={(event, newValue) => {
          formik.setFieldValue("performanceScore", newValue);
        }}
      />
      <CustomTextField
        id="strengths"
        name="strengths"
        label="Strengths"
        multiline
        rows={4}
        formik={formik}
      />
      <CustomTextField
        id="areasOfImprovement"
        name="areasOfImprovement"
        label="Areas of Improvement"
        multiline
        rows={4}
        formik={formik}
      />
      <CustomTextField
        id="goals"
        name="goals"
        label="Goals for Next Period"
        multiline
        rows={4}
        formik={formik}
      />
      <CustomTextField
        id="feedback"
        name="feedback"
        label="Feedback"
        multiline
        rows={4}
        formik={formik}
      />
      <CustomTextField
        id="overallRating"
        name="overallRating"
        label="Overall Rating"
        formik={formik}
        select
        options={[
          { value: "Outstanding", label: "Outstanding" },
          { value: "Exceeds Expectations", label: "Exceeds Expectations" },
          { value: "Meets Expectations", label: "Meets Expectations" },
          { value: "Needs Improvement", label: "Needs Improvement" },
          { value: "Unsatisfactory", label: "Unsatisfactory" },
        ]}
      />
      <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
    </form>
  );
}

export default PerformanceAppraisal;
