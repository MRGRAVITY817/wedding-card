import Image from "next/image";
import { useLanguage } from "../hooks/useLanguage";

export const ThanksTo = () => {
  const { lang } = useLanguage();
  return (
    <div className="bg-stone-800 py-16 px-8 text-center">
      <h2 className="font-serif text-stone-400 text-xs tracking-widest">
        ⋄ THANKS TO ⋄
      </h2>
      <h3 className="mt-4 text-xl text-stone-200 font-serif">
        {texts.thanksTo[lang]}
      </h3>
      {/* <div className="border-t border-stone-200/50 border-dashed w-full my-10" /> */}
      <div className="my-4 rotate-[60deg]">
        <Image
          src="/flowers/two.png"
          alt="flower"
          width={50}
          height={50}
          objectFit="contain"
        />
      </div>
      <div className="text-stone-200">
        <p className="text-lg leading-7 font-serif">
          {texts.p1[lang]}
          <br />
          {texts.p2[lang]} <br />
          {texts.p3[lang]}
        </p>
      </div>
    </div>
  );
};

const texts = {
  thanksTo: {
    ko: "감사의 마음을 전합니다.",
    en: "We send our thanks to",
  },
  p1: {
    ko: "언제나 곁을 따뜻하게 지켜주신",
    en: "Our parents, ",
  },
  p2: {
    ko: "양가 부모님과 사랑으로 응원해주신",
    en: "who always care about us.",
  },
  p3: {
    ko: "모든 분들께 감사드립니다.",
    en: "And everyone who supports us.",
  },
};
