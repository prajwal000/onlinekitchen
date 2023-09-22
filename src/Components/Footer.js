import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="py-5">
        <section className="container">
          <h5 className="text-white">Online Kitchen</h5>
          <div className="row">
            <div className="col-lg-5">
              <p className="text-white pt-4">
                Online Kitchen is not just a company; it's a platform where
                foodies, home cooks, and aspiring chefs come together to embark
                on a flavorful journey. Our website and mobile app offer a vast
                array of resources and services, providing everything from
                inspiring recipes and high-quality ingredients to kitchen tools
                and expert advice.
              </p>
            </div>
            <div className="col-lg-2">
              <ul className="pt-4">
                <li className="pb-2">
                  <Link to="/">Home</Link>
                </li>

                <li className="pb-2">
                  <Link to="/aboutus">About us</Link>
                </li>
                <li className="pb-2">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <ul className="pt-4">
                <li className="pb-2">
                  <Link to="/menu">Menu</Link>
                </li>
                <li className="pb-2">Order</li>
                <li className="pb-2">Cart</li>
              </ul>
            </div>
            <div className="col-lg-2">
              <ul className="pt-4">
                <li className="pb-2">Privacy & Policy</li>
                <li className="pb-2">Terms & Condition</li>
                <li className="pb-2">FAQ</li>
              </ul>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
