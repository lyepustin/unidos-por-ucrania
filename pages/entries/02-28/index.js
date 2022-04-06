import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeaderBottom from "pages/sections/header-bottom";
import Entry from "./entry";

export default function Home() {
  return (
    <div>
      <HeaderBottom />
      <div className="wrapper fix">
        <Entry />
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale))
  }
});
