import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const buildInquirySchema = (translations) =>
  yup
    .object({
      name: yup.string().required(translations.schema_required),
      message: yup.string().required(translations.schema_required),
      tel: yup
        .string()
        .required(translations.schema_required)
        .matches(phoneRegExp, translations.schema_phoneNumber),
      email: yup
        .string()
        .email(translations.schema_email)
        .required(translations.schema_required),
    })
    .required();
