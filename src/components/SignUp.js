import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect, useSelector } from "react-redux"

// ACTIONS
import { register } from "../actions/signUpAction";

function SignUpForm({ touched, errors, status, isSubmitting, values }) {
    console.log("This is our status", status);
    
    const [users, setUsers] = useState({});

    useEffect(() => {
      status && setUsers(status);
    }, [status]);



    return (
        <div className="SignUp-form">
        <Form>
            <label>
            <Field type="name" name="name" placeholder="UserName" />
            {touched.name && errors.name && (
            <p className="errors">{errors.name}</p>
            )}
            </label>

            <label>
        <Field type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
            )}
        </label>
        <label>
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
            )}
        </label>

        
        <button type= "submit" disabled={isSubmitting}>SignUp!</button>
        </Form>

        {users.name && (
        <ul key={users.id}>
        <li>Name: {users.name}</li>
        <li>Email: {users.email}</li>
        <li>Password: {users.password}</li>
        </ul>
    )}


        </div>
        
        

    );
    }
    
    const FormikWelcomeForm = withFormik({
    mapPropsToValues({ email, password, name  }) {
        return {
            name: name || "",
        email: email || "",
        password: password || "",
        
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup
            .string()
            .required("UserName is required"),
        email: Yup
            .string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup
            .string()
            .min(6, "Password must be 6 characters or longer")
            .required("Password is required"),
    



        }),
        handleSubmit(values, { props }) {
            console.log("submitting", values, props);
            props.register(values, props.history);
          }
    })
    (SignUpForm);
    
    export default connect(null, { register })(FormikWelcomeForm);