import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Modal } from "./Modal";

export const GuestBook = () => {
  return (
    <div className="bg-stone-200 py-12 px-8 text-center">
      <h2 className="font-serif text-stone-400">• GUESTBOOK •</h2>
      <h3 className="mt-4 text-xl text-stone-700">
        따뜻한 축하의 마음을
        <br />
        <strong className="font-medium text-stone-800">
          참석여부와 함께 전해주세요.
        </strong>
      </h3>
      <div className="border-t border-stone-700/50 border-dashed w-full my-8" />
      <GuestBookMarquee />
      <MessageForm />
    </div>
  );
};

const MessageForm = () => {
  const [personType, setPersonType] = useState<"bride" | "groom">("groom");
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setOpen(true);
          setMessage("");
        }}
        className="mt-8 w-full"
      >
        <div className="flex justify-center items-center gap-2 w-full">
          <button
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
            <p>신랑에게</p>
          </button>
          <button
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
            <p>신부에게</p>
          </button>
        </div>
        <div className="mt-2 w-full flex">
          <input
            type="text"
            placeholder="축하메시지를 입력해주세요. (최대 40자)"
            maxLength={40}
            className="h-12 focus:outline-none pl-3 placeholder:text-sm w-full placeholder:text-stone-700 text-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-stone-600 text-sm text-stone-200 h-12 w-12"
          >
            전송
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

const GuestBookMarquee = () => {
  {
    return (
      <Marquee gradient={false} speed={100}>
        <MarqueeItem personType="bride" message="결혼 축하해 은비!!" />
        <MarqueeItem
          personType="groom"
          message="Merry Wedding! For you and Eunbee also!"
        />
        <MarqueeItem
          personType="bride"
          message="축하해 언니이이!!! 나도 자주만나줭"
        />
        <MarqueeItem personType="groom" message="형님 결혼 축하드려요!!" />
        <MarqueeItem
          personType="bride"
          message="와 조은비가 결혼... 대박적..!"
        />
        <MarqueeItem
          personType="bride"
          message="너무 예쁘다 :) 행복하게 살아~"
        />
        <MarqueeItem
          personType="groom"
          message="동탄고 댄싱머신 위성훈 결혼축축"
        />
        <MarqueeItem personType="groom" message="멘토님 결혼축하드립니다!" />
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
