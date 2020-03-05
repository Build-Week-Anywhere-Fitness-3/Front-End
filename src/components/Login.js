import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect, useSelector } from "react-redux";

// LOGIN ACTIONS
import { login } from "../actions/loginAction";

function LoginForm({ touched, errors, status, isSubmitting, values }) {
    console.log("This is our status", status);
    
    const [users, setUsers] = useState({});

    useEffect(() => {
      status && setUsers(status);
    }, [status]);



    return (
        <div className="Login-form">
        <Form>
            <label>
            <Field type="name" name="name" placeholder="UserName" />
            {touched.name && errors.name && (
            <p className="errors">{errors.name}</p>
            )}
            </label>

        <label>
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
            )}
        </label>

        
        <button type= "submit" disabled={isSubmitting}>Login!</button>
        </Form>

        {users.name && (
        <ul key={users.id}>
        <li>Email: {users.email}</li>
        <li>Password: {users.password}</li>
        </ul>
    )}


        </div>
        
        

    );
    }
    
    const FormikWelcomeForm = withFormik({
    mapPropsToValues({ password, name  }) {
        return {
            name: name || "",
        password: password || "",
        
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup
            .string()
            .required("UserName is required"),
        password: Yup
            .string()
            .min(6, "Password must be 6 characters or longer")
            .required("Password is required"),
    



        }),
        
        handleSubmit(values, { props }) {
            console.log("submitting", values, props);
            props.login(values, props.history);
          }
    })
    (LoginForm);
    
    export default connect(
        null,
        { login }
      )(FormikWelcomeForm);