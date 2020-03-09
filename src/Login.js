import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";


function LoginForm({ touched, errors, status, isSubmitting, values, }) {
    console.log("This is our status", status);
    
    const [users, setUsers] = useState({});


    useEffect(() => {
        status && setUsers(status);
    }, [status]);


    return (
        
        <div className="Login-form">
                
        <Form>
            <p className="clearFix">
            <label>
            <h3>Login</h3>
            <Field type="name" name="name" placeholder="UserName" />
            {touched.name && errors.name && (
            <p className="errors">{errors.name}</p>
            )}
            </label>
            </p>
            
            <p className ="clearFix">
        <label>
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
            )}
        </label>
        </p>
        <p class="clearfix">
        <button type= "submit" disabled={isSubmitting}>Login</button>
        </p>
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
        handleSubmit(values, { resetForm, setErrors, setSubmitting, }) {
                console.log("Submitting!")
                axios
                .post("https://reqres.in/api/users", values)
                .then(res => {
                    console.log(res)
                    resetForm();
                    
                    setSubmitting(false);
                    
                })
                .catch(err => {
                    console.log(err); 
                    setSubmitting(false);
                    setErrors();
                });
            
            },
    })
    (LoginForm);
    
    export default FormikWelcomeForm;