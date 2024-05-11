"use client";
import CoWorkerInfo from "@/components/products/productInfo/CoWorkerInfo";
import { useContext } from "react";
import { Store } from "@/context/Store";
import PersianCoWorkerInfo from "@/components/products/productInfo/PersianCoWorkerInfo";

export default function CoWorker({ params }) {
  const { state, dispatch } = useContext(Store);
  const { isPersian } = state;
  return (
    <>
      {isPersian ? <PersianCoWorkerInfo params={params}/> : <CoWorkerInfo params={params} />}
    </>
  );
}
