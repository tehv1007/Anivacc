import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const inquirySchema = yup
  .object({
    name: yup.string().required("Không được bỏ trống trường này"),
    message: yup.string().required("Không được bỏ trống trường này"),
    tel: yup
      .string()
      .matches(phoneRegExp, "Không đúng định dạng số điện thoại")
      .required("Không được bỏ trống trường này"),
    email: yup
      .string()
      .email("Định dạng email không đúng")
      .required("Không được bỏ trống trường này"),
  })
  .required();
