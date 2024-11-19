// import React from "react";
// import TextField from "@mui/material/TextField";

// const CustomTextField = ({
//   id,
//   name,
//   label,
//   formik,
//   type = "text",
//   ...rest
// }) => {
//   return (
//     <TextField
//       type={type}
//       size="small"
//       margin="dense"
//       variant="filled"
//       fullWidth
//       id={id}
//       name={name}
//       label={label}
//       value={formik.values[name]}
//       onChange={formik.handleChange}
//       error={formik.touched[name] && Boolean(formik.errors[name])}
//       helperText={formik.touched[name] && formik.errors[name]}
//       className="login-input"
//       InputLabelProps={{ shrink: true }}
//       {...rest}
//     />
//   );
// };

// export default CustomTextField;

import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const CustomTextField = ({
  id,
  name,
  label,
  formik,
  type = "text",
  options = [],
  select = false,
  ...rest
}) => {
  return (
    <TextField
      select={select}
      type={type}
      size="small"
      margin="dense"
      variant="filled"
      fullWidth
      id={id}
      name={name}
      label={label}
      value={formik.values[name]}
      onChange={formik.handleChange}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      className="login-input"
      InputLabelProps={{ shrink: true }}
      {...rest}
    >
      {select &&
        options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  );
};

export default CustomTextField;
