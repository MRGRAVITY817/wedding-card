import Image from "next/image";
import { FormEvent, useState } from "react";
import Marquee from "react-fast-marquee";
import { Modal } from "./Modal";
import {
  addMessageRequest,
  deleteMessageRequest,
  readAllMessagesFetcher,
} from "../utils/database";
import useSWR, { Key, useSWRConfig } from "swr";
import { useLanguage } from "../hooks/useLanguage";
import { XIcon } from "@heroicons/react/outline";

interface Message {
  id?: string;
  bride_or_groom: "bride" | "groom";
  sender: string;
  message: string;
  password: string;
}

const messagesUrl: Key = `/api/guestbook`;

export const GuestBook = () => {
  const { lang } = useLanguage();
  const [open, setOpen] = useState<boolean>(false);
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

  const deleteMessage = async (message: Message) => {
    if (typeof messages !== "undefined" && typeof message.id === "string") {
      console.log(messages);
      mutate(
        messagesUrl,
        messages.filter(({ sender }) => sender === message.sender)
      );
      await deleteMessageRequest(messagesUrl, message.id);
      mutate(messagesUrl);
      setOpen(true);
    }
  };
  const [brideOrGroom, setBrideOrGroom] = useState<"bride" | "groom">("groom");

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
      <MessageForm
        setBrideOrGroom={setBrideOrGroom}
        sendMessage={sendMessage}
      />
      <GuestBookList messages={messages ?? []} deleteMessage={deleteMessage} />
      <Modal
        message={texts.deleteModalMessage[lang]}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

const MessageForm: React.FC<{
  sendMessage: (message: Message) => Promise<void>;
  setBrideOrGroom: (brideOrGroom: "bride" | "groom") => void;
}> = ({ sendMessage, setBrideOrGroom }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { lang } = useLanguage();
  const [message, setMessage] = useState<Message>({
    bride_or_groom: "bride",
    sender: "",
    password: "",
    message: "",
  });

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await sendMessage(message);
            setMessage({
              bride_or_groom: "bride",
              sender: "",
              password: "",
              message: "",
            });
            setOpen(true);
          } catch (error) {
            console.log(error);
          }
        }}
        className="mt-8 w-full"
      >
        <div className="flex justify-center items-center gap-2 w-full">
          <button
            type="button"
            onClick={() => {
              setMessage({ ...message, bride_or_groom: "groom" });
              setBrideOrGroom("groom");
            }}
            className={`h-12 flex items-center justify-center gap-2 w-full 
         bg-stone-50 border border-stone-800 ${
           message.bride_or_groom === "groom" ? `opacity-100` : `opacity-50`
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
            onClick={() => {
              setMessage({ ...message, bride_or_groom: "bride" });
              setBrideOrGroom("bride");
            }}
            className={`h-12 flex items-center justify-center gap-2 w-full 
         bg-stone-50 border border-stone-800 ${
           message.bride_or_groom === "bride" ? `opacity-100` : `opacity-50`
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
        <div className="mt-6 w-full flex flex-col gap-2">
          <input
            type="text"
            placeholder={texts.senderPlaceholder[lang]}
            maxLength={20}
            className="h-12 focus:outline-none pl-3 placeholder:text-sm w-full placeholder:text-stone-400 placeholder:font-light text-sm"
            value={message.sender}
            onChange={(e) => setMessage({ ...message, sender: e.target.value })}
          />
          <input
            type="text"
            placeholder={texts.passwordPlaceholder[lang]}
            maxLength={10}
            className="h-12 focus:outline-none pl-3 placeholder:text-sm w-full placeholder:text-stone-400 placeholder:font-light text-sm"
            value={message.password}
            onChange={(e) =>
              setMessage({ ...message, password: e.target.value })
            }
          />
          <input
            type="text"
            placeholder={texts.messagePlaceholder[lang]}
            maxLength={40}
            className="h-12 focus:outline-none pl-3 placeholder:text-sm w-full placeholder:text-stone-400 placeholder:font-light text-sm"
            value={message.message}
            onChange={(e) =>
              setMessage({ ...message, message: e.target.value })
            }
          />
          <button
            type="submit"
            className="bg-stone-600 flex justify-center items-center h-12 mt-4"
          >
            <p className="text-stone-200 font-semibold">{texts.send[lang]}</p>
          </button>
        </div>
      </form>
      <Modal
        message={texts.postModalMessage[lang]}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

const GuestBookList: React.FC<{
  messages: Message[];
  deleteMessage: (message: Message) => Promise<void>;
}> = ({ messages, deleteMessage }) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          deleteMessage={deleteMessage}
        />
      ))}
    </div>
  );
};

const MessageItem: React.FC<{
  message: Message;
  deleteMessage: (message: Message) => Promise<void>;
}> = ({ message, deleteMessage }) => {
  const [deleting, setDeleting] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const { lang } = useLanguage();
  const deleteMsg = async (e: FormEvent) => {
    e.preventDefault();
    if (password === message.password) {
      await deleteMessage(message);
    }
  };
  return (
    <div className="border border-stone-300 bg-stone-50 p-4">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-sm">{message.sender}</h4>
        <button onClick={() => setDeleting(!deleting)}>
          <XIcon width={12} height={12} />
        </button>
      </div>
      <div className="mt-2 text-left text-sm">
        <p>{message.message}</p>
      </div>
      {deleting && (
        <form onSubmit={deleteMsg} className="p-4">
          <input
            type="password"
            placeholder={texts.passwordPlaceholder[lang]}
            onChange={(e) => setPassword(e.target.value)}
            maxLength={10}
            value={password}
            className="border w-full h-8 placeholder:text-sm p-2 focus:outline-none"
          />
          <button className="text-white bg-stone-600 text-sm w-full h-8 mt-2">
            {texts.deleteMessage[lang]}
          </button>
        </form>
      )}
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
  senderPlaceholder: {
    ko: "성함을 적어주세요.",
    en: "Enter name. (ex) Sangjun Park",
  },
  passwordPlaceholder: {
    ko: "비밀번호를 적어주세요.",
    en: "Enter password.",
  },
  messagePlaceholder: {
    ko: "축하메시지를 입력해주세요. (최대 40자)",
    en: "Send the message. (max 40 chars)",
  },
  postModalMessage: {
    ko: "축하메시지가 전송되었습니다.",
    en: "Message sent successfully.",
  },
  deleteModalMessage: {
    ko: "축하메시지가 삭제되었습니다.",
    en: "Message deleted.",
  },
  send: {
    ko: "전송하기",
    en: "Send",
  },
  deleteMessage: {
    ko: "삭제하기",
    en: "Delete",
  },
};
