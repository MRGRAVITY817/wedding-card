import Image from "next/image";
import { useState } from "react";

export const MainPage = () => {
  const [lang, setLang] = useState<"eng" | "kor">("kor");
  return (
    <div className="relative">
      <div className="relative h-screen">
        <Image
          src="/Main.webp"
          layout="fill"
          height={800}
          objectFit="cover"
          alt="환영합니다! Welcome!"
        />
      </div>
      <div className="absolute top-0 h-1/2 w-full bg-gradient-to-b from-black/70 to-white/0" />
      <div className="absolute top-24 w-full font-dalseo">
        <div className="text-center text-white">
          <h1 className="text-3xl font-semibold">
            {texts.hoon[lang]}
            <span className="text-xl mx-2">{texts.and[lang]}</span>
            {texts.eunbee[lang]}
          </h1>
          <div className="my-6">
            <p className="text-xl">
              {texts.p1[lang]}
              <br />
              {texts.p2[lang]}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4 text-2xl flex gap-2">
        <button onClick={() => setLang("kor")}>🇰🇷</button>
        <button onClick={() => setLang("eng")}>🇬🇧</button>
      </div>
    </div>
  );
};

const texts = {
  hoon: {
    eng: "SeongHoon",
    kor: "위성훈",
  },
  eunbee: {
    eng: "EunBee",
    kor: "조은비",
  },
  and: {
    eng: "and",
    kor: "그리고",
  },
  p1: {
    eng: "Sat 11am, October 1st, 2022",
    kor: "2022년 10월 1일 토요일 오전 11시",
  },
  p2: {
    eng: "Heeon Foret The Glass Garden",
    kor: "희온포레 더 글라스가든",
  },
};
