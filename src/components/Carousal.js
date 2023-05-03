import React from "react";

export default function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ objectFit: "cover !important" }}
      >
        <div className="carousel-inner" id="carousal">
          <div
            className="carousel-caption d-none d-md-block"
            style={{ zIndex: "10" }}
          >
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
          <div className="carousel-item active" style={{ objectFit: "fill" }}>
            <img
              src="https://img.freepik.com/premium-photo/chicken-dhum-biriyani-using-jeera-rice-spices-arranged-earthen-ware_527904-513.jpg"
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "fit" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/indian-condiments-with-copy-space-view_23-2148723492.jpg?w=1480&t=st=1683151912~exp=1683152512~hmac=ca5cf8ff5125022738f6b7266a37ebe324cf21c64731662d7ee54920c599f326"
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "fit" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIH7Fv-9r0NQn2S8tLW7UHK0LTX6WnB6o8UIJfRtog_A&s"
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "fit" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
