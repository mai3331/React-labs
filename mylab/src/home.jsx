import React from "react";
import useFetch from "./useFetch";
import Products from "./products";
const Home = () => {
  const { data:fetchedProducts , pending } = useFetch("http://localhost:3000/products");

  return (
    <>
      {pending && (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
     {fetchedProducts && <Products data={fetchedProducts}  title="All Products"/>}
    </>
  );
};
export default Home;
