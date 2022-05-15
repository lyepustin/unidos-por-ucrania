import React from "react";
import { i18n, useTranslation } from "next-i18next";
import Image from "next/image";
import Select from "react-select";
import Flags from "country-flag-icons/react/3x2";
import Link from "next/link";
import { useRouter } from "next/router";

const options = [
  { value: "es", label: "Español", country: "ES" },
  { value: "en", label: "English", country: "GB" },
  { value: "ru", label: "Russian", country: "RU" },
  { value: "uk", label: "Ukrainian", country: "UA" }
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

const CustomValue = ({ innerRef, innerProps, data }) => {
  const Flag = Flags[data.country];
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className="min-w-150px py-1 flex items-center justify-start gap-2 hover:bg-gray-100 cursor-pointer"
    >
      <Flag className="h-[15px] w-[15px]" />
      {data.label}
    </div>
  );
};

const HeaderBottom = (props) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [selectedOption, setSelectedOption] = React.useState(options.find((opt) => opt.value == i18n.language));

  const handleSelectLanguage = (props) => {
    setSelectedOption(props);
    router.push("", "", { locale: props.value });
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
              <Link id="link_main" href="/">
                <a className="logo navbar-brand">
                  <Image src="/images/logo.png" alt="logo" height="100px" width="100px" />
                </a>
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
                          Option: CustomOption,
                          SingleValue: CustomValue,
                          Input: () => null
                        }}
                        styles={{
                          container: (base) => ({ ...base, width: 170 })
                        }}
                      />
                    </a>
                  </li>
                  <li>
                    <Link id="link_hero-area" href="#hero-area">
                      <a>{t("header_about")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link id="link_service-area-anchor" href="#service-area-anchor">
                      <a>{t("header_service")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link id="link_timeline-area" href="#timeline-area">
                      <a>{t("header_gallery")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link id="link_blog-area" href="#blog-area">
                      <a>{t("header_contact us")}</a>
                    </Link>
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

export default HeaderBottom;
