import React from "react";
import { useFormik } from "formik";
import CustomTextField from "../../customComponents/CustomTextField";
import CustomButton from "../../customComponents/CustomButton";

function IsoCompliance() {
  const formik = useFormik({
    initialValues: {
      // ISO Compliance fields
      employeeName: "",
      employeeEmail: "",
      department: "",
      isoStandard: "",
      auditDate: "",
      complianceStatusISO: "",
      correctiveActionsISO: "",
      followUpDateISO: "",
      remarksISO: "",

      // Statutory Compliance fields
      complianceType: "",
      submissionDate: "",
      dueDate: "",
      complianceStatusStatutory: "",
      penaltyImposed: "",
      correctiveActionsStatutory: "",
      followUpDateStatutory: "",
      remarksStatutory: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <br />
      <h4>ISO Compliance</h4>
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
        id="isoStandard"
        name="isoStandard"
        label="ISO Standard"
        formik={formik}
        select
        options={[
          { value: "ISO 9001", label: "ISO 9001" },
          { value: "ISO 14001", label: "ISO 14001" },
          { value: "ISO 27001", label: "ISO 27001" },
          { value: "ISO 45001", label: "ISO 45001" },
        ]}
      />

      <CustomTextField
        id="auditDate"
        name="auditDate"
        label="Audit Date"
        type="date"
        formik={formik}
      />

      <CustomTextField
        id="complianceStatusISO"
        name="complianceStatusISO"
        label="Compliance Status"
        formik={formik}
        select
        options={[
          { value: "Compliant", label: "Compliant" },
          { value: "Non-Compliant", label: "Non-Compliant" },
          { value: "Pending", label: "Pending" },
        ]}
      />

      <CustomTextField
        id="correctiveActionsISO"
        name="correctiveActionsISO"
        label="Corrective Actions"
        multiline
        rows={4}
        formik={formik}
      />

      <CustomTextField
        id="followUpDateISO"
        name="followUpDateISO"
        label="Follow-up Date"
        type="date"
        formik={formik}
      />

      <CustomTextField
        id="remarksISO"
        name="remarksISO"
        label="Remarks"
        multiline
        rows={4}
        formik={formik}
      />

      <br />
      <br />
      <h4>Statutory Compliance</h4>
      <CustomTextField
        id="complianceType"
        name="complianceType"
        label="Compliance Type"
        formik={formik}
        select
        options={[
          { value: "Tax Filing", label: "Tax Filing" },
          { value: "Labor Laws", label: "Labor Laws" },
          {
            value: "Health & Safety Regulations",
            label: "Health & Safety Regulations",
          },
          {
            value: "Environmental Compliance",
            label: "Environmental Compliance",
          },
        ]}
      />

      <CustomTextField
        id="submissionDate"
        name="submissionDate"
        label="Submission Date"
        type="date"
        formik={formik}
      />

      <CustomTextField
        id="dueDate"
        name="dueDate"
        label="Due Date"
        type="date"
        formik={formik}
      />

      <CustomTextField
        id="complianceStatusStatutory"
        name="complianceStatusStatutory"
        label="Compliance Status"
        formik={formik}
        select
        options={[
          { value: "Compliant", label: "Compliant" },
          { value: "Non-Compliant", label: "Non-Compliant" },
          { value: "Pending", label: "Pending" },
        ]}
      />

      <CustomTextField
        id="penaltyImposed"
        name="penaltyImposed"
        label="Penalty Imposed (if any)"
        formik={formik}
      />

      <CustomTextField
        id="correctiveActionsStatutory"
        name="correctiveActionsStatutory"
        label="Corrective Actions"
        multiline
        rows={4}
        formik={formik}
      />

      <CustomTextField
        id="followUpDateStatutory"
        name="followUpDateStatutory"
        label="Follow-up Date"
        type="date"
        formik={formik}
      />

      <CustomTextField
        id="remarksStatutory"
        name="remarksStatutory"
        label="Remarks"
        multiline
        rows={4}
        formik={formik}
      />

      <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
    </form>
  );
}

export default IsoCompliance;
