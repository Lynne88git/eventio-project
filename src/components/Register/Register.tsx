import React, { useState } from 'react'
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
})

export function Register(props: any) {
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const onSubmit = async (values) => {
    const { ...data } = values

    const response = await axios
      .post('https://testproject-api-v2.strv.com/users', data)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message)
        setSuccess(null)
      })
    if (response && response.data) {
      setError(null)
      setSuccess(response.data.message)
      formik.resetForm()
    }
  }

  const formik = useFormik({
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

  //console.log("Error: ", formik.errors);

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

                <form className="" onSubmit={formik.handleSubmit}>
                  <div>{error ? error : ''}</div>
                  <div>{success ? success : ''}</div>

                  <div className="form-group">
                    <label
                      htmlFor="firstname"
                      className="form-control-label text-muted"
                    >
                      First Name
                    </label>
                    <input
                      className="form-control"
                      name="firstname"
                      placeholder="First Name"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className="error">
                      {formik.touched.firstName && formik.errors.firstName
                        ? formik.errors.firstName
                        : ''}
                    </div>
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="lastname"
                      className="form-control-label text-muted"
                    >
                      Last Name
                    </label>
                    <input
                      className="form-control eventio-field main-gray "
                      name="lastName"
                      placeholder="Last Name"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className="error">
                      {formik.touched.lastName && formik.errors.lastName
                        ? formik.errors.lastName
                        : ''}
                    </div>
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="email"
                      className="form-control-label text-muted"
                    >
                      Email
                    </label>
                    <input
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className="error">
                      {formik.touched.email && formik.errors.email
                        ? formik.errors.email
                        : ''}
                    </div>
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="password"
                      className="form-control-label text-muted"
                    >
                      Password
                    </label>
                    <input
                      className="form-control"
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className="error">
                      {formik.touched.password && formik.errors.password
                        ? formik.errors.password
                        : ''}
                    </div>
                  </div>

                  <div className="row justify-content-center my-3 px-3">
                    <button
                      className="btn-block btn-main"
                      type="submit"
                      disabled={!formik.isValid}
                    >
                      Sign In
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
                Dont have an account?
                <button className="btn btn-white mx-3">Sign Up</button>
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

export default Register
