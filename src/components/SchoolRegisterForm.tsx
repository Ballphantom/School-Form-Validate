import * as yup from "yup";

export const SchoolRegisterForm = yup.object().shape({
  firstName: yup.string()
    .required('Name required'),
  lastName: yup.string()
    .required('Last name required'),
  email: yup.string()
    .email('Invalid Email')
    .required('Emaiil is required'),
  telephoneNumber: yup.number()
    .min(10, 'Phone number need 10 numbers')
    .required('Phone number required'),
  gender: yup.string()
    .required('Gender required'),
  gpa: yup.number()
    .required('GPA required'),
  birthday: yup.date()
    .required('When were you born?'),
  // address: yup.string()
  //   .required(),
  // citizenID: yup.number()
  //   .required()
  //   .min(13, 'ID must have 13 numbers')
  //   .max(13, 'ID must have 13 numbers'),
  // class: yup.string()
  //   .required('What class are you interested in?')
});
