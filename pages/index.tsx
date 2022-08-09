import { GlobeAltIcon } from "@heroicons/react/outline";
import { MusicNoteIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { Calendar } from "../components/Calendar";
import { Contact } from "../components/Contact";
import { ForYourHeart } from "../components/ForYourHeart";
import { Gallery } from "../components/Gallery";
import { GuestBook } from "../components/GuestBook";
import { InvitationLetter } from "../components/InvitationLetter";
import { KakaoMessageScript } from "../components/KakaoMessage.Script";
import { Location } from "../components/Location";
import { MainPage } from "../components/MainPage";
import { NaverMapScript } from "../components/NaverMap.Script";
import { ThanksTo } from "../components/ThanksTo";
import { useLanguage } from "../hooks/useLanguage";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>위비웨딩</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      {/* <KakaoMessageScript /> */}
      <NaverMapScript />
      <div className="bg-stone-50 text-stone-800">
        <SwitchLanguage />
        <Jukebox />
        <MainPage />
        <InvitationLetter />
        <Banner />
        <Calendar />
        <Gallery />
        <Contact />
        <ForYourHeart />
        <Location />
        <GuestBook />
        <ThanksTo />
        {/* <ShareLink /> */}
      </div>
    </div>
  );
};

export default Home;

const SwitchLanguage = () => {
  const { lang, setLang } = useLanguage();
  return (
    <button
      onClick={() => setLang(lang === "ko" ? "en" : "ko")}
      className="fixed top-4 right-4 z-50 w-8 h-8 p-1 border-2 border-white shadow-xl rounded-full"
    >
      <GlobeAltIcon className="text-white" />
    </button>
  );
};

const Jukebox = () => {
  const [playing, setPlaying] = useState<boolean>(true);
  const [music] = useState<HTMLAudioElement | null>(
    typeof Audio !== "undefined" ? new Audio("/bgmusic.mp3") : null
  );

  useEffect(() => {
    if (music && music instanceof HTMLAudioElement) {
      playing ? music.play() : music.pause();
    }
  }, [playing, music]);

  const toggleMusic = () => {
    setPlaying(!playing);
  };
  return (
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
  );
};
