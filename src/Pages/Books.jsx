import axios from "axios";
import React, { useEffect, useState } from "react";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

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
 
    <div>
    <Navbar />
      <HeroSection />
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-1 m-0 mt-5 mb-5 p-0 justify-content-center">
          {bookData.map((element, index) => {
            return (
              <div key={index}>
                <div className="col p-0">
                  <div className="card" style={{ height: "100%" }}>
                    <div className="rounded-4">
                      <img
                        src="https://i.pinimg.com/736x/98/4d/13/984d13e41facc036fdd11d7e410319f6.jpg"
                        className="card-img-top p-3"
                        alt="..."
                      />
                    </div>
                    <div className="card-body mb-3">
                      <p className="card-title" style={{ fontSize: "25px" }}>
                        <span className="ft-bold">Book Title:</span> &nbsp;
                        {element.name}
                      </p>
                      <p className="card-text">
                        <span className="ft-bold">Book ID:</span> &nbsp;
                        {element.id}
                      </p>
                      <p className="card-text">
                        <span className="ft-bold">Author's Name:</span> &nbsp;
                        <br />
                        {element.authorname}
                      </p>
                      <p className="card-text">
                        <span className="ft-bold">Author's DOB:</span> &nbsp;
                        <br />
                        {element.dob}
                      </p>
                      <p className="card-text">
                        <span className="ft-bold">Author's Biographhy:</span>{" "}
                        &nbsp;
                        <br />
                        {element.biography}
                      </p>
                      <p className="card-text">
                        <span className="ft-bold">Date of Book Published:</span>{" "}
                        &nbsp;
                        <br />
                        {element.published_date}
                      </p>
                      <p className="card-text">
                        <span className="ft-bold">ISBN Number:</span> &nbsp;
                        <br />
                        {element.isbn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Books;
