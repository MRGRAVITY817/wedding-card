import Script from "next/script";
import { useState } from "react";
import { LinkIcon } from "@heroicons/react/outline";

// Kakao
const API_KEY = process.env.NEXT_PUBLIC_KAKAO_APIKEY + "";

export const KakaoMessageScript = () => {
  const [kakao, setKakao] = useState<any>(null);

  const sendMessage = () => {
    if (kakao) {
      kakao.Share.sendCustom({
        templateId: 80998,
        templateArgs: {
          title: "This is the title area.",
          description: "This is the description area.",
        },
      });
    }
  };

  return (
    <>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={() => {
          const kakao = (window as any).Kakao;
          if (kakao) {
            kakao.init(API_KEY);
            setKakao(kakao);
          }
        }}
        onError={(e) => console.error(`Cannot connect to KakaoPay: ${e}`)}
      />
      <button
        className={`fixed top-16 left-4 z-50 w-8 h-8 p-1 border-2 border-white shadow-xl rounded-full`}
        onClick={sendMessage}
      >
        <LinkIcon className={`text-white transition-all`} />
      </button>
    </>
  );
};
