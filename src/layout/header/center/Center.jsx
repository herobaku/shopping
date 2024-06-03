// Logo
import { useTranslation } from "react-i18next";
import logoNew from "/logoNew.png";
// Icons
import { FiPhoneCall } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

import { Link } from "react-router-dom";

const Center = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="py-5 px-5">
        <div className="flex items-center">
          <div className="logo w-1/2 lg:w-3/12">
            <Link to="/" className="block max-w-52">
              <img src={logoNew} alt="logo" className="w-full block" />
            </Link>
          </div>
          <div className="w-6/12 hidden lg:block">
            <form className="flex">
              <div className="input-block w-full border flex space-x-5">
                <div className="input-field w-full relative border-1">
                  <input
                    type="text"
                    placeholder={t("placeholder.name")}
                    className="w-full h-full p-3 outline-0 pe-12"
                  />
                  <button
                    type="submit"
                    className="absolute bottom-1/2 right-2 translate-y-1/2 text-2xl"
                  >
                    <IoIosSearch />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="call w-1/2 lg:w-3/12">
            <div className="call-link flex items-center space-x-1 justify-end">
              <span className="text-red-500 text-xl md:text-4xl ">
                <FiPhoneCall className="stroke-1" />
              </span>
              <span className="lg:text-base text-sm font-poppins">
                123-456-7890
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
