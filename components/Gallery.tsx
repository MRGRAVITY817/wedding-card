import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { GalleryOverlay } from "./GalleryOverlay";

export const Gallery = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  const [more, setMore] = useState<boolean>(false);
  const { lang } = useLanguage();
  return (
    <>
      <div className="flex flex-col justify-center items-center py-12 px-6 bg-banner-50/25">
        <h2 className="font-serif text-stone-400 text-xs tracking-widest">
          ⋄ GALLERY ⋄
        </h2>
        <div className="grid grid-cols-3 w-full gap-1 mt-12">
          {photos.slice(0, 9).map((photo, i) => (
            <Image
              key={`gallery-${photo}`}
              src={photo}
              alt={photo}
              objectFit="cover"
              width={120}
              height={120}
              onClick={() => {
                setOpen(true);
                setIndex(i);
              }}
              priority
            />
          ))}
          {more &&
            photos.slice(9).map((photo, i) => (
              <Image
                key={`gallery-${photo}`}
                src={photo}
                alt={photo}
                objectFit="cover"
                width={120}
                height={120}
                onClick={() => {
                  setOpen(true);
                  setIndex(i + 9);
                }}
                priority
              />
            ))}
        </div>
        <button
          className="font-serif font-semibold border border-stone-500 text-stone-500 w-full py-4 mt-4"
          onClick={() => setMore(!more)}
        >
          {more ? texts.fold[lang] : texts.expand[lang]}
        </button>
      </div>
      {open && <GalleryOverlay startIndex={index} setOpen={setOpen} />}
    </>
  );
};

const texts = {
  expand: {
    ko: "더보기",
    en: "Expand",
  },
  fold: {
    ko: "접기",
    en: "Fold",
  },
};

export const photos = [
  "/gallery/wedding_ring.webp",
  "/gallery/bride_best_shot.webp",
  "/gallery/window_floor.webp",
  "/gallery/window_sofa.webp",
  "/gallery/light_kiss_flower.webp",
  "/gallery/light_sitting_flower.webp",
  "/gallery/bride_solo_flower.webp",
  "/gallery/white_collage.webp",
  "/gallery/white_sitting_group.webp",
  "/gallery/bride_chair.webp",
  "/gallery/groom_chair.webp",
  "/gallery/curtain_basic.webp",
  "/gallery/curtain_smiling.webp",
  "/gallery/teal_normal.webp",
  "/gallery/teal_1.webp",
  "/gallery/ivory_far.webp",
  "/gallery/ivory_close.webp",
  "/gallery/black_collage.webp",
  "/gallery/dark_sitting.webp",
  "/gallery/dark_group.webp",
  "/gallery/dark_dress.webp",
  "/gallery/nature_kissing_close.webp",
  "/gallery/nature_kissing_far.webp",
  "/gallery/nature_sitting_on_groom.webp",
  "/gallery/nature_kiss.webp",
  "/gallery/green_sitting.webp",
  "/gallery/green_sitting_far.webp",
  "/gallery/door.webp",
  "/gallery/sepia_outdoor.webp",
  "/gallery/night_outdoor.webp",
];
