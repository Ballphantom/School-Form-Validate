import { ValidationErrors } from "final-form";
import { ValidationError } from "yup";
import { SchoolRegisterForm } from "./SchoolRegisterForm";

export interface FormInterface {
  firstName: string;
  lastName: string;
  email: string;
  telephoneNumber: string;
  gender: string;
  gpa: number;
  birthday: Date;
  age: number;
  address: string;
  citizenID: string;
  class: string;
}

export const onSubmit = (values: FormInterface) => {
  console.log(values);
};

export const validate = async (values: FormInterface): Promise<ValidationErrors> => {
  try {
    await SchoolRegisterForm.validate(values, { abortEarly: false });
  } catch (err: any) {
    return err.inner.reduce(
      (errors: ValidationErrors, innerError: ValidationError) => {
        if (innerError.path !== undefined) {
          console.log(err);
          return { ...errors, [innerError.path]: innerError.message };
        }
        return errors;
      },
      {}
    );
  }
  return {};
};