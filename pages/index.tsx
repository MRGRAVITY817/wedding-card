import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Calendar } from "../components/Calendar";
import { Contact } from "../components/Contact";
import { Gallery } from "../components/Gallery";
import { InvitationLetter } from "../components/InvitationLetter";
import { MainPage } from "../components/MainPage";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>위비웨딩</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <div className="bg-stone-50 ">
        <MainPage />
        <InvitationLetter />
        <Banner />
        <Calendar />
        <Gallery />
        <Contact />
        {/* <Location />
      <Account />
      <GuestBook />
      <ShareLink /> */}
      </div>
    </div>
  );
};

export default Home;
