import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TfiMobile } from "react-icons/tfi";
import { LuUser2 } from "react-icons/lu";
import { GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useRegisterContext } from "../../../context/Context";
import { useTranslation } from "react-i18next";

const Top = () => {
  const { t, i18n } = useTranslation();
  const { user } = useRegisterContext();
  const { logOut } = useRegisterContext();
  const [language, setLanguage] = useState(i18n.language);
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [currencyDropdownVisible, setCurrencyDropdownVisible] = useState(false);

  const availableLanguages = ["English", "Azerbaijan"];
  const availableCurrencies = ["USD", "AZN"];

  // Currency
  const toggleLanguageDropdown = () => {
    setLanguageDropdownVisible((prevVisible) => !prevVisible);
    setCurrencyDropdownVisible(false);
  };

  const selectCurrency = (selectedCurrency) => {
    setCurrency(selectedCurrency);
    setCurrencyDropdownVisible(false);
  };

  // language
  const toggleCurrencyDropdown = () => {
    setCurrencyDropdownVisible((prevVisible) => !prevVisible);
    setLanguageDropdownVisible(false);
  };

  const selectLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setLanguageDropdownVisible(false);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const saveLang = localStorage.getItem("language");
    if (saveLang) {
      i18n.changeLanguage(saveLang);
    }
  }, [i18n]);

  return (
    <div className="border-b border-[#eee] hidden md:block">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-5 px-5">
          <div className="flex justify-between item-center">
            <div className="w-1/2">
              <div className="flex space-x-5">
                <div className="relative">
                  <div
                    className="lang flex space-x-2 items-center cursor-pointer"
                    onClick={toggleLanguageDropdown}
                  >
                    <span className="lang-icon">
                      <GrLanguage />
                    </span>
                    <span className="lang-title font-poppins text-sm">
                      {language}
                    </span>
                    <span>
                      <IoIosArrowDown />
                    </span>
                  </div>
                  {languageDropdownVisible && (
                    <div className="absolute bg-white border border-gray-200 shadow-md mt-2">
                      {availableLanguages.map((lang) => (
                        <div
                          key={lang}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => selectLanguage(lang)}
                        >
                          {lang}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative">
                  <div
                    className="lang flex space-x-2 items-center cursor-pointer"
                    onClick={toggleCurrencyDropdown}
                  >
                    <span className="lang-title font-poppins text-sm">
                      {currency}
                    </span>
                    <span>
                      <IoIosArrowDown />
                    </span>
                  </div>
                  {currencyDropdownVisible && (
                    <div className="absolute bg-white border border-gray-200 shadow-md mt-2">
                      {availableCurrencies.map((cur) => (
                        <div
                          key={cur}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => selectCurrency(cur)}
                        >
                          {cur}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="phone">
                  <Link
                    to="tel:1234567890"
                    className="lang flex space-x-2 items-center cursor-pointer"
                  >
                    <span className="lang-icon">
                      <TfiMobile />
                    </span>
                    <span className="lang-title font-poppins text-sm">
                      123-456-7890
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex space-x-2 justify-end">
                <Link
                  to="/admin"
                  className="icon-compare flex space-x-2 item-center"
                >
                  <span className="lang-title font-poppins text-sm">
                    {user ? "Order" : ""}
                  </span>
                </Link>
                {user ? (
                  <Link
                    to="/"
                    onClick={logOut}
                    className="icon-user flex space-x-2 item-center"
                  >
                    <span className="lang-icon">
                      <LuUser2 />
                    </span>
                    <span className="lang-title font-poppins text-sm">
                      Log out
                    </span>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="icon-user flex space-x-2 item-center"
                  >
                    <span className="lang-icon">
                      <LuUser2 />
                    </span>
                    <span className="lang-title font-poppins text-sm">
                      Login
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
