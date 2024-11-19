import React from "react";
import { useFormik } from "formik";
import CustomTextField from "../../customComponents/CustomTextField";
import CustomButton from "../../customComponents/CustomButton";

function DraProfile() {
  const formik = useFormik({
    initialValues: {
      agentName: "",
      agentID: "",
      debtorName: "",
      debtorID: "",
      loanType: "",
      recoveryStatus: "",
      outstandingAmount: "",
      lastContactDate: "",
      collectionNotes: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h4>DRA Profile Form</h4>

      <CustomTextField
        id="agentName"
        name="agentName"
        label="Agent Name"
        formik={formik}
      />

      <CustomTextField
        id="agentID"
        name="agentID"
        label="Agent ID"
        formik={formik}
      />

      <CustomTextField
        id="debtorName"
        name="debtorName"
        label="Debtor Name"
        formik={formik}
      />

      <CustomTextField
        id="debtorID"
        name="debtorID"
        label="Debtor ID"
        formik={formik}
      />

      <CustomTextField
        id="loanType"
        name="loanType"
        label="Loan Type"
        formik={formik}
        select
        options={[
          { value: "Personal Loan", label: "Personal Loan" },
          { value: "Home Loan", label: "Home Loan" },
          { value: "Auto Loan", label: "Auto Loan" },
          { value: "Business Loan", label: "Business Loan" },
          { value: "Education Loan", label: "Education Loan" },
          { value: "Credit Card Debt", label: "Credit Card Debt" },
          { value: "Other", label: "Other" },
        ]}
      />

      <CustomTextField
        id="recoveryStatus"
        name="recoveryStatus"
        label="Recovery Status"
        formik={formik}
        select
        options={[
          { value: "Not Contacted", label: "Not Contacted" },
          { value: "In Progress", label: "In Progress" },
          { value: "Payment Plan Agreed", label: "Payment Plan Agreed" },
          { value: "Partial Payment", label: "Partial Payment" },
          { value: "Fully Recovered", label: "Fully Recovered" },
          { value: "Unrecoverable", label: "Unrecoverable" },
        ]}
      />

      <CustomTextField
        id="outstandingAmount"
        name="outstandingAmount"
        label="Outstanding Amount (INR)"
        type="number"
        formik={formik}
      />

      <CustomTextField
        id="lastContactDate"
        name="lastContactDate"
        label="Last Contact Date"
        type="date"
        formik={formik}
      />

      <CustomTextField
        id="collectionNotes"
        name="collectionNotes"
        label="Collection Notes"
        multiline
        rows={4}
        formik={formik}
      />

      <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
    </form>
  );
}

export default DraProfile;
