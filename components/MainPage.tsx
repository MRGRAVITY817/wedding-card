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
          priority
        />
      </div>
      <div className="absolute top-0 h-1/2 w-full bg-gradient-to-b from-black/70 to-white/0" />
      <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black/30 to-white/0" />
      <div className="absolute top-16 w-full font-serif">
        <div className="text-center">
          <h2 className="text-2xl text-stone-200">저희 둘,</h2>
          <div className="flex justify-center items-center gap-[2px] text-stone-50">
            <p className="text-[48px] mt-2">결</p>
            <p className="text-[48px] mb-1">혼</p>
            <p className="text-[40px] mt-1">합</p>
            <p className="text-[40px] mb-2">니</p>
            <p className="text-[40px]">다</p>
            <p className="text-2xl">.</p>
          </div>
          <h2 className="font-serif text-stone-300 tracking-widest text-xs mt-2">
            ⋄ SAVE THE DATE ⋄
          </h2>
          <div className="flex justify-center items-center font-serif text-stone-300 text-lg mt-2">
            <p className="mr-1">1</p>
            <p>0</p>
            <div className="mx-2 rotate-[30deg]">
              <Image
                src="/flowers/two.png"
                alt="flower"
                width={24}
                height={50}
                objectFit="contain"
              />
            </div>
            <p>0</p>
            <p className="ml-1">1</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-16 flex justify-center items-center gap-3 w-full font-serif text-stone-100">
        <p>
          신랑, <span className="font-semibold text-xl">위성훈</span>
        </p>
        <p className="text-lg text-stone-100/60">&</p>
        <p>
          신부, <span className="font-semibold text-xl">조은비</span>
        </p>
      </div>
      {/* <div className="absolute top-4 right-4 text-2xl flex gap-2">
        <button onClick={() => setLang("kor")}>🇰🇷</button>
        <button onClick={() => setLang("eng")}>🇬🇧</button>
      </div> */}
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
