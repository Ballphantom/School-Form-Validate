import * as yup from "yup";

export const SchoolRegisterForm = yup.object().shape({
  firstName: yup.string().required("What is your name"),
  lastName: yup.string().required("What is your last name"),
  email: yup.string().email().required("Enter your email"),
  telephoneNumber: yup.number().min(1).required("Enter your telephone number"),
  gender: yup.string().required("Enter your gender"),
  gpa: yup.number().required("Enter your GPA"),
  birthday: yup.date().required("Enter your birthday"),
  
});