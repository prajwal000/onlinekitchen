import React, { createContext, useContext } from "react";

const ProductContext = createContext();

export function useProductContext() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  //   const [selectedProducts, setSelectedProducts] = useState([]);
  //while not using local storage we can use above selected products code in updated cart data
  //setselecteddata[...selectedproducts,productdata]

  const cartHandler = (product) => {
    const productData = {
      name: product.name,
      price: product.price,
      image: product.image,
    };
    const existingCartData = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCartData = [...existingCartData, productData];
    localStorage.setItem("cart", JSON.stringify(updatedCartData));
  };

  const order = (cartData, quantity) => {
    const updatedOrder = JSON.parse(localStorage.getItem("order")) || [];
    cartData.forEach((a) => {
      const name = a.name;
      const totalprice = a.price * quantity;
      const orderItem = { name, totalprice };
      updatedOrder.push(orderItem);
    });

    localStorage.setItem("order", JSON.stringify(updatedOrder));
  };

  return (
    <ProductContext.Provider value={{ cartHandler, order }}>
      {children}
    </ProductContext.Provider>
  );
}
