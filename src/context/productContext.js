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

  return (
    <ProductContext.Provider value={{ cartHandler }}>
      {children}
    </ProductContext.Provider>
  );
}
