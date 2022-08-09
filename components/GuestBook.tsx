import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Modal } from "./Modal";
import { addMessageRequest, readAllMessagesFetcher } from "../utils/database";
import useSWR, { Key, useSWRConfig } from "swr";
import { useLanguage } from "../hooks/useLanguage";
import { PaperAirplaneIcon } from "@heroicons/react/outline";

interface Message {
  bride_or_groom: "bride" | "groom";
  sender: string;
  message: string;
}

export const GuestBook = () => {
  const { lang } = useLanguage();
  const messagesUrl: Key = `/api/guestbook`;
  const { data: messages, error: messageError } = useSWR<Message[]>(
    messagesUrl,
    readAllMessagesFetcher
  );
  const { mutate } = useSWRConfig();

  const sendMessage = async (message: Message) => {
    if (typeof messages !== "undefined") {
      mutate(messagesUrl, [...messages, message], false);
      await addMessageRequest(messagesUrl, message);
      mutate(messagesUrl);
    }
  };

  return (
    <div className="bg-stone-200 py-12 px-8 text-center">
      <h2 className="font-serif text-stone-400 text-xs tracking-widest">
        ⋄ GUESTBOOK ⋄
      </h2>
      <h3 className="font-serif mt-4 text-xl text-stone-700">
        {texts.description1[lang]}
        <br />
        <strong className="font-medium text-stone-800">
          {texts.description2[lang]}
        </strong>
      </h3>
      <div className="border-t border-stone-700/50 border-dashed w-full my-8" />
      <GuestBookMarquee messages={messages || []} />
      <MessageForm sendMessage={sendMessage} />
    </div>
  );
};

const MessageForm: React.FC<{ sendMessage: (message: Message) => void }> = ({
  sendMessage,
}) => {
  const [personType, setPersonType] = useState<"bride" | "groom">("groom");
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const { lang } = useLanguage();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage({
            bride_or_groom: personType,
            sender: "Friend",
            message,
          });
          setMessage("");
          setOpen(true);
        }}
        className="mt-8 w-full"
      >
        <div className="flex justify-center items-center gap-2 w-full">
          <button
            type="button"
            onClick={() => setPersonType("groom")}
            className={`h-12 flex items-center justify-center gap-2 w-full 
         bg-stone-50 border border-stone-800 ${
           personType === "groom" ? `opacity-100` : `opacity-50`
         }`}
          >
            <Image
              src={`/contact/contact_groom.webp`}
              alt="photo"
              width={30}
              height={30}
              className="rounded-full"
            />
            <p>{texts.toGroom[lang]}</p>
          </button>
          <button
            type="button"
            onClick={() => setPersonType("bride")}
            className={`h-12 flex items-center justify-center gap-2 w-full 
         bg-stone-50 border border-stone-800 ${
           personType === "bride" ? `opacity-100` : `opacity-50`
         }`}
          >
            <Image
              src={`/contact/contact_bride.webp`}
              alt="photo"
              width={30}
              height={30}
              className="rounded-full"
            />
            <p>{texts.toBride[lang]}</p>
          </button>
        </div>
        <div className="mt-2 w-full flex">
          <input
            type="text"
            placeholder={texts.placeholder[lang]}
            maxLength={40}
            className="h-12 focus:outline-none pl-3 placeholder:text-sm w-full placeholder:text-stone-400 placeholder:font-light text-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-stone-600 text-sm pr-2 pl-3 text-center"
          >
            <PaperAirplaneIcon
              width={20}
              height={20}
              className="text-stone-200 rotate-45"
            />
          </button>
        </div>
      </form>
      <Modal
        message="축하메시지가 전송되었습니다."
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

const GuestBookMarquee: React.FC<{ messages: Message[] }> = ({ messages }) => {
  {
    return (
      <Marquee gradient={false} speed={50}>
        {messages.map((message, i) => (
          <MarqueeItem
            key={`message-${i}`}
            personType={message.bride_or_groom}
            message={message.message}
          />
        ))}
      </Marquee>
    );
  }
};

const MarqueeItem: React.FC<{
  personType: "bride" | "groom";
  message: string;
}> = ({ personType, message }) => {
  return (
    <div className="flex justify-center items-center gap-4 mx-4">
      <Image
        src={
          personType === "bride"
            ? `/contact/contact_bride.webp`
            : `/contact/contact_groom.webp`
        }
        alt="photo"
        width={50}
        height={50}
        className="rounded-full"
      />
      <p>{message}</p>
    </div>
  );
};

const texts = {
  description1: {
    ko: "따뜻한 축하의 마음을",
    en: "Send your warm celebration",
  },
  description2: {
    ko: "방명록을 통해 전해주세요.",
    en: "via our guestbook.",
  },
  toGroom: {
    ko: "신랑에게",
    en: "To Groom",
  },
  toBride: {
    ko: "신부에게",
    en: "To Bride",
  },
  placeholder: {
    ko: "축하메시지를 입력해주세요. (최대 40자)",
    en: "Send the message. (max 40 chars)",
  },
};
