import React, { useEffect, useState, useRef } from "react";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { states } from "../../../assets/data/statesData";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Snackbar from "@mui/material/Snackbar";
import { validationSchema } from "../../../schemas/employeeKyc/completeKyc";
import { useParams } from "react-router-dom";
import CustomButton from "../../customComponents/CustomButton";
import CustomUploadButton from "../../customComponents/CustomUploadButton";
import { handleSingleFileUpload } from "../../../utils/aws/awsSingleFileUpload";
import { handleSameAsPermanentAddress } from "../../../utils/kyc/handleSameAsPermanentAddress";
import { handlePincodeChange } from "../../../utils/kyc/handlePincodeChange";
import { handleAadharNoChange } from "../../../utils/kyc/handleAadharNoChange";
import { handleInsuranceDetailsChange } from "../../../utils/kyc/handleInsuranceDetailsChange";
import CustomTextField from "../../customComponents/CustomTextField";

function CompleteKYC(props) {
  const [fileSnackbar, setFileSnackbar] = useState(false);
  const { username } = useParams();
  const fileInputRefs = useRef({
    aadharPhotoFront: null,
    aadharPhotoBack: null,
    panPhoto: null,
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      middle_name: "",
      last_name: "",
      designation: "",
      department: "",
      joining_date: "",
      dob: "",
      permanent_address_line_1: "",
      permanent_address_line_2: "",
      permanent_address_city: "",
      permanent_address_state: "",
      permanent_address_pincode: "",
      communication_address_line_1: "",
      communication_address_line_2: "",
      communication_address_city: "",
      communication_address_state: "",
      communication_address_pincode: "",
      email: "",
      official_email: "",
      mobile: "",
      blood_group: "",
      highest_qualification: "",
      aadhar_no: "",
      aadhar_photo_front: "",
      aadhar_photo_back: "",
      pan_no: "",
      pan_photo: "",
      pf_no: "",
      esic_no: "",
      insurance_status: [],
      bank_account_no: "",
      bank_name: "",
      ifsc_code: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          `https://sameer-yadav.online/api/complete-kyc`,
          { ...values, username: props.username },
          {
            withCredentials: true,
          }
        );

        alert(res.data.message);
      } catch (error) {
        console.error("Error occurred during KYC submission:", error);
      }
    },
  });

  useEffect(() => {
    async function getData() {
      if (username) {
        try {
          const res = await axios.get(
            `https://sameer-yadav.online/api/get-user-data/${username}`,
            {
              withCredentials: true,
            }
          );
          formik.setValues(res.data);
        } catch (error) {
          // Log the error to the console
          console.error("Error occurred while fetching user data:", error);
        }
      }
    }

    getData();
    // eslint-disable-next-line
  }, [username]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row>
        <Col xs={4}>
          <CustomTextField
            id="designation"
            name="designation"
            label="Designation"
            formik={formik}
          />
        </Col>

        <Col xs={4}>
          <CustomTextField
            id="department"
            name="department"
            label="Department"
            formik={formik}
            select
            options={[
              { value: "Operations", label: "Operations" },
              { value: "Accounts", label: "Accounts" },
              { value: "Field", label: "Field" },
              { value: "Office Assistant", label: "Office Assistant" },
              { value: "Software Development", label: "Software Development" },
              { value: "Designing", label: "Designing" },
              { value: "Sales & Marketing", label: "Sales & Marketing" },
              { value: "HR Admin", label: "HR Admin" },
            ]}
          />
        </Col>
        <Col xs={4}>
          <CustomTextField
            id="joining_date"
            name="joining_date"
            label="Joining Date"
            formik={formik}
            type="date"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <CustomTextField
            id="dob"
            name="dob"
            label="dob"
            formik={formik}
            type="date"
          />
        </Col>
        <Col xs={4}>
          <CustomTextField
            id="email"
            name="email"
            label="Email"
            formik={formik}
          />
        </Col>
        <Col xs={4}>
          <CustomTextField
            id="official_email"
            name="official_email"
            label="Official Email"
            formik={formik}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <TextField
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="mobile"
            name="mobile"
            label="Mobile"
            value={formik.values.mobile}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
            className="login-input"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              const re = /^[0-9\b]+$/;
              if (e.target.value === "" || re.test(e.target.value)) {
                formik.handleChange(e);
              }
            }}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              maxLength: 10,
            }}
          />
        </Col>
        <Col xs={4}>
          <CustomTextField
            id="blood_group"
            name="blood_group"
            label="Blood Group"
            formik={formik}
          />
        </Col>
        <Col xs={4}>
          <CustomTextField
            id="highest_qualification"
            name="highest_qualification"
            label="Highest Qualification"
            formik={formik}
          />
        </Col>
      </Row>
      <br />
      <h5>Permanent Address</h5>

      <CustomTextField
        id="permanent_address_line_1"
        name="permanent_address_line_1"
        label="Address Line 1"
        formik={formik}
      />
      <CustomTextField
        id="permanent_address_line_2"
        name="permanent_address_line_2"
        label="Address Line 2"
        formik={formik}
      />

      <Row>
        <Col>
          <CustomTextField
            id="permanent_address_city"
            name="permanent_address_city"
            label="City"
            formik={formik}
          />
        </Col>

        <Col>
          <CustomTextField
            id="permanent_address_state"
            name="permanent_address_state"
            label="State"
            formik={formik}
            select
            options={states.map((state) => {
              return { value: state, label: state };
            })}
          />
        </Col>
        <Col>
          <TextField
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="permanent_address_pincode"
            name="permanent_address_pincode"
            label="PIN Code"
            value={formik.values.permanent_address_pincode}
            onChange={(event) =>
              handlePincodeChange(event, "permanent_address_pincode", formik)
            }
            error={
              formik.touched.permanent_address_pincode &&
              Boolean(formik.errors.permanent_address_pincode)
            }
            helperText={
              formik.touched.permanent_address_pincode &&
              formik.errors.permanent_address_pincode
            }
            className="login-input"
            InputLabelProps={{ shrink: true }}
          />
        </Col>
      </Row>
      <br />
      <br />
      <h5>Communication Address</h5>
      <FormControlLabel
        control={
          <Checkbox
            name="sameAsPermanentAddress"
            onChange={(e) => handleSameAsPermanentAddress(e, formik)}
          />
        }
        label="Same as Permanent Address"
      />
      <CustomTextField
        id="communication_address_line_1"
        name="communication_address_line_1"
        label="Address Line 1"
        formik={formik}
      />

      <CustomTextField
        id="communication_address_line_2"
        name="communication_address_line_2"
        label="Address Line 2"
        formik={formik}
      />

      <Row>
        <Col>
          <CustomTextField
            id="communication_address_city"
            name="communication_address_city"
            label="City"
            formik={formik}
          />
        </Col>

        <Col>
          <CustomTextField
            id="communication_address_state"
            name="communication_address_state"
            label="State"
            formik={formik}
            select
            options={states.map((state) => {
              return { value: state, label: state };
            })}
          />
        </Col>
        <Col>
          <TextField
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="communication_address_pincode"
            name="communication_address_pincode"
            label="PIN Code"
            value={formik.values.communication_address_pincode}
            onChange={(event) =>
              handlePincodeChange(
                event,
                "communication_address_pincode",
                formik
              )
            }
            error={
              formik.touched.communication_address_pincode &&
              Boolean(formik.errors.communication_address_pincode)
            }
            helperText={
              formik.touched.communication_address_pincode &&
              formik.errors.communication_address_pincode
            }
            className="login-input"
            InputLabelProps={{ shrink: true }}
          />
        </Col>
      </Row>
      <br />
      <h5>Documents</h5>
      <TextField
        size="small"
        margin="dense"
        variant="filled"
        fullWidth
        id="aadhar_no"
        name="aadhar_no"
        label="Aadhar Number"
        value={formik.values.aadhar_no}
        onChange={(e) => handleAadharNoChange(e, formik)}
        inputProps={{
          inputMode: "numeric", // Set input mode to numeric for better mobile support
          pattern: "[0-9]*", // Pattern to allow only numeric input
          maxLength: 12, // Limit the input to 12 characters
        }}
        error={formik.touched.aadhar_no && Boolean(formik.errors.aadhar_no)}
        helperText={formik.touched.aadhar_no && formik.errors.aadhar_no}
        className="login-input"
        InputLabelProps={{ shrink: true }}
      />
      <br />
      <br />
      <Row>
        <Col xs={6}>
          <CustomUploadButton
            name={"Aadhar Photo Front"}
            onChange={(e) => {
              handleSingleFileUpload(
                e,
                "aadhar_photo_front",
                "kyc",
                formik,
                setFileSnackbar
              );
            }}
            ref={(el) => (fileInputRefs.current.aadharPhotoFront = el)}
          />
          <br />
          {formik.values.aadhar_photo_front !== "" ? (
            <>
              <br />
              <a href={formik.values.aadhar_photo_front}>
                {formik.values.aadhar_photo_front}
              </a>
            </>
          ) : (
            ""
          )}
          {formik.touched.aadhar_photo_front &&
          formik.errors.aadhar_photo_front ? (
            <div style={{ color: "red" }}>
              {formik.errors.aadhar_photo_front}
            </div>
          ) : null}
        </Col>
        <Col xs={6}>
          <CustomUploadButton
            name={"Aadhar Photo Front"}
            onChange={(e) => {
              handleSingleFileUpload(
                e,
                "aadhar_photo_back",
                "kyc",
                formik,
                setFileSnackbar
              );
            }}
            ref={(el) => (fileInputRefs.current.aadharPhotoBack = el)}
          />
          <br />
          {formik.values.aadhar_photo_back !== "" ? (
            <>
              <br />
              <a href={formik.values.aadhar_photo_back}>
                {formik.values.aadhar_photo_back}
              </a>
            </>
          ) : (
            ""
          )}
          {formik.touched.aadhar_photo_back &&
          formik.errors.aadhar_photo_back ? (
            <div style={{ color: "red" }}>
              {formik.errors.aadhar_photo_back}
            </div>
          ) : null}
        </Col>
      </Row>
      <TextField
        size="small"
        margin="dense"
        variant="filled"
        fullWidth
        id="pan_no"
        name="pan_no"
        label="PAN Number"
        value={formik.values.pan_no}
        onChange={(e) => {
          if (e.target.value?.length <= 10) {
            formik.handleChange(e);
          }
        }}
        inputProps={{
          maxLength: 10,
          pattern: "[A-Za-z0-9]*",
        }}
        error={formik.touched.pan_no && Boolean(formik.errors.pan_no)}
        helperText={formik.touched.pan_no && formik.errors.pan_no}
        className="login-input"
        InputLabelProps={{ shrink: true }}
      />
      <br />
      <br />

      <CustomUploadButton
        name={"PAN Photo"}
        onChange={(e) => {
          handleSingleFileUpload(
            e,
            "pan_photo",
            "kyc",
            formik,
            setFileSnackbar
          );
        }}
        ref={(el) => (fileInputRefs.current.panPhoto = el)}
      />

      <br />
      {formik.values.pan_photo !== "" ? (
        <>
          <br />
          <a href={formik.values.pan_photo}>{formik.values.pan_photo}</a>
        </>
      ) : (
        ""
      )}
      {formik.touched.pan_photo && formik.errors.pan_photo ? (
        <div style={{ color: "red" }}>{formik.errors.pan_photo}</div>
      ) : null}
      <br />
      <CustomTextField
        id="pf_no"
        name="pf_no"
        label="PF Number"
        formik={formik}
      />
      <CustomTextField
        id="esic_no"
        name="esic_no"
        label="ESIC Number"
        formik={formik}
      />
      <br />
      <br />
      <h5>Insurance Details</h5>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              name="Mediclaim"
              onChange={(e) => handleInsuranceDetailsChange(e, formik)}
            />
          }
          label="Mediclaim"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="Personal Accident"
              onChange={(e) => handleInsuranceDetailsChange(e, formik)}
            />
          }
          label="Personal Accident"
        />

        <FormControlLabel
          control={
            <Checkbox
              name="Not Available"
              onChange={(e) => handleInsuranceDetailsChange(e, formik)}
            />
          }
          label="Not Available"
        />
      </FormGroup>
      {formik.touched.insurance_status && formik.errors.insurance_status ? (
        <div style={{ color: "red" }}>{formik.errors.insurance_status}</div>
      ) : null}
      <br />
      <br />
      <h5>Bank Details</h5>

      <CustomTextField
        id="bank_account_no"
        name="bank_account_no"
        label="Bank Account Number"
        formik={formik}
      />
      <CustomTextField
        id="bank_name"
        name="bank_name"
        label="Bank Name"
        formik={formik}
      />
      <CustomTextField
        id="ifsc_code"
        name="ifsc_code"
        label="IFSC"
        formik={formik}
      />

      <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
      <Snackbar
        open={fileSnackbar}
        message="File uploaded successfully!"
        sx={{ left: "auto !important", right: "24px !important" }}
      />
    </form>
  );
}

export default React.memo(CompleteKYC);
