import { MusicNoteIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { Calendar } from "../components/Calendar";
import { Contact } from "../components/Contact";
import { ForYourHeart } from "../components/ForYourHeart";
import { Gallery } from "../components/Gallery";
import { InvitationLetter } from "../components/InvitationLetter";
import { MainPage } from "../components/MainPage";

const Home: NextPage = () => {
  const [music] = useState<HTMLAudioElement | null>(
    typeof Audio !== "undefined" ? new Audio("/bgmusic.mp3") : null
  );
  const [playing, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    setPlaying(true);
  }, []);

  useEffect(() => {
    if (music && music instanceof HTMLAudioElement) {
      playing ? music.play() : music.pause();
    }
  }, [playing, music]);

  const toggleMusic = () => {
    setPlaying(!playing);
  };

  return (
    <div>
      <Head>
        <title>위비웨딩</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <div className="bg-stone-50 ">
        <button
          className={`fixed top-4 left-4 z-50 w-8 h-8 p-1 border-2 border-white shadow-xl rounded-full ${
            playing ? `opacity-100` : `opacity-40`
          }`}
        >
          <MusicNoteIcon
            className={`text-white transition-all`}
            onClick={toggleMusic}
          />
        </button>
        <MainPage />
        <InvitationLetter />
        <Banner />
        <Calendar />
        <Gallery />
        <Contact />
        <ForYourHeart />
        {/* <Location />
      <Account />
      <GuestBook />
      <ShareLink /> */}
      </div>
    </div>
  );
};

export default Home;
