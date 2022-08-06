import Image from "next/image";

export const Contact = () => {
  return (
    <div>
      <Banner />
      <ContactBrideGroom />
      <ContactFamily />
    </div>
  );
};

const Banner = () => {
  return (
    <div className="w-full h-6">
      <Image src="" alt="banner image" layout="fill" objectFit="cover" />
    </div>
  );
};

const ContactBrideGroom = () => {
  return <div></div>;
};

const ContactFamily = () => {
  return <div></div>;
};
