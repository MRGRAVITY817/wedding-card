import Image from "next/image";
import { useLanguage } from "../hooks/useLanguage";

export const InvitationLetter = () => {
  const { lang } = useLanguage();
  return (
    <div className="text-center py-16 flex flex-col justify-center items-center font-serif">
      <div className="mb-4 rotate-[50deg]">
        <Image
          src="/flowers/zero_dark.png"
          alt="letter flower"
          height={50}
          width={30}
          className="opacity-70"
        />
      </div>
      <h2 className="mb-12 font-semibold tracking-widest">
        {texts.invitation[lang]}
      </h2>
      <p className="leading-6">
        {texts.p1[lang]}
        <br />
        {texts.p2[lang]}
        <br />
        {texts.p3[lang]}
        <br />
        {texts.p4[lang]}
        <br />
        {texts.p5[lang]}
        <br />
        {texts.p6[lang]}
        <br />
      </p>
      <div className="border-stone-500/50 border-r h-12 my-12" />
      <div className="text-stone-800">
        {lang === "ko" ? (
          <p className="text-lg">
            위동섭•정봉금 <span className="text-sm mr-2">의 장남</span>
            <span className="font-bold">성훈</span>
          </p>
        ) : (
          <div>
            <div className="flex justify-center items-center gap-2">
              <p className="font-bold text-lg">SeongHoon,</p>
              <p className="text-sm">son of</p>
              <div className="text-base ml-1">
                <p>DongSub Wee</p>
                <p>BongKeum Jeong</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 mt-4">
              <p className="font-bold text-lg">EunBee,</p>
              <p className="text-sm">daughter of</p>
              <div className="text-base ml-1">
                <p>JongHo Cho</p>
                <p>SunHee Hong</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const texts = {
  invitation: {
    ko: "초 대 합 니 다",
    en: "INVITATION",
  },
  p1: {
    ko: "살랑이는 바람결에",
    en: "It's a lovely season to fall in love",
  },
  p2: {
    ko: "사랑이 묻어나는 계절입니다.",
    en: "with the perfect autumn breeze.",
  },
  p3: {
    ko: "여기 곱고 예쁜 두 사람이 사랑을 맺어",
    en: "Here we have two loving people",
  },
  p4: {
    ko: "인생의 반려자가 되려 합니다.",
    en: "promised to be the partner of other's life.",
  },
  p5: {
    ko: "새 인생을 시작하는 이 자리에 오셔서",
    en: "We hope you to come",
  },
  p6: {
    ko: "축복해 주시면 감사하겠습니다.",
    en: "and celebrate our new start.",
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
