import React from "react";
import { useFormik } from "formik";
import CustomButton from "../../customComponents/CustomButton";
import CustomTextField from "../../customComponents/CustomTextField";

function JobOpenings() {
  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      jobPostingDate: new Date().toISOString().split("T")[0],
      applicationDeadline: "",
      department: "",
      jobDescription: "",
      requiredSkills: "",
      experience: "",
      employmentType: "",
      budget: "",
      hiringManager: "",
    },

    onSubmit: (values) => {},
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <CustomTextField
        id="jobTitle"
        name="jobTitle"
        label="Job Title"
        formik={formik}
      />

      <CustomTextField
        id="jobPostingDate"
        name="jobPostingDate"
        label="Job Posting Date"
        formik={formik}
        type="date"
      />

      <CustomTextField
        id="applicationDeadline"
        name="applicationDeadline"
        label="Application Deadline"
        formik={formik}
        type="date"
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
        ]}
      />

      <CustomTextField
        id="jobDescription"
        name="jobDescription"
        label="Job Description"
        formik={formik}
      />

      <CustomTextField
        id="requiredSkills"
        name="requiredSkills"
        label="Required Skills"
        formik={formik}
      />

      <CustomTextField
        id="experience"
        name="experience"
        label="Experience (in years)"
        formik={formik}
      />

      <CustomTextField
        id="employmentType"
        name="employmentType"
        label="Employment Type"
        formik={formik}
        select
        options={[
          { value: "Full-Time", label: "Full-Time" },
          { value: "Part-Time", label: "Part-Time" },
          { value: "Contract", label: "Contract" },
          { value: "Temporary", label: "Temporary" },
        ]}
      />

      <CustomTextField
        id="budget"
        name="budget"
        label="Budget (LPA)"
        formik={formik}
      />

      <CustomTextField
        id="hiringManager"
        name="hiringManager"
        label="Hiring Manager"
        formik={formik}
      />

      <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
    </form>
  );
}

export default JobOpenings;
