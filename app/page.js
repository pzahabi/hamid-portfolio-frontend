"use client";
import { useContext } from "react";
import { Store } from "@/context/Store";
import HomePage from "@/components/homePage/HomePage";
import PersianHomePage from "@/components/homePage/PersianHomePage";


export default function Home() {
  const { state, dispatch } = useContext(Store);
  const { isPersian } = state;
  return (
    <>
      {isPersian ? <PersianHomePage/> : <HomePage/>}
    </>
  );
}
