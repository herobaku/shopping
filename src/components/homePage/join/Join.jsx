import { PiTelegramLogoLight } from "react-icons/pi";

const Join = () => {
  return (
    <section className="bg-red-500">
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto">
          <div className="md:py-12 py-5 md:px-3">
            <div className="flex items-center md:justify-between gap-y-3 justify-center flex-wrap">
              <div className="md:w-1/2 w-11/12">
                <div className="flex items-center space-x-3">
                  <div className="md:w-[65px] md:h-[65px] h-[50] w-[50px]">
                    <PiTelegramLogoLight className="w-full h-full fill-white" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="xl:text-3xl text-xl font-medium text-white font-poppins">
                      Join Our Newsletter
                    </h1>
                    <p className="text-white text-base font-medium font-poppins">
                      Register now to get updates on promotions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-11/12">
                <form>
                  <div className="flex items-center space-x-3 relative">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="w-full px-5 text-black placeholder:capitalize font-poppins text-sm bg-white h-14 rounded-full border-none focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="text-white font-medium capitalize bg-[#343a40] absolute right-1 hover:bg-[#23272b] hover:border-[#1d2124] duration-200 transition-all bottom-1/2 translate-y-1/2 py-3 px-6 rounded-full font-poppins text-base"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
