import React, { Component, Fragment } from 'react';
import * as Joi from 'joi-browser';

class Signup extends Component {
    state = {
        signupForm: {
            name: '',
            email: '',
            password: ''
        }
    }
    errorMessage = '';

    handleChangeSignUp = (e) => {
        const fieldName = e.target.name;
        let mySignupForm = { ...this.state.signupForm };
        mySignupForm[fieldName] = e.target.value;
        this.setState({ signupForm: mySignupForm });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const signSchema = {
            name: Joi.string().required().min(2).max(70).error(new Error('* Name is required')),
            email: Joi.string().required().email().error(new Error('*A valid email is required')),
            password: Joi.string().required().min(6).max(20).error(new Error('*A valid password is required'))
        }

        const { error, value } = Joi.validate(this.state.signupForm, signSchema);

        if (error) {
            //this.setState({ errorMessage: error.details[0].message });
            this.setState({ errorMessage: error.message });
        } else {
            this.setState({ errorMessage: 'All right' });
        }
    }

    render() {

        let { name, email, password } = this.state.signupForm;
        let { errorMessage } = this.state;

        return (
            <Fragment>
                <div className="row">
                    <div className="col-12 mt-5">
                        <h1>Sign Up for new account</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={(e) => this.handleSubmit(e)} action="" method="POST" noValidate="noValidate" autoComplete="off">
                            <div className="form-group">
                                <label htmlFor="name">Name: <span className="text-danger">*</span> </label>
                                <input className="form-control" value={name} onChange={(e) => this.handleChangeSignUp(e)} type="text" name="name"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email: <span className="text-danger">*</span> </label>
                                <input className="form-control" value={email} onChange={(e) => this.handleChangeSignUp(e)} type="email" name="email"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password: <span className="text-danger">*</span> </label>
                                <input className="form-control" value={password} onChange={(e) => this.handleChangeSignUp(e)} type="password" name="password"></input>
                            </div>
                            <input className="btn btn-primary" type="submit" value="Sign Up" name="submit" />
                            {errorMessage && <span className="text-danger">{errorMessage}</span>}
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Signup;