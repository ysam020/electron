import React from "react";
import { useFormik } from "formik";
import CustomTextField from "../../customComponents/CustomTextField";
import CustomButton from "../../customComponents/CustomButton";

function Attendance() {
  const formik = useFormik({
    initialValues: {
      employeeName: "",
      employeeEmail: "",
      department: "",
      attendanceDate: "",
      attendanceStatus: "",
      timeIn: "",
      timeOut: "",
      remarks: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h4>Employee Attendance</h4>

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
        id="attendanceDate"
        name="attendanceDate"
        label="Attendance Date"
        type="date"
        formik={formik}
      />

      <CustomTextField
        id="attendanceStatus"
        name="attendanceStatus"
        label="Attendance Status"
        formik={formik}
        select
        options={[
          { value: "Present", label: "Present" },
          { value: "Absent", label: "Absent" },
          { value: "On Leave", label: "On Leave" },
          { value: "Late", label: "Late" },
        ]}
      />

      <CustomTextField
        id="timeIn"
        name="timeIn"
        label="Time In"
        type="time"
        formik={formik}
      />

      <CustomTextField
        id="timeOut"
        name="timeOut"
        label="Time Out"
        type="time"
        formik={formik}
      />

      <CustomTextField
        id="remarks"
        name="remarks"
        label="Remarks"
        multiline
        rows={4}
        formik={formik}
      />

      <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
    </form>
  );
}

export default Attendance;
