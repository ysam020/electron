import * as Yup from "yup";

export const validationSchemaForgotPassword = Yup.object({
  username: Yup.string().required("Username is required"),
});
