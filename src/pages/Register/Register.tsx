import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import './Register.css'
import logo from '../../Assets/E.png'

const PASSWORD_REGEX = /^(?=.*[a-z]).{6,}$/

const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(1, 'Please enter your first name')
    .required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .email('Please enter a valid Email address')
    .required('Email is required'),
  password: yup
    .string()
    .matches(
      PASSWORD_REGEX,
      'Please enter a Password that matches the criteria'
    )
    .required('Please enter a Password'),
  repeatPassword: yup
    .string()
    .when('password', {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('password')], 'Password does not match'),
    })
    .required('Please confirm your Password'),
})

export default function Register() {
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const onSubmit = async (values) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { repeatPassword, ...data } = values

    const response = await axios
      .post('https://localhost:8080/api/register', data)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message)
        setSuccess(null)
      })
    if (response && response.data) {
      setError(null)
      setSuccess(response.data)
      Formik.resetForm()
    }
  }

  const Formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  })

  //console.log("Error: ", Formik.errors);

  return (
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

                <form className="" onSubmit={Formik.handleSubmit}>
                  <div>{error ? error : ''}</div>
                  <div>{success ? success : ''}</div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      name="firstName"
                      placeholder="First Name"
                      value={Formik.values.firstName}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                    />
                    <div className="error">
                      {Formik.touched.firstName && Formik.errors.firstName
                        ? Formik.errors.firstName
                        : ''}
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control eventio-field main-gray "
                      name="lastName"
                      placeholder="Last Name"
                      value={Formik.values.lastName}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                    />
                    <div className="error">
                      {Formik.touched.lastName && Formik.errors.lastName
                        ? Formik.errors.lastName
                        : ''}
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      value={Formik.values.email}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                    />
                    <div className="error">
                      {Formik.touched.email && Formik.errors.email
                        ? Formik.errors.email
                        : ''}
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={Formik.values.password}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                    />
                    <div className="error">
                      {Formik.touched.password && Formik.errors.password
                        ? Formik.errors.password
                        : ''}
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control eventio-field main-gray "
                      name="repeatPassword"
                      type="repeatPassword"
                      placeholder="Repeat Password"
                      value={Formik.values.repeatPassword}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                    />
                    <div className="error">
                      {Formik.touched.repeatPassword &&
                      Formik.errors.repeatPassword
                        ? Formik.errors.repeatPassword
                        : ''}
                    </div>
                  </div>

                  <div className="row justify-content-center my-3 px-3">
                    <button
                      className="btn-block btn-main"
                      type="submit"
                      disabled={!Formik.isValid}
                    >
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
                  Log in
                </Link>
              </p>
            </div>
          </div>
          <div className="card card2">
            <div className="mb-auto mx-md-5 px-md-5 mt-5 right">
              <h2 className="text-white mt-5 mb-3">Eventio</h2>
              <small className="text-white">
                We make it easy to share your events and calendars using our
                amazing add-to-calendar buttons, beautiful embeddable widgets,
                RSVP, and subscriber tools.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
