import Image from "next/image";

export const Gallery = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12 px-6 bg-banner-50">
      <p className="mb-2">🌼</p>
      <h1 className="text-3xl mb-6 text-stone-50">Gallery</h1>
      <div className="grid grid-cols-3 w-full gap-2">
        {photos.map((photo, i) => (
          <Image
            key={`gallery-${photo}`}
            src={`/gallery/${photo}`}
            alt={photo}
            objectFit="cover"
            width={120}
            height={150}
            className="rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

const photos = [
  "wedding_ring.jpeg",
  "bride_best_shot.jpeg",
  "window_floor.jpeg",
  "window_sofa.jpeg",
  "light_kiss_flower.jpeg",
  "light_sitting_flower.jpeg",
  "bw_curtain.jpeg",
  "bride_solo_flower.jpeg",
  "bride_chair.jpeg",
  "groom_chair.jpeg",
  "curtain_basic.jpeg",
  "curtain_smiling.jpeg",
  "teal_normal.jpeg",
  "teal_1.jpeg",
  "ivory_far.jpeg",
  "ivory_close.jpeg",
  "black_collage.jpeg",
  "dark_sitting.jpeg",
  "dark_group.jpeg",
  "white_collage.jpeg",
  "white_sitting_group.jpeg",
  "light_waist.jpeg",
  "dark_dress.jpeg",
  "nature_kissing_close.jpeg",
  "nature_kissing_far.jpeg",
  "nature_sitting_on_groom.jpeg",
  "nature_kiss.jpeg",
  "green_sitting.jpeg",
  "green_sitting_far.jpeg",
  "door.jpeg",
  "sepia_outdoor.jpeg",
  "night_outdoor.jpeg",
];
