import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import { photos } from "./Gallery";

export const GalleryOverlay: React.FC<{
  startIndex: number;
  setOpen: (open: boolean) => void;
}> = ({ startIndex, setOpen }) => {
  const [index, setIndex] = useState<number>(startIndex);
  const [xPos, setXPos] = useState<number>(0);

  return (
    <>
      <div className="fixed bg-black/80 z-10 inset-0 w-screen h-screen flex justify-center items-center">
        <button
          className="text-white font-semibold fixed top-4 right-4 text-xl z-50"
          onClick={() => setOpen(false)}
        >
          닫기
        </button>
        <div className="fixed z-20 flex flex-row justify-center items-center">
          <ChevronLeftIcon
            onClick={() => setIndex(index > 0 ? index - 1 : index)}
            className="text-white text-3xl fixed left-0 h-12 w-12 z-30 cursor-pointer"
          />
          <Image
            src={photos[index]}
            alt="wedding photo"
            width={400}
            height={600}
            objectFit="contain"
            onTouchStart={(e) => setXPos(e.changedTouches[0].clientX)}
            onTouchEnd={(e) => {
              const endXPos = e.changedTouches[0].clientX;
              if (endXPos - xPos > 50 && index > 0) {
                setIndex(index - 1);
              }
              if (endXPos - xPos < 50 && index < photos.length - 1) {
                setIndex(index + 1);
              }
            }}
          />
          <ChevronRightIcon
            onClick={() =>
              setIndex(index < photos.length - 1 ? index + 1 : index)
            }
            className="text-white text-3xl fixed right-0 h-12 w-12 z-30 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};
