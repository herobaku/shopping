import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import styles from "./style.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const clients = [
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    avatar: "./client/1.jpg",
    name: "Adam William",
    position: "CEO of Microsoft",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    avatar: "./client/2.jpg",
    name: "Retha Deowalim",
    position: "CEO of Facebook",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    avatar: "./client/3.jpg",
    name: "Sam J. Wasim",
    position: "Pio Founder",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    avatar: "./client/4.jpg",
    name: "Usan Gulwarm",
    position: "CEO Of Google",
  },
];

const Client = () => {
  return (
    <div className="py-[50px] bg-[#fff1f1]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-center items-center flex-col">
          <div className="md:w-8/12 w-11/12">
            <h1 className={styles.title}>Our Client Say!</h1>
          </div>
          <div className="md:w-8/12 w-11/12 text-center">
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              navigation
              autoplay={{
                delay: 5000,
              }}
              className="relative"
            >
              {clients.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="desc pb-6">
                      <p className="md:text-base text-sm">{item.comment}</p>
                    </div>
                    <div className="flex justify-center space-x-4 items-center">
                      <div className="avatar">
                        <img src={item.avatar} alt={item.avatar} />
                      </div>
                      <div className="info text-left">
                        <h3 className="font-bold mb-1 text-sm md:text-base">
                          {item.name}
                        </h3>
                        <p className="text-redLight text-sm md:text-base">
                          {item.position}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
