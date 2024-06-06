import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Create = () => {
  const navigate = useNavigate();

  const [createData, setCreateData] = useState({
    id: "",
    name: "",
    isbn: "",
    published_date: "",
    authorname: "",
    dob: "",
    biography: "",
  });

  const validationSchema = Yup.object().shape({
    id: Yup.string().required("Id is required"),
    name: Yup.string().required("Book Name is required"),
    isbn: Yup.string().required("ISBN is required"),
    published_date: Yup.string().required("Published Date is required"),
    authorname: Yup.string().required("Author's name is required"),
    dob: Yup.string().required("Author's DOB is required"),
    biography: Yup.string().required("Author's biography is required"),
  });
  

  const handleSubmit = async (values) => {
    await axios
      .post("https://6661ded563e6a0189febeaba.mockapi.io/api/books")
      .then((res) => console.log(res.date))
      .catch((error) => console.log(error));

      navigate("/books");
  };

  const formik = useFormik({
    initialValues: { createData },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="container mt-5 mb-5">
      <div className="row mb-5">
        <div className="col-lg-8 offset-lg-2">
          <form onSubmit={formik.handleSubmit}>
            <div className="row mt-5">

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="id"
                    value={formik.values.id}
                    onChange={formik.handleChange}
                    placeholder="Give an ID the book"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder="Book's Name"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="isbn"
                    value={formik.values.isbn}
                    onChange={formik.handleChange}
                    placeholder="ISBN Number"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="published_date"
                    value={formik.values.published_date}
                    onChange={formik.handleChange}
                    placeholder="Date of Book published"
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
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
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="authordob"
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                    placeholder="Month DD, YYYY"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-4 col-sm-6">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="authorbio"
                    value={formik.values.biography}
                    onChange={formik.handleChange}
                    placeholder="Biography of Author"
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <button className="btn btn-primary" type="submit">
                <h4 className="text-center">Create</h4>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
