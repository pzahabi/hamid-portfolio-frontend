"use client";
import CoWorkersList from "@/components/products/CoWorkers";
import { useContext } from "react";
import { Store } from "@/context/Store";
import PersianCoWorkersList from "@/components/products/PersianCoWorkers";

export default function Team() {
  const { state, dispatch } = useContext(Store);
  const { isPersian } = state;
  return (
    <>
      {isPersian ? <PersianCoWorkersList/> : <CoWorkersList />}
    </>
  );
}
