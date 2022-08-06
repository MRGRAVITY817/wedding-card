import Image from "next/image";
import { useState } from "react";
import { GalleryOverlay } from "./GalleryOverlay";

export const Gallery = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  const [more, setMore] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col justify-center items-center py-12 px-6 bg-banner-50/25">
        <p className="mb-2">🌼</p>
        <h1 className="text-3xl mb-6 text-stone-500">Gallery</h1>
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
              />
            ))}
        </div>
        <button
          className="border-2 border-stone-500 text-stone-500 font-medium w-full py-4 mt-4"
          onClick={() => setMore(!more)}
        >
          {more ? "접기" : "더보기"}
        </button>
      </div>
      {open && <GalleryOverlay startIndex={index} setOpen={setOpen} />}
    </>
  );
};

export const photos = [
  "/gallery/wedding_ring.jpeg",
  "/gallery/bride_best_shot.jpeg",
  "/gallery/window_floor.jpeg",
  "/gallery/window_sofa.jpeg",
  "/gallery/light_kiss_flower.jpeg",
  "/gallery/light_sitting_flower.jpeg",
  "/gallery/bride_solo_flower.jpeg",
  "/gallery/white_collage.jpeg",
  "/gallery/white_sitting_group.jpeg",
  "/gallery/bride_chair.jpeg",
  "/gallery/groom_chair.jpeg",
  "/gallery/curtain_basic.jpeg",
  "/gallery/curtain_smiling.jpeg",
  "/gallery/teal_normal.jpeg",
  "/gallery/teal_1.jpeg",
  "/gallery/ivory_far.jpeg",
  "/gallery/ivory_close.jpeg",
  "/gallery/black_collage.jpeg",
  "/gallery/dark_sitting.jpeg",
  "/gallery/dark_group.jpeg",
  "/gallery/dark_dress.jpeg",
  "/gallery/nature_kissing_close.jpeg",
  "/gallery/nature_kissing_far.jpeg",
  "/gallery/nature_sitting_on_groom.jpeg",
  "/gallery/nature_kiss.jpeg",
  "/gallery/green_sitting.jpeg",
  "/gallery/green_sitting_far.jpeg",
  "/gallery/door.jpeg",
  "/gallery/sepia_outdoor.jpeg",
  "/gallery/night_outdoor.jpeg",
];
