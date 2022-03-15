import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import './Login.css'
import logo from '../../Assets/E.png'

const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
})

export function Login(props) {
  const [error, setError] = useState(null)

  const apiUrlLogin = 'https://testproject-api-v2.strv.com/auth/native'
  const accessTokenLogin =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMTIzIn0sImlhdCI6MTQ4MTE5NzA3OSwiZXhwIjoxNDgxMjAwNjc5LCJpc3MiOiJjb20uc3Rydi50ZXN0cHJvamVjdC1hcGkuZGV2ZWxvcG1lbnQifQ.EafLs80aHAFTpg_jsYQ1MBISttBhzgpGaTYbgIr4i7M'

  const authAxios = axios.create({
    baseURL: apiUrlLogin,
    headers: {
      Authorization: `Bearer ${accessTokenLogin}`,
    },
  })

  const onSubmit = async (values) => {
    setError(null)

    const response = await authAxios.post(values).catch((err) => {
      if (err && err.response) setError(err.response.data.message)
    })
    console.log(values)
    if (response) {
      alert('Welcome back. Authenticating...')
      props.history.push('/home')
    }
  }

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  })

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
                  Sign Into Your Account.
                </h3>
                <h6 className="text-left py-2">
                  Please Enter Your Details Below.
                </h6>

                <form onSubmit={formik.handleSubmit}>
                  <div>{error ? error : ''}</div>

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

export default Login
