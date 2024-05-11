"use client";
import ReachOut from "@/components/reach/Reach";
import { useContext } from "react";
import { Store } from "@/context/Store";
import PersianReachOut from "@/components/reach/PersianReach";

export default function Reach() {
  const { state, dispatch } = useContext(Store);
  const { isPersian } = state;
  return (
    <>
      {isPersian ? <PersianReachOut/> : <ReachOut />}
    </>
  );
}
