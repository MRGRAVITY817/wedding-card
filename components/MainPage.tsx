import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";

export const MainPage = () => {
  const { lang } = useLanguage();
  return (
    <div className="relative">
      <div className="relative h-screen">
        <Image
          src="/Main.webp"
          layout="fill"
          height={800}
          objectFit="cover"
          alt="환영합니다! Welcome!"
          priority
        />
      </div>
      <div className="absolute top-0 h-1/2 w-full bg-gradient-to-b from-black/70 to-white/0" />
      <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black/30 to-white/0" />
      <div className="absolute top-16 w-full font-serif">
        <div className="text-center">
          <h2 className="text-2xl text-stone-200">
            {lang === "ko" ? "저희 둘," : "We are getting"}
          </h2>
          <div className="flex justify-center items-center gap-[2px] text-stone-50">
            <p className="text-[48px] mt-2">{lang === "ko" ? "결" : "M"}</p>
            <p className="text-[48px] mb-1">{lang === "ko" ? "혼" : "A"}</p>
            <p className="text-[40px] mt-1">{lang === "ko" ? "합" : "R"}</p>
            {lang === "en" && <p className="text-[40px]">R</p>}
            <p className="text-[40px] mb-2">{lang === "ko" ? "니" : "I"}</p>
            {lang === "en" && <p className="text-[40px] mt-2 mr-[2px]">E</p>}
            <p className="text-[40px]">{lang === "ko" ? "다" : "D"}</p>
            <p className="text-2xl">.</p>
          </div>
          <h2 className="font-serif text-stone-300 tracking-widest text-xs mt-2">
            ⋄ SAVE THE DATE ⋄
          </h2>
          <div className="flex justify-center items-center font-serif text-stone-300 text-lg mt-2">
            <p className="mr-2">1</p>
            <p>0</p>
            <div className="mx-3 rotate-[30deg]">
              <Image
                src="/flowers/two.png"
                alt="flower"
                width={24}
                height={50}
                objectFit="contain"
                priority
              />
            </div>
            <p>0</p>
            <p className="ml-2">1</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-16 flex justify-center items-center gap-3 w-full font-serif text-stone-100">
        <p className="text-center">
          {texts.groom[lang]} {lang === "en" && <br />}
          <span className="font-semibold text-xl">{texts.hoon[lang]}</span>
        </p>
        <p className="text-lg text-stone-100/60">&</p>
        <p className="text-center">
          {texts.bride[lang]} {lang === "en" && <br />}
          <span className="font-semibold text-xl">{texts.eunbee[lang]}</span>
        </p>
      </div>
    </div>
  );
};

const texts = {
  groom: {
    ko: "신랑,",
    en: "Groom,",
  },
  bride: {
    ko: "신부,",
    en: "Bride,",
  },
  hoon: {
    ko: "위성훈",
    en: "SeongHoon",
  },
  eunbee: {
    ko: "조은비",
    en: "EunBee",
  },
};
