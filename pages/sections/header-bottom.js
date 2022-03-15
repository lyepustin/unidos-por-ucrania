/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import Select from "react-select";
import Flags from "country-flag-icons/react/3x2";

const options = [
  { value: "es", label: "Español", country: "ES" },
  { value: "en", label: "English", country: "GB" },
  { value: "ru", label: "Russian", country: "RU" }
];

const CustomOption = ({ innerRef, innerProps, data }) => {
  const Flag = Flags[data.country];
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className="min-w-150px px-2 py-1 flex items-center justify-start gap-2 hover:bg-gray-100 cursor-pointer"
    >
      <Flag className="h-[15px] w-[15px]" />
      {data.label}
    </div>
  );
};

const headerBottom = (props) => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = React.useState(options.find((opt) => opt.value == i18n.language));

  const handleSelectLanguage = (props) => {
    setSelectedOption(props);
    i18n.changeLanguage(props.value);
  };

  return (
    <div
      className="header-bottom"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 9999,
        backgroundColor: "white"
      }}
    >
      <div className="container">
        <div className="row justify-content-between justify-content-md-center justify-content-lg-between position-relative">
          <div className="col-md-auto col-12">
            <div className="navbar-header d-flex justify-content-between">
              <Link href="/" className="logo navbar-brand" passHref>
                <Image src="/images/logo.png" alt="logo" height="100px" width="100px" />
              </Link>
              <button
                className="navbar-toggle collapsed d-block d-md-none"
                data-bs-toggle="collapse"
                data-bs-target="#main-menu"
              >
                <i className="zmdi zmdi-menu menu-open"></i>
                <i className="zmdi zmdi-close menu-close"></i>
              </button>
            </div>
          </div>

          <div className="col-auto">
            <div className="main-menu collapse" id="main-menu">
              <nav>
                <ul>
                  <li className="active">
                    <a className="relative top-[-5px]">
                      <Select
                        onChange={handleSelectLanguage}
                        options={options}
                        value={selectedOption}
                        components={{
                          Option: CustomOption
                        }}
                        styles={{
                          container: (base) => ({ ...base, width: 150 })
                        }}
                      />
                    </a>
                  </li>
                  {/* <li className="active">
                    <a href="#hero-area">{t("header_home")}</a>
                  </li> */}
                  <li>
                    <a href="#about-area">{t("header_about")}</a>
                  </li>
                  <li>
                    <a href="#service-area">{t("header_service")}</a>
                  </li>
                  {/* <li>
                    <a href="#event-area">event</a>
                  </li> */}
                  <li>
                    <a href="#gallery-area">{t("header_gallery")}</a>
                  </li>
                  {/* <li>
                    <a href="#blog-area">{t("header_about")}</a>
                  </li> */}
                  <li>
                    <a href="#contact-area">{t("header_contact us")}</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default headerBottom;
