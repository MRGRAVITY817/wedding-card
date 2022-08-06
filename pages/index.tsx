import type { NextPage } from "next";
import { Banner } from "../components/Banner";
import { Calendar } from "../components/Calendar";
import { Gallery } from "../components/Gallery";
import { InvitationLetter } from "../components/InvitationLetter";
import { MainPage } from "../components/MainPage";

const Home: NextPage = () => {
  return (
    <div className="bg-stone-50 ">
      <MainPage />
      <InvitationLetter />
      <Banner />
      <Calendar />
      {/* <Contact /> */}
      <Gallery />
      {/* <Location />
      <Account />
      <GuestBook />
      <ShareLink /> */}
    </div>
  );
};

export default Home;
