import type { NextPage } from "next";
import { InvitationLetter } from "../components/InvitationLetter";
import { MainPage } from "../components/MainPage";

const Home: NextPage = () => {
  return (
    <div className="bg-stone-50 ">
      <MainPage />
      <InvitationLetter />
      {/* <Contact /> */}
      {/* <Calendar />
      <Gallery />
      <Location />
      <Account />
      <GuestBook />
      <ShareLink /> */}
    </div>
  );
};

export default Home;
