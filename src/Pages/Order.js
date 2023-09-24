import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";

function Order() {
  const orderItems = JSON.parse(localStorage.getItem("order")) || [];

  return (
    <>
      <Header />
      <Container>
        <section className="py-5">
          <h2 className="pb-3">Your Orders</h2>
          <div className="my-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name of product</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              {!localStorage.getItem("order") ? (
                <p className="text-center">
                  {" "}
                  you have not ordered any item yet
                </p>
              ) : (
                <>
                  <tbody>
                    {orderItems.map((a, index) => (
                      <tr key={index}>
                        <td>{a.name}</td>
                        <td>{a.totalprice}</td>
                      </tr>
                    ))}
                  </tbody>
                </>
              )}
              <tbody>
                {orderItems.map((a, index) => (
                  <tr key={index}>
                    <td>{a.name}</td>
                    <td>{a.totalprice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <img
          src={require("../images/hero-image2.jpg")}
          alt=""
          width="100%"
          className="pt-5"
        />
      </Container>
      <Footer />
    </>
  );
}

export default Order;
