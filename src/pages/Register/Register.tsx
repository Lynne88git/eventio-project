import React, { Component, SyntheticEvent } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import './Register.css'
import logo from '../../Assets/E.png'
import Wrapper from '../Wrapper'
// const PASSWORD_REGEX = /^(?=.*[a-z]).{6,}$/

// const validationSchema = yup.object({
//   firstName: yup
//     .string()
//     .min(1, 'Please enter your first name')
//     .required('First Name is required'),
//   lastName: yup.string().required('Last Name is required'),
//   email: yup
//     .string()
//     .email('Please enter a valid Email address')
//     .required('Email is required'),
//   password: yup
//     .string()
//     .matches(
//       PASSWORD_REGEX,
//       'Please enter a Password that matches the criteria'
//     )
//     .required('Please enter a Password'),
//   repeatPassword: yup
//     .string()
//     .when('password', {
//       is: (val: any) => (val && val.length > 0 ? true : false),
//       then: yup
//         .string()
//         .oneOf([yup.ref('password')], 'Password does not match'),
//     })
//     .required('Please confirm your Password'),
// })

export default class Register extends Component {
  firstname?: string
  lastname?: string
  email?: string
  password?: string
  repeatPassword?: string

  state = {
    redirect: false,
  }

  onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    const formData = await axios.post('https://localhost:8080/api/register', {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      repeatPassword: this.repeatPassword,
    })
    this.setState({ redirect: true })
    console.log(formData)
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={'/login'} />
    }

    return (
      <Wrapper>
        <div className="container px-4 py-5 mx-auto">
          <div className="card card0">
            <div className="d-flex flex-lg-row flex-column-reverse">
              <div className="card card1">
                <div className="row justify-content-center my-auto">
                  <img src={logo} className="App-logo" alt="logo" />
                  <div className="col-md-8 col-10 my-5">
                    <div className="row justify-content-center px-3 mb-3"></div>
                    <h3 className="mb-5 text-center heading">
                      Get started absolutely free.
                    </h3>
                    <h6 className="text-left py-2">
                      Please Enter Your Details Below.
                    </h6>

                    <form className="" onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="firstname"
                          placeholder="First Name"
                          onChange={(e) => (this.firstname = e.target.value)}
                        />
                        <div className="error"></div>
                      </div>

                      <div className="form-group">
                        <input
                          className="form-control eventio-field main-gray "
                          name="lastName"
                          placeholder="Last Name"
                          onChange={(e) => (this.lastname = e.target.value)}
                        />
                        <div className="error"></div>
                      </div>

                      <div className="form-group">
                        <input
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          onChange={(e) => (this.email = e.target.value)}
                        />
                        <div className="error"></div>
                      </div>

                      <div className="form-group">
                        <input
                          className="form-control"
                          name="password"
                          type="password"
                          placeholder="Password"
                          onChange={(e) => (this.password = e.target.value)}
                        />
                        <div className="error"></div>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control eventio-field main-gray "
                          name="repeatPassword"
                          type="repeatPassword"
                          placeholder="Repeat Password"
                          onChange={(e) =>
                            (this.repeatPassword = e.target.value)
                          }
                        />
                        <div className="error"></div>
                      </div>

                      <div className="row justify-content-center my-3 px-3">
                        <button className="btn-block btn-main" type="submit">
                          Sign Up
                        </button>
                      </div>
                      <div className="row justify-content-center my-2">
                        <small className="text-muted">Forgot Password?</small>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="bottom text-center mb-5">
                  <p className="sm-text mx-auto mb-3">
                    Already have an account?
                    <Link to="/login" className="btn btn-white mx-3">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
              <div className="card card2">
                <div className="mb-auto mx-md-5 px-md-5 mt-5 right">
                  <h2 className="text-white mt-5 mb-3">Eventio</h2>
                  <small className="text-white">
                    We make it easy to share your events and calendars using our
                    amazing add-to-calendar buttons, beautiful embeddable
                    widgets, RSVP, and subscriber tools.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}
