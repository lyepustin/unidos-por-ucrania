import React from "react";
import { useTranslation, i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeaderTop from "pages/sections/header-top";
import HeaderBottom from "pages/sections/header-bottom";
import Hero from "pages/sections/hero";
import Service from "pages/sections/service";
import Galery from "pages/sections/galery";
import AboutArea from "pages/sections/about-area";
import ContactArea from "pages/sections/contact-area";
import Timeline from "pages/sections/timeline";
import Details from "pages/sections/details";

export default function Home() {
  return (
    <div>
      {/* <HeaderTop /> */}
      <HeaderBottom />
      <div className="wrapper fix">
        <Hero />
        <Service />
        {/* <Details /> */}
        <Timeline />
        <AboutArea />
        {/* <Galery /> */}
        {/* <ContactArea /> */}
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale))
  }
});
