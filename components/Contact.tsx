import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/solid";

export const Contact = () => {
  return (
    <div>
      <ContactBrideGroom />
      <ContactFamily />
    </div>
  );
};

const ContactBrideGroom = () => {
  return (
    <div className="text-center py-12">
      <h2 className="font-serif text-stone-500">• CONTACT •</h2>
      <h3 className="mt-4 text-xl">
        축하의 마음을 전화로
        <br />
        전해보세요.
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
          <div className="mt-4 flex justify-end items-center mr-4">
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
          <div className="mt-4 flex justify-start items-center ml-4">
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
        <FamilyContactItem familyType="신랑" father="위동섭" mother="정봉금" />
        <FamilyContactItem familyType="신부" father="조종호" mother="홍선희" />
      </div>
    </>
  );
};

const FamilyContactItem: React.FC<{
  familyType: "신랑" | "신부";
  father: string;
  mother: string;
}> = ({ familyType, father, mother }) => {
  return (
    <div className="text-center">
      <h3 className="text-lg font-medium mb-4">{familyType} 측 혼주</h3>
      <div className="mt-4 flex justify-start items-center ml-4">
        <p className="text-stone-500">
          {familyType} 부{" "}
          <strong className="text-stone-900 ml-1">{father}</strong>
        </p>
        <PhoneIcon className="w-4 ml-1" />
      </div>
      <div className="mt-2 flex justify-start items-center ml-4">
        <p className="text-stone-500">
          {familyType} 모{" "}
          <strong className="text-stone-900 ml-1">{mother}</strong>
        </p>
        <PhoneIcon className="w-4 ml-1" />
      </div>
    </div>
  );
};
