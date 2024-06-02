import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const brands = [
  "/brand/1.png",
  "/brand/2.png",
  "/brand/3.png",
  "/brand/4.png",
  "/brand/5.png",
  "/brand/6.png",
  "/brand/7.png",
];

const Brand = () => {
  return (
    <section className="brand">
      <div className="py-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="container mx-auto px-3">
            <div className="border-b py-4 relative">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Our Brands</h2>
                <div className="custom-prev-button">
                  <GrFormPrevious />
                </div>
                <div className="custom-next-button">
                  <GrFormNext />
                </div>
              </div>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-next-button",
                prevEl: ".custom-prev-button",
              }}
              slidesPerView={2}
              breakpoints={{
                480: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 6,
                  spaceBetween: 50,
                },
              }}
              spaceBetween={30}
            >
              {brands.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="select-none">
                    <img src={item} className="object-cover" alt="brands" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
