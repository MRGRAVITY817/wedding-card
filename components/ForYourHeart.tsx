import {
  ChevronDownIcon,
  ChevronUpIcon,
  ClipboardCopyIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "./Modal";
import ClipboardJS from "clipboard";
import { useRouter } from "next/router";

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
            bankName: "신한",
            bankAccount: "110-376-835457",
            personType: "신랑",
            personName: "위성훈",
            kakaoId: "eccwsh817",
          },
          {
            bankName: "국민",
            bankAccount: "670102-96-119344",
            personType: "신랑 부",
            personName: "위동섭",
            kakaoId: "01089637005",
          },
          {
            bankName: "국민",
            bankAccount: "203-24-0815-141",
            personType: "신랑 모",
            personName: "정봉금",
            kakaoId: "kungboo700",
          },
        ]}
      />
      <BankingDropdown
        brideOrGroom="신부"
        bankingInfo={[
          {
            bankName: "농협",
            bankAccount: "352-1865-4543-03",
            personType: "신부",
            personName: "조은비",
            kakaoId: "nicevil917",
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
  kakaoId: string;
}

const BankAccount: React.FC<BankAccountProps> = ({
  bankName,
  bankAccount,
  personType,
  personName,
  kakaoId,
}) => {
  return (
    <div>
      <p className="text-center mb-4 text-sm">
        <strong>{bankName}</strong> • {bankAccount} {personType}{" "}
        <strong>{personName}</strong>
      </p>
      <div className="flex justify-center items-center gap-2">
        {/* <KakaoPayButton kakaoId={kakaoId} /> */}
        <CopyAddressButton bankName={bankName} bankAccount={bankAccount} />
      </div>
    </div>
  );
};

const KakaoPayButton: React.FC<{ kakaoId: string }> = ({ kakaoId }) => {
  const router = useRouter();
  const sendViaKakaoPay = () => {
    router.push(`https://qr.kakaopay.com/${kakaoId}`);
  };
  return (
    <button
      onClick={sendViaKakaoPay}
      className="flex justify-center items-center bg-[#FFEB01] h-8 w-full rounded-xl"
    >
      <Image
        src="/kakaopay.webp"
        alt="kakaopay"
        width={40}
        height={12}
        objectFit="cover"
      />
      <p className="text-xs">카카오페이 송금</p>
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
        className="clip flex justify-center items-center bg-white h-8 w-2/3 rounded-xl"
        data-clipboard-text={`${bankName} ${bankAccount}`}
      >
        <ClipboardCopyIcon className="w-4" />
        <p className="text-xs ml-2">계좌번호 복사</p>
      </button>
      <Modal
        message="계좌번호가 복사되었습니다."
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};
