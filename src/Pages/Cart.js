import React, { useEffect, useState } from "react";

function Cart() {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // Retrieve cart data from local storage
    const storedCartData = JSON.parse(localStorage.getItem("cart")) || [];

    setCartData(storedCartData);
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartData.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
