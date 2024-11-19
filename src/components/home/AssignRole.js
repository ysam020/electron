import React from "react";
import { useFormik } from "formik";
import { MenuItem, TextField } from "@mui/material";
import axios from "axios";
import CustomButton from "../customComponents/CustomButton";

function AssignRole(props) {
  const formik = useFormik({
    initialValues: {
      role: "",
    },
    onSubmit: async (values, { resetForm }) => {
      if (!props.selectedUser) {
        alert("Please select user");
        return;
      }
      const data = { ...values, username: props.selectedUser };
      try {
        const res = await axios.post(
          `https://sameer-yadav.online/api/assign-role`,
          data
        );
        alert(res.data.message);
        resetForm();
      } catch (error) {
        console.error("Error occurred while assigning role:", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Assign Role</h3>
      <TextField
        select
        size="small"
        margin="dense"
        variant="filled"
        fullWidth
        id="role"
        name="role"
        label="Role"
        value={formik.values.role}
        onChange={formik.handleChange}
        error={formik.touched.role && Boolean(formik.errors.role)}
        helperText={formik.touched.role && formik.errors.role}
        className="login-input"
      >
        <MenuItem value="Admin">Admin</MenuItem>
        <MenuItem value="User">User</MenuItem>
      </TextField>
      <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
    </form>
  );
}

export default React.memo(AssignRole);
