import {Component} from "react";
import moment from "moment";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import TodoService from "../../api/todo/TodoService";
import AuthenticationService from "./AuthenticationService";

class TodoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            todoName: '',
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD'),
            isCompleted: false
        }
    }

    componentDidMount() {
        if (this.state.id != null) {
            TodoService.getTodo(this.state.id).then(r => {
                this.setState({
                    todoName: r.data.todoName,
                    description: r.data.description,
                    targetDate: moment(r.data.targetDate).format('YYYY-MM-DD'),
                    isCompleted: r.data.isCompleted
                })
            })
        }

    }

    onSubmit = (values) => {
        let userName = AuthenticationService.getUser()
        let todo = {
            description: values.description,
            targetDate: values.targetDate,
            userName: userName,
            todoName: values.todoName,
            isCompleted: values.isCompleted !== undefined
        }
        if (this.state.id) {
            TodoService.updateTodo(this.state.id, todo).then(() => {
                    this.props.history.push(`/todos`)
                }
            )
        } else {
            TodoService.createTodo(userName, todo).then(() => {
                    this.props.history.push(`/todos`)
                }
            )
        }

    }

    validate = (values) => {
        let errors = {}
        if (!values.todoName) {
            errors.todoName = 'Enter a description!'
        } else if (values.todoName.length < 3) {
            errors.todoName = 'Enter at least 3 characters in description!'
        }
        if (!values.description) {
            errors.description = 'Enter a description!'
        } else if (values.description.length < 5) {
            errors.description = 'Enter at least 5 characters in description!'
        }
        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid-date in target date!'
        }
        return errors
    }

    cancelProcess = () => {
        return this.props.history.push(`/todos`)

    }

    render() {
        let description = this.state.description
        let targetDate = this.state.targetDate
        let todoName = this.state.todoName
        let isCompleted = this.isCompleted
        return (
            <div>
                <div className="container">
                    <h1>Todo</h1>
                    <Formik initialValues={{
                        todoName,
                        description,
                        targetDate,
                        isCompleted
                    }}
                            onSubmit={this.onSubmit}
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={this.validate}
                            enableReinitialize={true}>

                        {
                            () => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="todoName" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="todoName"/>
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                        <label>IsCompleted</label>
                                        <Field className="form-control" as="select" name="isCompleted">
                                            <option value="false">Not Completed</option>
                                            <option value="true">Completed</option>
                                        </Field>
                                        <br/>
                                        <br/>
                                        <button className="btn btn-success" type="submit">Save</button>
                                        <span>{' '}</span>
                                        <button className="btn btn-primary" onClick={() => this.cancelProcess()}
                                                type="submit">Cancel
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

export default TodoComponent