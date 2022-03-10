import React from "react";
import Navbar from "./Navbar";
import * as Yup from "yup";
import { useFormik } from "formik";
import { setUserCart } from "../redux/actions/cartAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCountItem } from "../redux/actions/itemCountAction";

const initialValues = {
  name: "",
  location: "",
  phone: "",
  email: "",
};

// const onSubmit = (values) => {
//   //   dispatch(setUserCart([]));
//   //   navigate('/');
// };

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required field"),
  location: Yup.string().required("Location is required field"),
  phone: Yup.string("Enter valid number")
    .required("Phone is required field")
    .min(10, "Wrong number"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required field"),
});

function Checkout() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

 

  const { values, touched, errors, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      onSubmit: (values) => {
        dispatch(setUserCart([]));
        navigate("/");
        dispatch(setCountItem(0))
      },
      validationSchema,
    });

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h3>Please fill the Checkout form below </h3>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter your name here"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.name && errors.name && (
            <div style={{ color: "red" }}>{errors.name}</div>
          )}

          <div className="form-group mt-3">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              placeholder="Enter your location here"
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.location && errors.location && (
            <div style={{ color: "red" }}>{errors.location}</div>
          )}

          <div className="form-group mt-3">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="Enter your phone number"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.phone && errors.phone && (
            <div style={{ color: "red" }}>{errors.phone}</div>
          )}

          <div className="form-group mt-3">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email here"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.email && errors.email && (
            <div style={{ color: "red" }}>{errors.email}</div>
          )}

          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Checkout;
