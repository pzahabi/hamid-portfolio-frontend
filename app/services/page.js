"use client";
import ServicesPage from "@/components/services/Services";
import { useContext } from "react";
import { Store } from "@/context/Store";
import PersianServicesPage from "@/components/services/PersianServices";

export default function Services() {
  const { state, dispatch } = useContext(Store);
  const { isPersian } = state;
  return (
    <>
      {isPersian ? <PersianServicesPage/> : <ServicesPage />}
    </>
  );
}
