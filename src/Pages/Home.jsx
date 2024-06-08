import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const Home = ({ setId }) => {
  const navigate = useNavigate();

  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("https://6661ded563e6a0189febeaba.mockapi.io/api/books")
      .then((res) => setBookData(res.data))
      .catch((error) => console.log(error));
  };

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  const handleDel = async (id) => {
    await axios
      .delete(`https://6661ded563e6a0189febeaba.mockapi.io/api/books/${id}`)
      .then((res) => setDelData(res.data))
      .catch((error) => console.log("Error"));
    alert(
      "The book was deleted successfully! Refresh this page to see the updated Library"
    );
    navigate("/books");
  };

  return (
    <div>
      <div className="sb-nav-fixed">
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          <Link to="/#" className="navbar-brand ps-3">
            RISE
          </Link>

          <button
            className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
            id="sidebarToggle"
          >
            <i className="fas fa-bars"></i>
          </button>
        </nav>
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav
              className="sb-sidenav accordion sb-sidenav-dark"
              id="sidenavAccordion"
            >
              <div className="sb-sidenav-menu">
                <div className="nav">
                  <div className="sb-sidenav-menu-heading">ADMIN CONTROLS</div>
                  <Link to="/#" className="nav-link collapsed">
                    HOME
                  </Link>
                  <Link to="/bookonly" className="nav-link collapsed">
                    BOOKS
                  </Link>
                  <Link to="/authors" className="nav-link collapsed">
                    AUTHORS
                  </Link>
                  <Link to="/create" className="nav-link collapsed">
                    ADD BOOK
                  </Link>

                  <div className="sb-sidenav-menu-heading">PAGES</div>
                  <Link to="/books" className="nav-link">
                    VIEW LIBRARY
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid px-4">
                <h1 className="mt-4">Dashboard</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>

                <div className="row">

                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="card bg-primary text-white mb-4">
                      <div className="card-body">ADD BOOK</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <Link to='/create' className="small text-white stretched-link">
                          CLICK HERE
                        </Link>
                        <div className="small text-white">
                          <i className="fas fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="card bg-warning text-white mb-4">
                      <div className="card-body">BOOK DASHBOARD</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                      <Link to='/bookonly' className="small text-white stretched-link">
                          CLICK HERE
                        </Link>
                        <div className="small text-white">
                          <i className="fas fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="card bg-success text-white mb-4">
                      <div className="card-body">AUTHORS DASHBOARD</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                      <Link to='/authors' className="small text-white stretched-link">
                          CLICK HERE
                        </Link>
                        <div className="small text-white">
                          <i className="fas fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="card bg-dark text-white mb-4">
                      <div className="card-body">LIBRARY</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                      <Link to='/books' className="small text-white stretched-link">
                          CLICK HERE
                        </Link>
                        <div className="small text-white">
                          <i className="fas fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="card mb-4">
                    <div className="card-header">Area Chart Example</div>
                    <div className="card-body"></div>
                  </div>
                </div>
              </div> */}

                <div className="text-center pt-5 pb-5">
                  <h2>LIBRARY MANAGEMENT DASHBOARD</h2>
                  <p>
                    Here you can see all the available informations of selected
                    books.{" "}
                  </p>
                  <p className="text">Scroll horizontally to see the table!</p>
                </div>

                <div className="card mb-4">
                  <div className="card-header">Library Management</div>
                  <div className="card-body">
                    <div className="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
                      <div className="datatable-container">
                        <table
                          id="datatablesSimple"
                          className="datatable-table table table-bordered border-dark box2"
                          style={{
                            overflow: "scroll",
                            width: "100%",
                            height: "800px",
                          }}
                        >
                          <thead>
                            <tr className="text-center">
                              <th
                                scope="col"
                                className="text-center align-content-center"
                              >
                                ID
                              </th>
                              <th
                                scope="col"
                                className="text-center align-content-center"
                              >
                                Book's Title
                              </th>
                              <th
                                scope="col"
                                className="text-center align-content-center"
                              >
                                Author
                              </th>
                              <th
                                scope="col"
                                className="text-center align-content-center"
                              >
                                Published Date
                              </th>
                              <th
                                scope="col"
                                className="text-center align-content-center"
                              >
                                ISBN Number
                              </th>
                              <th
                                scope="col"
                                className="text-center align-content-center"
                              >
                                Author's DOB
                              </th>
                              <th
                                scope="col"
                                className="text-center align-content-center"
                              >
                                Biography
                              </th>
                              <th
                                scope="col"
                                colSpan={2}
                                className="text-center align-content-center"
                              >
                                Actions
                              </th>
                            </tr>
                          </thead>

                          <tbody className="table-group-divider">
                            {bookData.map((element, index) => {
                              return (
                                <tr key={index}>
                                  <th scope="row">{element.id}</th>
                                  <td>{element.name}</td>
                                  <td>{element.authorname}</td>
                                  <td>{element.published_date}</td>
                                  <td>{element.isbn}</td>
                                  <td>{element.dob}</td>
                                  <td>{element.biography}</td>
                                  <td>
                                    <button
                                      className="btn btn-primary"
                                      onClick={() => {
                                        handleEdit(element.id);
                                      }}
                                    >
                                      Edit
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      className="btn btn-danger"
                                      onClick={() => {
                                        handleDel(element.id);
                                      }}
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="pt-5 mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
