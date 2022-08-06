import {
  ChevronDownIcon,
  ChevronUpIcon,
  ClipboardCopyIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "./Modal";
import ClipboardJS from "clipboard";

export const ForYourHeart = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12 px-6 bg-banner-50/25">
      <h2 className="font-serif text-stone-500">• FOR YOUR HEART •</h2>
      <h3 className="mt-4 text-xl">마음 전하실 곳</h3>
      <div className="border-t border-dashed border-stone-300 w-3/4 my-8" />
      <p className="text-center font-light mb-8">
        코로나가 지속되는 중 진행하는 예식이
        <br />
        혹여 부담으로 전해지지는 않을까 마음이
        <br />
        무겁지만 부담은 가지지 말아주시고,
        <br />
        두 사람의 소중한 시작을 위해 전해주시는
        <br />
        진심을 감사히 오래도록 간직하겠습니다.
      </p>
      <BankingDropdown
        brideOrGroom="신랑"
        bankingInfo={[
          {
            bankName: "신한은행",
            bankAccount: "110-376-835457",
            personType: "신랑",
            personName: "위성훈",
          },
          {
            bankName: "신한은행",
            bankAccount: "110-376-835457",
            personType: "신랑",
            personName: "위성훈",
          },
          {
            bankName: "신한은행",
            bankAccount: "110-376-835457",
            personType: "신랑",
            personName: "위성훈",
          },
        ]}
      />
      <BankingDropdown
        brideOrGroom="신부"
        bankingInfo={[
          {
            bankName: "신한은행",
            bankAccount: "110-376-835457",
            personType: "신랑",
            personName: "위성훈",
          },
        ]}
      />
    </div>
  );
};

interface BankingDropdownProps {
  brideOrGroom: "신부" | "신랑";
  bankingInfo: BankAccountProps[];
}

const BankingDropdown: React.FC<BankingDropdownProps> = ({
  brideOrGroom,
  bankingInfo,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="w-full mt-4">
      <div
        className="flex justify-between items-center bg-stone-200 px-4 py-4"
        onClick={() => setOpen(!open)}
      >
        <p>{brideOrGroom}측</p>
        {open ? (
          <ChevronUpIcon className="w-4 h-4" />
        ) : (
          <ChevronDownIcon className="w-4 h-4" />
        )}
      </div>
      {open &&
        bankingInfo.map((info) => (
          <div key={info.bankAccount} className="p-4 bg-stone-300">
            <BankAccount {...info} />
          </div>
        ))}
    </div>
  );
};

interface BankAccountProps {
  bankName: string;
  bankAccount: string;
  personType: string;
  personName: string;
}

const BankAccount: React.FC<BankAccountProps> = ({
  bankName,
  bankAccount,
  personType,
  personName,
}) => {
  return (
    <div>
      <p className="text-center mb-4">
        <strong>{bankName}</strong> • {bankAccount} {personType}{" "}
        <strong>{personName}</strong>
      </p>
      <div className="flex justify-center items-center gap-2">
        <KakaoPayButton />
        <CopyAddressButton bankName={bankName} bankAccount={bankAccount} />
      </div>
    </div>
  );
};

const KakaoPayButton = () => {
  return (
    <button className="flex justify-center items-center bg-[#FEDF01] h-8 w-full rounded-xl">
      <Image
        src="/kakaopay.jpeg"
        alt="kakaopay"
        width={40}
        height={12}
        objectFit="cover"
      />
      <p className="text-sm">카카오페이 송금</p>
    </button>
  );
};

const CopyAddressButton: React.FC<{
  bankName: string;
  bankAccount: string;
}> = ({ bankName, bankAccount }) => {
  const _clipboard = new ClipboardJS(".clip");
  const [open, setOpen] = useState<boolean>(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${bankName} ${bankAccount}`);
    setOpen(true);
  };
  return (
    <>
      <button
        onClick={copyToClipboard}
        className="clip flex justify-center items-center bg-white h-8 w-full rounded-xl"
        data-clipboard-text={`${bankName} ${bankAccount}`}
      >
        <ClipboardCopyIcon className="w-4" />
        <p className="text-sm ml-2">계좌번호 복사</p>
      </button>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
};
