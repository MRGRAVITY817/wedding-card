import Image from "next/image";

export const Banner = () => {
  return (
    <div className="relative h-40">
      <Image
        src="/gallery/window_floor.webp"
        alt="banner image"
        objectFit="cover"
        layout="fill"
        objectPosition="top"
      />
    </div>
  );
};
