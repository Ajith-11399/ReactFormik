import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Create = () => {
  const navigate = useNavigate();
  const [createBook, setCreateBook] = useState({
    id: "",
    name: "",
    authorname: "",
    dob: "",
    biography: "",
    published_date: "",
    isbn: "",
  });

  const validationSchema = Yup.object().shape({
    id: Yup.string().required("ID is Required"),
    name: Yup.string().required("Book Title is Required"),
    authorname: Yup.string().required("Author's Name is Required"),
    dob: Yup.string().required("DOB of Author is Required"),
    biography: Yup.string().required("Biography of Author is Required"),
    published_date: Yup.string().required("Published Date is Required"),
    isbn: Yup.string().required("ISBN Number is Required"),
  });

  const formik = useFormik({
    initialValues: { createBook },
    validationSchema,
    onSubmit: async (values) => {
      await axios
        .post("https://6661ded563e6a0189febeaba.mockapi.io/api/books", values)
        .then((res) => setBookData(res.data))
        .catch((error) => console.log(error));
      alert("A new book was added to RISE Library!😄");
      navigate("/books");
    },
  });

  return (
    <div>
      <Navbar />
      <div className="container mt-5 mb-5">
        <div className="row mt-5 mb-5">
          <div className="col-lg-6 offset-lg-3 mt-5 mb-5">
            <form onSubmit={formik.handleSubmit}>
              <div className="row mt-5">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="id"
                      value={formik.values.id}
                      onChange={formik.handleChange}
                      placeholder="Book ID"
                    />
                  </div>
                  <p className="text-danger">{formik.errors.id}</p>
                </div>

                <div className="col-lg-9 col-md-9 col-sm-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      placeholder="Title of the Book"
                    />
                  </div>
                  <p className="text-danger">{formik.errors.name}</p>
                </div>

                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="authorname"
                      value={formik.values.authorname}
                      onChange={formik.handleChange}
                      placeholder="Name of the Author"
                    />
                  </div>
                  <p className="text-danger">{formik.errors.authorname}</p>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="dob"
                      value={formik.values.dob}
                      onChange={formik.handleChange}
                      placeholder="Author's DOB"
                    />
                  </div>
                  <p className="text-danger">{formik.errors.dob}</p>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="published_date"
                      value={formik.values.published_date}
                      onChange={formik.handleChange}
                      placeholder="Date of Book Published"
                    />
                  </div>
                  <p className="text-danger">{formik.errors.published_date}</p>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      name="isbn"
                      value={formik.values.isbn}
                      onChange={formik.handleChange}
                      placeholder="ISBN Number of Book"
                    />
                  </div>
                  <p className="text-danger">{formik.errors.isbn}</p>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="biography"
                      value={formik.values.biography}
                      onChange={formik.handleChange}
                      placeholder="Biography of the Author"
                    />
                  </div>
                  <p className="text-danger">{formik.errors.biography}</p>
                </div>

                {/* <div className="col-lg-3 col-md-3 col-sm-6 offset-lg-10 mt-3">
              <button className="btn btn-primary" type="submit">
                <h5 className="text-center m-0 p-0">Create</h5>
              </button>
              </div> */}
              </div>

              <div className="col-lg-3 col-md-3 col-sm-3 mb-3 mt-3 offset-lg-10">
                <button className="btn btn-primary" type="submit">
                  <h5 className="text-center m-0 p-0">Create</h5>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Create;
