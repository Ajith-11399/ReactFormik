import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Authors = ({ setId }) => {
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
      <Navbar />
      <div className="container-fluid mt-3">
        <div className="text-center pt-5 pb-5">
          <h2>AUTHORS MANAGEMENT DASHBOARD</h2>
          <p>
            Here you can see all the available informations of Authors.{" "}
          </p>
          <p className="text">Scroll horizontally to see the table!</p>
        </div>

        <div className="card mb-4">
          <div className="card-header">Authors Information</div>
          <div className="card-body">
            <div className="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
              <div className="datatable-container">
                <table
                  id="datatablesSimple"
                  className="datatable-table table table-bordered border-dark box2"
                  style={{ overflow: "scroll", width: "100%", height: "800px" }}
                >
                  <thead>
                    <tr className="text-center">
                      <th scope="col" className="text-center">ID</th>
                      <th scope="col" className="text-center">Author</th>
                      {/* <th scope="col">Published Date</th>
                      <th scope="col">ISBN Number</th> */}
                      <th scope="col" className="text-center">Author's DOB</th>
                      <th scope="col" className="text-center">Biography</th>
                      <th scope="col" className="text-center">Books</th>
                      <th scope="col" colSpan={2} className="text-center">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="table-group-divider">
                    {bookData.map((element, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{element.id}</th>
                          <td>{element.authorname}</td>
                          {/* <td>{element.published_date}</td>
                          <td>{element.isbn}</td> */}
                          <td>{element.dob}</td>
                          <td>{element.biography}</td>
                          <td>{element.name}</td>
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

        <div className="m-5">
          <button
            className="btn btn-primary text-center"
            onClick={() => {
              navigate("/create");
            }}
          >
            <h4 className="m-0">Add Book</h4>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Authors;
