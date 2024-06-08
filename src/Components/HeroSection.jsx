import React from "react";
import Book from "../assets/book.jpg";

const HeroSection = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-7 ptop">
              <div className="text-center text-md-start">
                <h1 className="display-md-2 display-4 fw-normal">
                  Explore Boundless Worlds: Welcome to Our{" "}
                  <span className="vw font-cursive">RISE</span>
                </h1>
                <p className="lead">
                  The only thing that you absolutely have to know, is the
                  location of the library.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-5 mb-3">
              <img src={Book} alt="E-Library" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
