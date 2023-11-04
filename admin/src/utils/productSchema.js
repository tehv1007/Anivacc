import * as yup from "yup";

export const productSchema = yup
  .object({
    title: yup.string().max(300).required("Title is required"),
    product_code: yup.string().max(300).required("Title is required"),
    short_desc: yup.string().required("Description is a required field"),
    long_desc: yup.string().required("Description is a required field"),
  })
  .required();
