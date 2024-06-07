import axios from "axios";
import React, { useEffect, useState } from "react";

const Books = () => {
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
  return (
    <div className="container-fluid mt-3">
      <div className="text-center pt-5 pb-5">
        <h2>LIBRARY MANAGEMENT DASHBOARD</h2>
        <p>Here you can see all the available informations of selected books. </p>
        <p className="text">Scroll horizontally to see the table!</p>
      </div>
      <div className="table-responsive">
        <table
          className="table table-bordered border-dark box2"
          // style={{ overflow: "scroll" }}
          style={{ overflow: "scroll", width: "100%", height: "800px" }}
        >
          <thead>
            <tr className="text-center">
              <th scope="col">ID</th>
              <th scope="col">Book's Title</th>
              <th scope="col">Author</th>
              <th scope="col">Published Date</th>
              <th scope="col">ISBN Number</th>
              <th scope="col">Author's DOB</th>
              <th scope="col">Biography</th>
              <th scope="col" colSpan={2}>
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
      <div className="m-5">
        <button
          className="btn btn-primary  text-center"
          onClick={() => {
            navigate("/create");
          }}
        >
          <h4>Create User Data</h4>
        </button>
      </div>
    </div>
  );
};

export default Books;
