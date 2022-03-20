import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeaderBottom from "pages/sections/header-bottom";
import Details from "pages/sections/details";

export default function Home() {
  return (
    <div>
      {/* <HeaderTop /> */}
      <HeaderBottom />
      <div className="wrapper fix">
        <Details />
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale))
  }
});
