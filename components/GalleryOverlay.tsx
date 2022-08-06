import Image from "next/image";
import { useState } from "react";
import { photos } from "./Gallery";

export const GalleryOverlay: React.FC<{
  startIndex: number;
  setOpen: (open: boolean) => void;
}> = ({ startIndex, setOpen }) => {
  const [index, setIndex] = useState<number>(startIndex);
  return (
    <>
      <div className="fixed bg-black/50 z-10 inset-0 w-screen h-screen flex justify-center items-center">
        <button
          className="text-white font-semibold fixed top-4 right-4 text-xl z-50"
          onClick={() => setOpen(false)}
        >
          닫기
        </button>
        <div className="fixed z-20 flex flex-row justify-center align-center">
          <button
            onClick={() => setIndex(index > 0 ? index - 1 : index)}
            className="text-white text-3xl mr-4 absolute left-0 h-[600px] w-12 z-30"
          />
          <Image
            src={`/gallery/${photos[index]}`}
            alt="wedding photo"
            width={390}
            height={600}
            objectFit="contain"
          />
          <button
            onClick={() =>
              setIndex(index < photos.length - 1 ? index + 1 : index)
            }
            className="text-white text-3xl ml-4 absolute right-0 h-[600px] w-12 z-30"
          />
        </div>
      </div>
    </>
  );
};
