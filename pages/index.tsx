import type { NextPage } from "next";
import { Banner } from "../components/Banner";
import { Calendar } from "../components/Calendar";
import { InvitationLetter } from "../components/InvitationLetter";
import { MainPage } from "../components/MainPage";

const Home: NextPage = () => {
  return (
    <div className="bg-stone-50 ">
      <MainPage />
      <InvitationLetter />
      {/* <Contact /> */}
      <Banner />
      <Calendar />
      {/* <Gallery />
      <Location />
      <Account />
      <GuestBook />
      <ShareLink /> */}
    </div>
  );
};

export default Home;
