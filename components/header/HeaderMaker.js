"use client";
import { useContext } from "react";
import { Store } from "@/context/Store";
import PersianHeader from "./PersianHeader";
import Header from "./Header";

export default function HeaderMaker() {
  const { state, dispatch } = useContext(Store);
  const { isPersian } = state;
  return (
    <>
        {isPersian ? <PersianHeader/> : <Header/>}
    </>
  )
}
