import React from "react";
import { useFormik } from "formik";
import CustomTextField from "../../customComponents/CustomTextField";
import CustomButton from "../../customComponents/CustomButton";

function DocumentRequest() {
  const formik = useFormik({
    initialValues: {
      requesterName: "",
      requesterEmail: "",
      department: "",
      documentType: "",
      purpose: "",
      requestDate: "",
      additionalNotes: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h4>Document Request Form</h4>

      <CustomTextField
        id="requesterName"
        name="requesterName"
        label="Requester Name"
        formik={formik}
      />

      <CustomTextField
        id="requesterEmail"
        name="requesterEmail"
        label="Requester Email"
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
          { value: "Compliance", label: "Compliance" },
          { value: "Wealth Management", label: "Wealth Management" },
          { value: "Operations", label: "Operations" },
          { value: "IT Support", label: "IT Support" },
        ]}
      />

      <CustomTextField
        id="documentType"
        name="documentType"
        label="Document Type"
        formik={formik}
        select
        options={[
          { value: "Bank Statement", label: "Bank Statement" },
          {
            value: "Account Transaction History",
            label: "Account Transaction History",
          },
          { value: "Loan Agreement", label: "Loan Agreement" },
          { value: "Tax Documents", label: "Tax Documents" },
          { value: "Investment Portfolio", label: "Investment Portfolio" },
          { value: "Other", label: "Other" },
        ]}
      />

      <CustomTextField
        id="purpose"
        name="purpose"
        label="Purpose of Request"
        multiline
        rows={2}
        formik={formik}
      />

      <CustomTextField
        id="requestDate"
        name="requestDate"
        label="Request Date"
        type="date"
        formik={formik}
      />

      <CustomTextField
        id="additionalNotes"
        name="additionalNotes"
        label="Additional Notes"
        multiline
        rows={4}
        formik={formik}
      />

      <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
    </form>
  );
}

export default DocumentRequest;
