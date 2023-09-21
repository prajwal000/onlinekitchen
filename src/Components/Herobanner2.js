import React from "react";
import { Link } from "react-router-dom";

function Herobanner2() {
  return (
    <>
      <section className="container pb-3">
        <h3 className=" font  py-5">Our Products</h3>
        <div className="row">
          <div className="col-lg-6 zoom col-sm-12 py-3">
            <Link to="/chicken">
              <img
                src={require("../images/kurkurey.jpg")}
                width="620px"
                height="600px"
                className="zoom-img"
                alt=""
              />
            </Link>
            <div className="position-relative">
              <h4 className="position-absolute text-white kurkurey">
                Chicken Kurkurey
              </h4>
            </div>
          </div>
          <div className="col-lg-6 zoom col-sm-12 py-3">
            <Link to="/burgers">
              <img
                src={require("../images/Burger.png")}
                width="620px"
                height="600px"
                className="zoom-img"
                alt=""
              />
            </Link>
            <div className="position-relative">
              <h4 className="position-absolute text-white kurkurey">
                Chicken Burger
              </h4>
            </div>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-lg-4 zoom col-sm-12 mob-ban2">
            <Link to="/pizza">
              <img
                src={require("../images/bestdeal1.jpg")}
                width="407px"
                className="zoom-img pizza"
                alt=""
                height="200px"
              />
            </Link>
            <div className="position-relative">
              <h4 className="position-absolute kurkurey text-white">Pizza</h4>
            </div>
          </div>
          <div className="col-lg-4 zoom mob-ban2">
            <Link to="/matka">
              <img
                src={require("../images/Matka.png")}
                width="407px"
                className="zoom-img pizza"
                alt=""
                height="200px"
              />
            </Link>
            <div className="position-relative">
              <h4 className="position-absolute kurkurey text-white">Matka</h4>
            </div>
          </div>
          <div className="col-lg-4 zoom mob-ban2">
            <Link to="/indian">
              <img
                src={require("../images/indian.jpg")}
                width="407px"
                height="200px"
                className="zoom-img"
                alt=""
              />
            </Link>
            <div className="position-relative">
              <h4 className="position-absolute kurkurey text-white">Indian</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Herobanner2;
