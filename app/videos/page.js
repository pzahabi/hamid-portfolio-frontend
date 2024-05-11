"use client";
import MusicVideosList from "@/components/products/MusicVideos";
import { useContext } from "react";
import { Store } from "@/context/Store";
import PersianMusicVideosList from "@/components/products/PersianMusicVideos";

export default function MusicVideos() {
  const { state, dispatch } = useContext(Store);
  const { isPersian } = state;
  return (
    <>
      {isPersian ? <PersianMusicVideosList/> : <MusicVideosList />}
    </>
  );
}
