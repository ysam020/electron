import React from "react";
import { useFormik } from "formik";
import CustomTextField from "../customComponents/CustomTextField";
import CustomButton from "../customComponents/CustomButton";

function Interview() {
  const formik = useFormik({
    initialValues: {
      candidateName: "",
      candidateEmail: "",
      jobPosition: "",
      department: "",
      interviewRound: "",
      interviewDate: "",
    },

    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h4>Interview Scheduling and Details</h4>

      <CustomTextField
        id="candidateName"
        name="candidateName"
        label="Candidate Name"
        formik={formik}
      />

      <CustomTextField
        id="candidateEmail"
        name="candidateEmail"
        label="Candidate Email"
        formik={formik}
      />

      <CustomTextField
        id="jobPosition"
        name="jobPosition"
        label="Job Position"
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
            value: "Compliance and Regulatory Politics",
            label: "Compliance and Regulatory Affairs",
          },
        ]}
      />

      <CustomTextField
        id="interviewRound"
        name="interviewRound"
        label="Interview Round"
        formik={formik}
        select
        options={[
          { value: "First Round", label: "First Round" },
          { value: "Technical Round", label: "Technical Round" },
          { value: "HR Round", label: "HR Round" },
          { value: "Final Round", label: "Final Round" },
        ]}
      />

      <CustomTextField
        id="interviewDate"
        name="interviewDate"
        label="Interview Date"
        type="date"
        formik={formik}
      />

      <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
    </form>
  );
}

export default Interview;
