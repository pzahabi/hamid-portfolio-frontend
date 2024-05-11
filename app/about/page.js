"use client";
import AboutMe from "@/components/about/AboutMe";
import { useContext } from "react";
import { Store } from "@/context/Store";
import PersianAboutMe from "@/components/about/PersianAboutMe";

export default function About() {
  const { state, dispatch } = useContext(Store);
  const { isPersian } = state;
  return <>{isPersian ? <PersianAboutMe /> : <AboutMe />}</>;
}
