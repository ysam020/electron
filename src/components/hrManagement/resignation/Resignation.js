import React from "react";
import { useFormik } from "formik";
import CustomButton from "../../customComponents/CustomButton";
import CustomTextField from "../../customComponents/CustomTextField";

function Resignation() {
  const formik = useFormik({
    initialValues: {
      employeeName: "",
      employeeID: "",
      department: "",
      resignationDate: "",
      lastWorkingDay: "",
      feedback: "",
    },
    onSubmit: (values) => {
      console.log("Resignation form submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h4>Employee Resignation Form</h4>

      <CustomTextField
        id="employeeName"
        name="employeeName"
        label="Employee Name"
        formik={formik}
      />

      <CustomTextField
        id="employeeID"
        name="employeeID"
        label="Employee ID"
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
          { value: "Asset Management", label: "Asset Management" },
          { value: "Compliance", label: "Compliance" },
          { value: "Wealth Management", label: "Wealth Management" },
          { value: "Operations", label: "Operations" },
          { value: "IT Support", label: "IT Support" },
          { value: "HR", label: "HR" },
        ]}
      />

      <CustomTextField
        id="resignationDate"
        name="resignationDate"
        label="Resignation Date"
        formik={formik}
        type="date"
      />

      <CustomTextField
        id="lastWorkingDay"
        name="lastWorkingDay"
        label="Last Working Day"
        formik={formik}
        type="date"
      />

      <CustomTextField
        id="feedback"
        name="feedback"
        label="Feedback"
        formik={formik}
        multiline
        rows={4}
      />

      <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
    </form>
  );
}

export default Resignation;
