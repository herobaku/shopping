import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
//Swiper
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Link } from "react-router-dom";

const slider = [
  {
    bg: "/slider/1.jpg",
    stock: "Get up to 50% off Today Only!",
    name: "Samsung S21",
    button: "Shop Now",
    href: "/product/1",
    color: "white",
  },
  {
    bg: "/slider/2.jpg",
    stock: "50% off in all products",
    name: "Mac Book Air",
    button: "Discover Now",
    href: "/product/2",
    color: "white",
  },
  {
    bg: "/slider/3.jpg",
    stock: "Taking your Viewing Experience to Next Level",
    name: "Summer Sale",
    button: "Shop Now",
    href: "/product/28",
    color: "white",
  },
];

const Slide = () => {
  return (
    <>
      <section className="slide mt-5">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-end">
            <div className="w-full lg:pl-8 px-5">
              <Swiper
                slidesPerView={1}
                loop={true}
                allowTouchMove={false}
                simulateTouch={false}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
              >
                {slider.map((slide, index) => {
                  return (
                    <SwiperSlide
                      className="xl:h-[500px] h-56 lg:h-[400px] md:h-[500px]"
                      style={{
                        background: `url(${slide.bg}) center top/cover no-repeat`,
                      }}
                      key={index}
                    >
                      <div className="flex h-full gap-y-3 md:gap-y-0 flex-col items-start ps-12 justify-center">
                        <h2
                          className={`md:text-xl text-lg font-poppins font-light text-${slide.color}`}
                        >
                          {slide.stock}
                        </h2>
                        <h1
                          className={`md:text-6xl text-2xl font-poppins capitalize font-semibold md:mb-5 md:mt-5 text-${slide.color}`}
                        >
                          {slide.name}
                        </h1>
                        <Link
                          to={slide.href}
                          className="text-base font-poppins p-2 md:py-[12px] md:px-[35px] bg-redLight uppercase text-white"
                        >
                          {slide.button}
                        </Link>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slide;
