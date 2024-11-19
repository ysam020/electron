import React from "react";
import { useFormik } from "formik";
import CustomTextField from "../../customComponents/CustomTextField";
import CustomButton from "../../customComponents/CustomButton";

function EmployeeRelation() {
  const formik = useFormik({
    initialValues: {
      employeeName: "",
      employeeEmail: "",
      department: "",
      grievanceType: "",
      grievanceDetails: "",
      reportedDate: "",
      resolutionDate: "",
      actionsTaken: "",
      resolutionStatus: "",
      followUpActions: "",
    },
    onSubmit: (values) => {},
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <br />
      <h4>Employee Relation</h4>
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
        id="grievanceType"
        name="grievanceType"
        label="Grievance Type"
        formik={formik}
        select
        options={[
          { value: "Workplace Harassment", label: "Workplace Harassment" },
          { value: "Discrimination", label: "Discrimination" },
          { value: "Disciplinary Issues", label: "Disciplinary Issues" },
          { value: "Salary Disputes", label: "Salary Disputes" },
          { value: "Workplace Safety", label: "Workplace Safety" },
          { value: "Interpersonal Conflict", label: "Interpersonal Conflict" },
          { value: "Policy Violation", label: "Policy Violation" },
          { value: "Other", label: "Other" },
        ]}
      />

      <CustomTextField
        id="grievanceDetails"
        name="grievanceDetails"
        label="Grievance Details"
        multiline
        rows={4}
        formik={formik}
      />

      <CustomTextField
        id="reportedDate"
        name="reportedDate"
        label="Reported Date"
        type="date"
        formik={formik}
      />

      <CustomTextField
        id="resolutionDate"
        name="resolutionDate"
        label="Resolution Date"
        type="date"
        formik={formik}
      />

      <CustomTextField
        id="actionsTaken"
        name="actionsTaken"
        label="Actions Taken"
        multiline
        rows={4}
        formik={formik}
      />

      <CustomTextField
        id="resolutionStatus"
        name="resolutionStatus"
        label="Resolution Status"
        formik={formik}
        select
        options={[
          { value: "Pending", label: "Pending" },
          { value: "Resolved", label: "Resolved" },
          { value: "Escalated", label: "Escalated" },
          { value: "Dismissed", label: "Dismissed" },
        ]}
      />

      <CustomTextField
        id="followUpActions"
        name="followUpActions"
        label="Follow-up Actions"
        multiline
        rows={4}
        formik={formik}
      />

      <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
    </form>
  );
}

export default EmployeeRelation;
