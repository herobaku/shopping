import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const { products } = useProductsContext();

const getTimeLeftFromLocalStorage = () => {
  const savedTimeLeft = localStorage.getItem("timeLeft");
  return savedTimeLeft
    ? JSON.parse(savedTimeLeft)
    : initialProducts.map((item) => ({
        day: item.day,
        hour: item.hour,
        minute: item.minute,
        second: item.second,
      }));
};

const Deals = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeftFromLocalStorage);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) =>
        prevTimeLeft.map((time, index) => {
          let { day, hour, minute, second } = time;
          if (second > 0) {
            second--;
          } else {
            second = 59;
            if (minute > 0) {
              minute--;
            } else {
              minute = 59;
              if (hour > 0) {
                hour--;
              } else {
                hour = 23;
                if (day > 0) {
                  day--;
                } else {
                  day = 0;
                  hour = 0;
                  minute = 0;
                  second = 0;
                }
              }
            }
          }
          return { day, hour, minute, second };
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("timeLeft", JSON.stringify(timeLeft));
  }, [timeLeft]);

  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="container mx-auto px-3">
        <div className="w-1/2">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">Best Deals For You</h2>
          </div>
        </div>
        <div className="border-b border-color-[#ddd] my-4"></div>
        <Swiper
          className="flex"
          breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          {initialProducts.map((item, _indx) => (
            <SwiperSlide key={_indx} className="flex">
              <div className="w-full flex flex-col lg:flex-row justify-center items-center border-2 border-redLight rounded-2xl overflow-hidden">
                <div className="lg:w-1/2 w-full">
                  <div className="w-full lg:max-w-[300px] flex justify-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full md:h-full h-max"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 w-full text-center md:text-left">
                  <div className="py-7 md:ps-4 md:pe-7">
                    <h3>
                      <a href="#">{item.title}</a>
                    </h3>
                    <div className="inline-flex gap-1">
                      <span className="text-redLight font-semibold">
                        {item.price}$
                      </span>
                      <del>{item.oldPrice}.00$</del>
                      <span className="text-[#388e3c]">{item.onSale}</span>
                    </div>
                    <div className="flex justify-center items-center text-center mt-5 gap-2">
                      <div className="p-2.5 bg-slate-100 flex flex-col">
                        <span className="text-2xl">
                          {formatNumber(timeLeft[_indx].day)}
                        </span>
                        <span className="text-[10px]">Days</span>
                      </div>
                      <div className="p-2.5 flex flex-col bg-slate-100">
                        <span className="text-2xl">
                          {formatNumber(timeLeft[_indx].hour)}
                        </span>
                        <span className="text-[10px]">Hour</span>
                      </div>
                      <div className="p-2.5 flex flex-col bg-slate-100">
                        <span className="text-2xl">
                          {formatNumber(timeLeft[_indx].minute)}
                        </span>
                        <span className="text-[10px]">Minute</span>
                      </div>
                      <div className="p-2.5 flex flex-col bg-slate-100">
                        <span className="text-2xl">
                          {formatNumber(timeLeft[_indx].second)}
                        </span>
                        <span className="text-[10px]">Second</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Deals;
