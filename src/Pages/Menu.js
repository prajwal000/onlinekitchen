import React from "react";
import Header from "../Components/Header";
import chickenData from "../Data/chicken";
import matka from "../Data/Matka";
import pizzaData from "../Data/Pizza";
import Momo from "../Components/Momo";
import indianData from "../Data/indian";
import Footer from "../Components/Footer";
import burger from "../Data/Burgerdata";

function Menu() {
  return (
    <>
      <Header />
      <section className="container">
        <h2 className="py-4 font">Chicken</h2>
        <div className="row">
          {chickenData.map((a) => {
            return (
              <div className="col-lg-3 my-2">
                <div className="card mob-card">
                  <img
                    src={a.image}
                    className="card-img-top p-4"
                    alt="..."
                    height="230px"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{a.name}</h6>
                    <p className="card-text">{a.price}</p>
                    <button href="#" className="primary-button">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container py-5">
        <h2 className=" font">Biryani</h2>
        <div className="row">
          {matka.map((a) => {
            return (
              <div className="col-lg-3 my-2">
                <div className="card mob-card">
                  <img
                    src={a.image}
                    className="card-img-top p-4"
                    alt="..."
                    height="230px"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{a.name}</h6>
                    <p className="card-text">{a.price}</p>
                    <button href="#" className="primary-button">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container py-5">
        <h2 className=" font">Pizza</h2>
        <div className="row">
          {pizzaData.map((a) => {
            return (
              <div className="col-lg-3 my-2">
                <div className="card mob-card">
                  <img
                    src={a.image}
                    className="card-img-top p-4"
                    alt="..."
                    height="230px"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{a.name}</h6>
                    <p className="card-text">{a.price}</p>
                    <button href="#" className="primary-button">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {
        <section className="container py-5">
          <h2 className="py-4 font">Burger</h2>
          <div className="row">
            {burger.map((a) => {
              return (
                <div className="col-lg-3 my-2">
                  <div className="card mob-card">
                    <img
                      src={a.image}
                      className="card-img-top p-4"
                      alt="..."
                      height="230px"
                    />
                    <div className="card-body">
                      <h6 className="card-title">{a.name}</h6>
                      <p className="card-text">{a.price}</p>
                      <button href="#" className="primary-button">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      }
      <section className="container">
        <h2 className="py-4 font">Indian</h2>
        <div className="row">
          {indianData.map((a) => {
            return (
              <div className="col-lg-3 my-2">
                <div className="card mob-card">
                  <img
                    src={a.image}
                    className="card-img-top p-4"
                    alt="..."
                    height="230px"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{a.name}</h6>
                    <p className="card-text">{a.price}</p>

                    <button id="btn" href="#" className="primary-button">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Momo />
      <Footer />
    </>
  );
}

export default Menu;
