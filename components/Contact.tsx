import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/solid";
import { useLanguage } from "../hooks/useLanguage";

const callPerson = (phoneNumber: string) => {
  if (typeof window !== "undefined") {
    window.open(`tel:${phoneNumber}`);
  }
};

export const Contact = () => {
  return (
    <div>
      <ContactBrideGroom />
      <ContactFamily />
    </div>
  );
};

const texts = {
  description1: {
    ko: "축하의 마음을 전화로",
    en: "Send you warm celebration",
  },
  description2: {
    ko: "전해보세요.",
    en: "via phone call.",
  },
  groom: {
    ko: "신랑",
    en: "Groom",
  },
  hoon: {
    ko: "위성훈",
    en: "SeongHoon Wee",
  },
  bride: {
    ko: "신부",
    en: "Bride",
  },
  eunbee: {
    ko: "조은비",
    en: "Eunbee Cho",
  },
  dongsub: {
    ko: "위동섭",
    en: "DongSub Wee",
  },
  bongkeum: {
    ko: "정봉금",
    en: "BongKeum Jeong",
  },
  jongho: {
    ko: "조종호",
    en: "JongHo Cho",
  },
  sunhee: {
    ko: "홍선희",
    en: "SunHee Hong",
  },
};

const ContactBrideGroom = () => {
  const { lang } = useLanguage();
  return (
    <div className="text-center py-12">
      <h2 className="font-serif text-stone-500 text-xs tracking-widest">
        ⋄ CONTACT ⋄
      </h2>
      <h3 className="mt-4 text-xl font-serif">
        {texts.description1[lang]}
        <br />
        {texts.description2[lang]}
      </h3>
      <div className="flex flex-row justify-center items-center mt-8 gap-6">
        <div>
          <div className="flex justify-center items-center">
            <p className="font-serif text-sm text-stone-500 -rotate-90">
              GROOM
            </p>
            <Image
              src={`/contact/contact_groom.webp`}
              alt="groom"
              height={120}
              width={120}
              className="rounded-full"
              objectFit="cover"
            />
          </div>
          <div
            className="mt-4 flex justify-end items-center mr-4"
            onClick={() => callPerson("01091216750")}
          >
            <p className="text-stone-500">
              신랑, <strong className="text-stone-900">위성훈</strong>
            </p>
            <PhoneIcon className="w-4 ml-1" />
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <Image
              src={`/contact/contact_bride.webp`}
              alt="bride"
              height={120}
              width={120}
              className="rounded-full"
              objectFit="cover"
            />
            <p className="font-serif text-sm text-stone-500 -rotate-90">
              BRIDE
            </p>
          </div>
          <div
            className="mt-4 flex justify-start items-center ml-4"
            onClick={() => callPerson("01063508550")}
          >
            <p className="text-stone-500">
              신부, <strong className="text-stone-900">조은비</strong>
            </p>
            <PhoneIcon className="w-4 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactFamily = () => {
  return (
    <>
      <div className="py-4 bg-yellow-400/20">
        <h3 className="text-center text-sm text-yellow-700 font-medium">
          혼주에게 연락하기
        </h3>
      </div>
      <div className="flex justify-around items-center py-12">
        <FamilyContactItem
          familyType="신랑"
          father="위동섭"
          mother="정봉금"
          fatherPhone={"01089637005"}
          motherPhone={"01023667680"}
        />
        <FamilyContactItem
          familyType="신부"
          father="조종호"
          mother="홍선희"
          fatherPhone={"01033308550"}
          motherPhone={"01032908550"}
        />
      </div>
    </>
  );
};

const FamilyContactItem: React.FC<{
  familyType: "신랑" | "신부";
  father: string;
  mother: string;
  fatherPhone: string;
  motherPhone: string;
}> = ({ familyType, father, mother, fatherPhone, motherPhone }) => {
  return (
    <div className="text-center">
      <h3 className="text-lg font-medium mb-4">{familyType} 측 혼주</h3>
      <div
        className="mt-4 flex justify-start items-center ml-4"
        onClick={() => callPerson(fatherPhone)}
      >
        <p className="text-stone-500">
          {familyType} 부{" "}
          <strong className="text-stone-900 ml-1">{father}</strong>
        </p>
        <PhoneIcon className="w-4 ml-1" />
      </div>
      <div
        className="mt-2 flex justify-start items-center ml-4"
        onClick={() => callPerson(motherPhone)}
      >
        <p className="text-stone-500">
          {familyType} 모{" "}
          <strong className="text-stone-900 ml-1">{mother}</strong>
        </p>
        <PhoneIcon className="w-4 ml-1" />
      </div>
    </div>
  );
};
