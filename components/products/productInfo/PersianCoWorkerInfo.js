"use client";
import React from "react";
import axios from "axios";
import Loading from "@/components/loading/Loading";

export default function PersianCoWorkerInfo({ params }) {
  const [product, setProduct] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;

  const fetchProducts = React.useCallback(async () => {
    setIsLoading(true);
    const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;
    const APIurl = `${baseApiUrl}/api/coworkers/${params.id}`;
    await axios
      .get(APIurl)
      .then((result) => setProduct(result.data))

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
      {isLoading ? <Loading/> : <div dir="rtl" className="container font">
        <div className="coworker-page-container">
          <div className="coworker-page-title">
            <h1>{product.persianArtist}</h1>
            <span>{product.persianTitle}</span>
          </div>
          <div className="coworker-page-content">
            <img
              src={`${baseApiUrl}/api/${product.image.replace(/\\/g, "/")}`}
              alt={product.title}
              loading="lazy"
            />
            <p>{product.persianDescription}</p>
          </div>
        </div>
      </div>}
    </>
  );
}
