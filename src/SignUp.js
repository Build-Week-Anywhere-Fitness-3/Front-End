import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function SignUpForm({ touched, errors, status, isSubmitting, values }) {
    console.log("This is our status", status);
    
    const [users, setUsers] = useState({});

    useEffect(() => {
        status && setUsers(status);
    }, [status]);



    return (
        <div className="SignUp-form">
        <Form>
        <p className="clearFix">
            <label>
            <h3>Create account </h3>
            <Field type="name" name="name" placeholder="Create a UserName" />
            {touched.name && errors.name && (
            <p className="errors">{errors.name}</p>
            )}
            </label>
            </p>
            <br/>
        <p className="clearFix">
        <label>
        <Field type="password" name="password" placeholder="
        
        Create a Password" />
        {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
            )}
        </label>
        <label>
           Client or Instructor?: 
          <Field component="select" className="GymRole" name="Role">
            <option>Choose an Option</option>
            <option value="herbivore">Client</option>
            <option value="carnivore">Instructor</option>
           
          </Field>
        </label>


        </p>
        <br/>
        <p className="clearFix">
        <label  className= " checkbox-container">
        Terms of Service
        <Field type= "checkbox"  name= "Terms" id= "Terms"/>
        </label>
        </p>
        <br/>
        <p className="clearFix">
        <button type= "submit" disabled={isSubmitting}>SignUp</button>
        </p>

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
        handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
               console.log("Submitting!")
                axios
                .post(" https://reqres.in/api/users", values)
                .then(res => {
                  console.log(res); // Data was created successfully and logs to console
                    resetForm();
                    setSubmitting(false);
                })
                .catch(err => {
                  console.log(err); // There was an error creating the data and logs to console
                    setSubmitting(false);
                    setErrors();
                });
            
            }
    })
    (SignUpForm);
    
    export default FormikWelcomeForm;