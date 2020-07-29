import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./contactForm.css";

const ContactForm = (props) => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    text: "",
  };
  function validate(values) {
    //values.name values.email values.phone
    // errors.name errors.email errors.phone
    // errors.name = "This field is required"
    let errors = {};

    if (!values.name) {
      errors.name = "Obligatoriskt";
    }
    if (!values.email) {
      errors.email = "Obligatorsikt";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = " Ogiltig Epost";
    }
    if (!values.phone) {
      errors.phone = "Obligatoriskt";
    }
    return errors;
  }

  return (
    <div className="contactForm">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-control">
              <div className="label">
                <label htmlFor="email">E-post</label>
              </div>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" className="error" component="div" />
            </div>
            <div className="form-control">
              <div className="label">
                <label htmlFor="name">Namn</label>
              </div>
              <Field type="name" name="name" />
              <ErrorMessage name="name" className="error" component="div" />
            </div>
            <div className="form-control">
              <div className="label">
                <label htmlFor="phone">Telefonnummer</label>
              </div>
              <Field type="phone" name="phone" />
              <ErrorMessage name="phone" className="error" component="div" />
            </div>
            <div className="form-control">
              <div className="label">
                <label htmlFor="text">Meddelande</label>
              </div>
              <Field type="text" name="text" component="textarea" />
              <ErrorMessage name="text" className="error" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Skicka
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default ContactForm;
