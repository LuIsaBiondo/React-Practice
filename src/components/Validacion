import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Login from './components/Login';

function App() {
  return (
    <div>
      <Formik
        initialValues={{ Login.js }}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .min(1, "Your name is too short")
            .required("Please enter your full name"),
          password: Yup.string()
            .password("The password is incorrect")
            .required("Please enter your password"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const timeOut = setTimeout(() => {
            console.log(values);
            setSubmitting(false);

            clearTimeout(timeOut);
          }, 1000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          validating,
          valid,
        }) => {
        }}
      </Formik>
    </div>
  );
}

export default App;