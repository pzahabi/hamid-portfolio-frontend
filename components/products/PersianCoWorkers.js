"use client";
import React from "react";
import axios from "axios";
import Loading from "../loading/Loading";
import PersianCoWorkerCard from "./productCards/PersianCoWorkerCard";

export default function PersianCoWorkersList() {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchProducts = React.useCallback(async () => {
    setIsLoading(true);
    const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;
    const APIurl = `${baseApiUrl}/api/coworkers`;
    await axios
      .get(APIurl)
      .then((result) => setProducts(result.data))

      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  React.useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <>
      <div dir="rtl" className="container font">
        <div className="product-page-container">
          <div className="product-page-title">
            <h1>همکاران</h1>
          </div>
          <div className="product-page-content">
            {isLoading ? (
              <Loading />
            ) : (
              products.map((item, index) => (
                <PersianCoWorkerCard key={item._id} item={item}/>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
