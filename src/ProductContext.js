import React, {useState, createContext} from "react";

export const ProductContext = createContext();

export default function ProductContextData (props){

    const [products, setProducts] = useState([
        {
            id: 1,
            product_name: "ACME Anvils",
            cost: 9.99
        },
        {
            id: 2,
            product_name: "ACME Hammers",
            cost: 19.99
        },
        {
            id: 3,
            product_name: "ACME Screwdrivers",
            cost: 29.99
        }
      ])
  
    const addProduct = (newProductName, cost) => {
        let id = Math.floor(Math.random() * 1000000);

        const productsWithNewAdded = [...products, {
            id: id,
            product_name: newProductName,
            cost: cost
          }]
        setProducts(productsWithNewAdded);
    }

    function getProductByID(productParams){
        const foundProduct = products.filter((p)=> p.id === parseInt(productParams));
        return foundProduct;
    }

    const context = {
        products: products,
        addProduct: addProduct,
        getProductByID: getProductByID
    }

    return (
        <ProductContext.Provider value={context}>
            {props.children}
        </ProductContext.Provider>
    )
}




  





