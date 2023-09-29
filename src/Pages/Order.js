import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";

function Order() {
  // Retrieve order items from localStorage
  const orderItems = JSON.parse(localStorage.getItem("order")) || [];

  return (
    <>
      <Header />
      <Container>
        <section className="py-5">
          <h2 className="pb-3">Your Orders</h2>
          <div className="my-3">
            {orderItems.length === 0 ? (
              <p className="text-center">You have not ordered any items yet.</p>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name of product</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.totalprice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
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
