import Image from "next/image";
import { useState } from "react";

const texts = {
  hoon: {
    eng: "SeongHoon",
    kor: "위성훈",
  },
  eunbee: {
    eng: "Eunbee",
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

export const MainPage = () => {
  const [lang, setLang] = useState<"eng" | "kor">("eng");
  return (
    <div className="relative bg-stone-50">
      <div className="relative h-screen">
        <Image
          src="/Main.jpeg"
          layout="fill"
          height={800}
          objectFit="cover"
          alt="환영합니다! Welcome!"
        />
      </div>
      <div className="absolute top-24 w-full">
        <div className="text-center">
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
