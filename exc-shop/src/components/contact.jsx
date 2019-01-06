import React, { Component, Fragment } from 'react';

// STOPED part less 5 2 26 min
class Contact extends Component {
    state = {
        contactForm: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        errors: {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }

    handleContact = (e) => {
        console.log('dfg');
        e.preventDefault();
        let valid = true;
        const emailRegexp = /^(?!.*\.\.)[\w.\-#!$%&'*+\/=?^_`{}|~]{1,35}@[\w.\-]+\.[a-zA-Z]{2,15}$/;
        const phoneRegexp = /^0[2-9]\d{7,8}$/
        let { errors } = { ...this.state };
        errors = {
            name: '',
            email: '',
            phone: '',
            message: ''
        };
        let { name, email, phone } = this.state.contactForm;

        console.log(name);
        if (name.trim().length === 0) {
            errors.name = 'Name is required';
            valid = false;
        }
        else if (name.trim().length < 3) {
            errors.name = 'Name should be at least 3 charachters';
            valid = false;
        }

        if (!emailRegexp.test(email)) {
            errors.email = "A valid email requered";
            valid = false;
        }

        if (!phoneRegexp.test(phone)) {
            errors.email = "A valid phone number requered";
            valid = false;
        }

        console.log(errors);
        if (valid) {
            // send detail to the server...
        } else {
            this.setState({ errors });
        }
    }

    handleChangeContact = (e) => {
        const fieldName = e.target.name;
        let myContactForm = { ...this.state.contactForm };
        myContactForm[fieldName] = e.target.value;
        this.setState({ contactForm: myContactForm });
    }

    render() {

        const { name, email, phone, message } = this.state.contactForm;
        const { name: errorName, email: errorEmail, phone: errorPhone, message: ErrorMessage } = this.state.errors;

        return (
            <Fragment>
                <div className="row">
                    <div className="col-12 mt-5">
                        <h1>Contact our company</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsam fugit nobis veritatis. Natus rerum earum hic enim fugit consequatur.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" style={{ minHeight: '1200px' }}>
                        <form onSubmit={(e) => this.handleContact(e)} method='POST' noValidate="noValidate" autoComplete="off">
                            <div>
                                <label htmlFor="name"><span className='text-danger'>*</span> Name:</label>
                                <input value={name} onChange={(e) => this.handleChangeContact(e)} className="form-control" type="text" name="name" id="name" />
                                {errorName && <span className="text-danger">{errorName}</span>}
                            </div>
                            <div>
                                <label htmlFor="email"><span className='text-danger'>*</span> Email:</label>
                                <input value={email} onChange={(e) => this.handleChangeContact(e)} className="form-control" type="email" name="email" id="email" />
                                {errorEmail && <span className="text-danger">{errorEmail}</span>}
                            </div>
                            <div>
                                <label htmlFor="phone"><span className='text-danger'>*</span> Phone:</label>
                                <input value={phone} onChange={(e) => this.handleChangeContact(e)} className="form-control" type="phone" name="phone" id="phone" />
                                {errorPhone && <span className="text-danger">{errorPhone}</span>}
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label>
                                <textarea value={message} onChange={(e) => this.handleChangeContact(e)} className="form-control" type="phone" name="message" id="message" rows="10" />
                                {ErrorMessage && <span className="text-danger">{ErrorMessage}</span>}
                            </div>
                            <input className="btn btn-primary" name="submit" type="submit" value="Contact Me " />
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Contact;