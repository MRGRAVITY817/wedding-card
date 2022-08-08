import {
  ClipboardCopyIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import ClipboardJS from "clipboard";
import { useState } from "react";
import { Modal } from "./Modal";

export const Location = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12">
      <h2 className="font-serif text-stone-500">• LOCATION •</h2>
      <h3 className="mt-4 text-xl">찾아오시는 길을 안내합니다.</h3>
      <Map />
      <LocationAddress />
      <Transportation />
    </div>
  );
};

const Map = () => {
  return <div id="location-map" className="w-full h-64 mt-8" />;
};

const LocationAddress = () => {
  if (typeof window !== "undefined") {
    const _clipboard = new ClipboardJS(".clip");
  }
  const [open, setOpen] = useState<boolean>(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`경기 화성시 정남면 보통내길 205-32`);
    setOpen(true);
  };
  return (
    <>
      <div className="mx-4 w-full flex flex-col gap-4 bg-white p-8">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <LocationMarkerIcon className="w-4 h-4 mr-1" />
            <p>경기 화성시 정남면 보통내길 205-32</p>
          </div>
          <div
            className="flex justify-end items-center text-stone-500"
            onClick={copyToClipboard}
          >
            <ClipboardCopyIcon className="w-4 h-4 mr" />
            <p>복사</p>
          </div>
        </div>
        <div className="border-t border-dashed border-stone-400 w-full" />
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <LocationMarkerIcon className="w-4 h-4 mr-1" />
            <p>식장 안내</p>
          </div>
          <div className="flex justify-end items-center text-stone-500">
            <p className="font-medium">희온포레 더 글라스 가든</p>
          </div>
        </div>
      </div>
      <Modal message="주소를 복사하였습니다." open={open} setOpen={setOpen} />
    </>
  );
};

const Transportation = () => {
  return (
    <div className="py-8 px-8">
      <h3 className="font-semibold text-lg">버스</h3>
      <ul className="text-sm flex flex-col gap-2">
        <li className="mt-2">
          1호선 수원역 환승센터 11번 환승
          <br />→ 보통리입구하차마을버스 (31-2)
        </li>
        <li>
          1호선 병점역 2번출구 환승
          <br />→ 보통리입구 하차 (마을버스 35-1, 50)
        </li>
        <li>
          1호선 병점역 2번출구 환승
          <br />→ 수원과학대학 하차 (마을버스 50)
        </li>
        <li>
          2,4호선 사당역 9번출구 앞 8155, 8156 승차
          <br />→ 봉담읍행정복지센터 하차
          <br />→ 마을버스50번환승→보통리입구 하차 후 도보 10분
        </li>
        <li>
          2,4호선 사당역 9번출구 앞 7790 승차
          <br />→ 수영오거리,방송통신대 입구 하차→마을버스 31-2환승
          <br />→ 보통리입구 하차 후 도보 10분
        </li>
      </ul>
      <h3 className="font-semibold text-lg mt-4">지하철</h3>
      <ul className="text-sm flex flex-col gap-2">
        <li className="mt-2">1호선 병점역 2번출구 셔틀버스 이용</li>
        <li>
          병점역 2번출구 주변에 예식고객 전용 셔틀버스 운영 (10:30~20:00)운영
        </li>
        <li>
          병점역 출발 → 10:30, 11:30, 12:30, 13:40, 14:30, 15:30, 16:30, 17:30,
          18:30, 19:30
        </li>
        <li>
          희온포레 출발 → 11:00, 12:00, 13:00, 14:00, 15:00, 16:00, 17:00,
          18:00, 19:00, 20:00
        </li>
      </ul>
    </div>
  );
};

const TransportationItem = () => {
  return <div></div>;
};
