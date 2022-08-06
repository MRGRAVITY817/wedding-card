import Image from "next/image";

export const Banner = () => {
  return (
    <div className="relative h-40">
      <Image
        src="/banner.jpeg"
        alt="banner image"
        objectFit="cover"
        layout="fill"
        objectPosition="top"
      />
    </div>
  );
};