import React from "react";
import { useFormik } from "formik";
import CustomButton from "../../customComponents/CustomButton";
import CustomTextField from "../../customComponents/CustomTextField";
function SalariesAndCommissions() {
  const formik = useFormik({
    initialValues: {
      employeeName: "",
      employeeID: "",
      department: "",
      basicSalary: "",
      commissionAmount: "",
      deductions: "",
      totalCompensation: "",
      comments: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h4>Salary and Commission Details</h4>

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
        id="basicSalary"
        name="basicSalary"
        label="Basic Salary"
        formik={formik}
      />

      <CustomTextField
        id="commissionAmount"
        name="commissionAmount"
        label="Commission Amount"
        type="number"
        formik={formik}
      />

      <CustomTextField
        id="deductions"
        name="deductions"
        label="Deductions"
        type="number"
        formik={formik}
      />

      <CustomTextField
        id="totalCompensation"
        name="totalCompensation"
        label="Total Compensation"
        type="number"
        formik={formik}
      />

      <CustomTextField
        id="comments"
        name="comments"
        label="Additional Comments"
        formik={formik}
        multiline
        rows={4}
      />

      <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
    </form>
  );
}

export default SalariesAndCommissions;
