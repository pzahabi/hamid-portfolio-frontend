"use client";
import { useContext } from "react";
import { Store } from "@/context/Store";
import Footer from "./Footer";
import PersianFooter from "./PersianFooter";

export default function FooterMaker() {
  const { state, dispatch } = useContext(Store);
  const { isPersian } = state;
  return (
    <>
      {isPersian ? <PersianFooter/> : <Footer />}
    </>
  );
}
