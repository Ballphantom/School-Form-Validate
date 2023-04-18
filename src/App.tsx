import { Form, Field } from "react-final-form";
import "./App.css";
import { validate, onSubmit } from "./conponents/validate";

const App = () => {
  return (
    <div className="form-container">
      <div className="form-section">
        <Form onSubmit={onSubmit} validate={validate}>
          {({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-header">
                <h2 className="title">
                  <hr />
                  <b>- BAN NONG KOK SCHOOL -</b>
                  <hr />
                </h2>
              </div>
              <div className="form-field">
                <label>First Name</label>
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder="John"
                />
              </div>
              <div className="form-field">
                <label>Last Name</label>
                <Field
                  name="lastName"
                  component="input"
                  type="text"
                  placeholder="Smith"
                />
              </div>
              <div className="form-field">
                <label>Email</label>
                <Field
                  name="email"
                  component="input"
                  type="email"
                  placeholder="email@gmail.com"
                />
              </div>
              <div className="form-field">
                <label>Telephone number</label>
                <Field
                  name="telephoneNumber"
                  component="input"
                  type="number"
                  placeholder="+66 0945781234"
                />
              </div>
              <div className="form-field">
                <label>Gender</label>
                <Field name="gender" component="select" type="text">
                  <option value="-">None</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Field>
              </div>
              <div className="form-field">
                <label>GPA</label>
                <Field
                  name="gpa"
                  component="input"
                  type="number"
                  step="0.01"
                  placeholder="4.00"
                />
              </div>
              <div className="form-field">
                <label>Birthday</label>
                <Field name="birthday" component="input" type="date" />
              </div>

              <div className="form-field">
                <label>Age</label>
                <Field
                  name="age"
                  component="input"
                  type="number"
                  placeholder="How old are you?"
                />
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
              <div className="submit-button">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
};

export default App;
