import { ValidationErrors } from "final-form";
import { ValidationError } from "yup";
import { SchoolRegisterForm } from "./SchoolRegisterForm";

export const validate = async (values: any): Promise<ValidationErrors> => {
  console.log('เอิ้ว');
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