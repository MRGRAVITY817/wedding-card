import { MusicNoteIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { Calendar } from "../components/Calendar";
import { Contact } from "../components/Contact";
import { ForYourHeart } from "../components/ForYourHeart";
import { Gallery } from "../components/Gallery";
import { GuestBook } from "../components/GuestBook";
import { InvitationLetter } from "../components/InvitationLetter";
import { Location } from "../components/Location";
import { MainPage } from "../components/MainPage";
import { ThanksTo } from "../components/ThanksTo";

// Kakao
const API_KEY = process.env.NEXT_PUBLIC_KAKAO_APIKEY + "";
// Naver
const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
const MAP_URL =
  "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=" +
  CLIENT_ID +
  "&submodules=geocoder";

const Home: NextPage = () => {
  const [naver, setNaver] = useState<any>(null);

  let map: any = null;

  if (naver && naver.maps) {
    const mapOptions = {
      center: new naver.maps.LatLng(37.19267209999984, 126.96940950000001),
      zoom: 17,
    };
    map = new naver.maps.Map("location-map", mapOptions);
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.19267209999984, 126.96940950000001),
      map,
    });
  }

  return (
    <div>
      <Head>
        <title>위비웨딩</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <KakaoScript />
      <NaverMapScript setNaver={setNaver} />
      <div className="bg-stone-50 text-stone-800">
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

const Jukebox = () => {
  const [playing, setPlaying] = useState<boolean>(false);
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

const NaverMapScript: React.FC<{ setNaver: (naver: any) => void }> = ({
  setNaver,
}) => {
  return (
    <Script
      type="text/javascript"
      src={MAP_URL}
      onLoad={() => {
        const naver = (window as any).naver;
        setNaver(naver);
      }}
      onError={(e) => console.error("Whoops!")}
    />
  );
};

const KakaoScript = () => {
  return (
    <Script
      src="https://developers.kakao.com/sdk/js/kakao.js"
      onLoad={() => {
        const kakao = (window as any).Kakao;
        if (kakao) {
          kakao.init(API_KEY);
        }
      }}
      onError={(e) => console.error(`Cannot connect to KakaoPay: ${e}`)}
    />
  );
};
