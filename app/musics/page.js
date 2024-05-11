"use client"
import TracksList from "@/components/products/Tracks";
import { useContext } from "react";
import { Store } from "@/context/Store";
import PersianTracksList from "@/components/products/PersianTracks";


export default function Tracks() {
    const { state, dispatch } = useContext(Store);
  const { isPersian } = state;
    return (
        <>
            {isPersian ? <PersianTracksList/> : <TracksList/>}
        </>
    )
}