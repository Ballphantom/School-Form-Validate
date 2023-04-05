import { Form, Field } from "react-final-form";
import { SchoolRegisterForm } from "./components/SchoolRegisterForm";
import { ValidationErrors } from "final-form";
import { ValidationError } from "yup";
import "./App.css";

const onSubmit = (values: any) => {
  console.log(values);
};

const validate = async (values: any): Promise<ValidationErrors> => {
  try {
    await SchoolRegisterForm.validate(values, { abortEarly: false });
  } catch (err: any) {
    return err.inner.reduce(
      (errors: ValidationErrors, innerError: ValidationError) => {
        if (innerError.path !== undefined) {
          return { ...errors, [innerError.path]: innerError.message };
        }
      },
      {}
    );
  }
};

const App = () => {
  return (
    <div className="form-container">
      <Form onSubmit={onSubmit} validate={validate}>
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-header"><h2>SCHOOL REGISTER FORM</h2></div>
            <div className="form-field">
              <label>First Name</label>
              <Field name="firstName" component="input" type="text" />
            </div>
            <div className="form-field">
              <label>Last Name</label>
              <Field name="lastName" component="input" type="text" />
            </div>
            <div className="form-field">
              <label>Email</label>
              <Field name="email" component="input" type="email" />
            </div>
            <div className="form-field">
              <label>Telephone Number</label>
              <Field name="telephoneNumber" component="input" type="number" />
            </div>
            <div className="form-field">
              <label>Gender</label>
              <Field name="gender" component="input" type="text" />
            </div>
            <div className="form-field">
              <label>GPA</label>
              <Field name="gpa" component="input" type="number" step="0.01" />
            </div>
            <div className="form-field">
              <label>Birthday</label>
              <Field name="birthday" component="input" type="date" />
            </div>
            <div className="form-field">
              <label>Address</label>
              <Field name="address" component="input" type="text" />
            </div>
            <div className="form-field">
              <label>ID card</label>
              <Field name="citizenID" component="input" type="text" />
            </div>
            <div className="form-field">
              <label>Class</label>
              <Field name="class" component="input" type="text" />
            </div>
            <button type="submit" disabled={submitting}>
              Submit
            </button>
          </form>
        )}
      </Form>
    </div>
  );
};

export default App;