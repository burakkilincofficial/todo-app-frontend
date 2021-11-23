import {Component} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import UserService from "../../api/todo/UserService";
import moment from "moment";
import AuthenticationService from "./AuthenticationService";

const token = ""

class RegisterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: undefined,
            userName: "bk",
            password: "",
            confirmPassword: "",
            name: '',
            surname: '',
            email: '',
            birthDate: moment(new Date()).format('YYYY-MM-DD'),
            gender: 'Male',
        }
    }

    onSubmit = (values) => {
        let todo = {
            userName: values.userName,
            password: values.password,
            name: values.name,
            surname: values.surname,
            email: values.email,
            age: this.calAge(values.birthDate),
            birthDate: values.birthDate
        }
        UserService.createUser(todo).then(() => {
                this.props.history.push(`/`)
            }
        )

    }

    allEqual = (input) => {
        return input.split('').every(char => char === input[0]);
    }
    calAge = (birthDate) => new Date(Date.now() - new Date(birthDate).getTime()).getFullYear() - 1970;


    validate = (values) => {
        const errors = {};
        const passwordRegex = /(?=.*[0-9])/;

        if (['admin', 'null', 'god'].includes(values.userName)) {
            errors.userName = 'Nice try User Name!';
        }
        if (!values.userName) {
            errors.userName = 'Enter a User Name!'
        } else if (values.userName.length < 2) {
            errors.userName = 'Enter at least 2 characters in User Name!'
        }
        if (!values.name) {
            errors.name = 'Enter a valid Name!'
        } else if (values.name.length < 3) {
            errors.name = 'Enter at least 3 characters in Name!'
        }
        if (!values.surname) {
            errors.surname = 'Enter a Surname!'
        } else if (values.surname.length < 3) {
            errors.surname = 'Enter at least 2 characters in Surname!'
        }
        if (!values.email) {
            errors.email = 'Email required!';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid Email Address!';
        }
        if (!moment(values.birthDate).isValid()) {
            errors.birthDate = 'Enter a valid-date in Birth date!'
        }
        if (this.allEqual(values.password)) {
            errors.password = "All characters must not be same in Password!";
        }
        if (!values.password) {
            errors.password = "Password Required!";
        } else if (values.password.length < 8) {
            errors.password = "Password must be 8 characters long!";
        } else if (!passwordRegex.test(values.password)) {
            errors.password = "Invalid password. Must contain one number!";
        }
        if (values.password && values.confirmPassword) {
            if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Password not matched!";
            }
        }
        if (this.calAge(values.birthDate) < 5) {
            errors.birthDate = "You must be over 5 years old, sorry!"
        }

        return errors;
    };

    cancelProcess = () => {
        return this.props.history.push(`/`)

    }

    render() {
        let userName = this.state.userName
        let password = this.state.password
        let confirmPassword = this.state.confirmPassword
        let name = this.state.name
        let surname = this.state.surname
        let email = this.state.email
        let age = this.state.age
        let birthDate = this.state.birthDate
        let gender = this.state.gender
        return (
            <div>
                <div className="container">
                    <h1>Register Todo Account</h1>
                    <Formik initialValues={{
                        userName,
                        password,
                        confirmPassword,
                        name,
                        surname,
                        email,
                        age,
                        birthDate,
                        gender
                    }}
                            onSubmit={this.onSubmit}
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={this.validate}
                            enableReinitialize={true}>

                        {
                            () => (
                                <Form>
                                    <ErrorMessage name="userName" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="password" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="confirmPassword" component="div"
                                                  className="alert alert-warning"/>
                                    <ErrorMessage name="name" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="surname" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="email" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="gender" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="birthDate" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>User Name</label>
                                        <Field className="form-control" type="text" name="userName"/>
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name"/>
                                        <label>Surname</label>
                                        <Field className="form-control" type="text" name="surname"/>
                                        <label>Email</label>
                                        <Field className="form-control" type="email" name="email"/>
                                        <label>Gender</label>
                                        <Field className="form-control" as="select" name="gender">
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </Field>
                                        <label>Birth Date</label>
                                        <Field className="form-control" type="date" name="birthDate"/>
                                        <label>Password</label>
                                        <Field className="form-control" type="password" name="password"/>
                                        <label>Confirm Password</label>
                                        <Field className="form-control" type="password" name="confirmPassword"/>
                                        <br/>
                                        <br/>
                                        <button className="btn btn-success" type="submit">Save</button>
                                        <span>{' '}</span>
                                        <button className="btn btn-primary" onClick={() => this.cancelProcess()}
                                                type="button">Cancel
                                        </button>
                                    </fieldset>

                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default RegisterComponent