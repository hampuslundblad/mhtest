import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./contactForm.css";

const ContactForm = (props) => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    msg: "",
  };

  return (
    <div className="contactForm">
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
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
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="form-control">
              <label htmlFor="name">Namn</label>
              <Field type="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div className="form-control">
              <label htmlFor="phone">Telefonnummer</label>
              <Field type="phone" name="phone" />
              <ErrorMessage name="phone" component="div" />
            </div>
            <div className="form-control">
              <label htmlFor="msg">Meddelande</label>
              <Field type="msg" name="msg" />
              <ErrorMessage name="msg" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default ContactForm;
