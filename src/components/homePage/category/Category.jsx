import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const category = [
  {
    name: "Monitor",
    path: "/shop/Monitors",
    img: "./category/p-1.png",
  },
  {
    name: "Smartphone",
    path: "/shop/Smartphones",
    img: "./category/p-2.png",
  },
  {
    name: "headphone",
    path: "/shop/Headphones",
    img: "./category/p-3.png",
  },
  {
    name: "Smartwatches",
    path: "/shop/Smartwatch",
    img: "./category/p-4.png",
  },
  {
    name: "Console",
    path: "/shop/Console",
    img: "./category/p-5.png",
  },
  {
    name: "camera",
    path: "/shop/Cameras",
    img: "./category/p-6.png",
  },
  {
    name: "Tablet",
    path: "/shop/Tablets",
    img: "./category/p-7.png",
  },
];

const Category = () => {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="px-6">
          <div className="flex flex-col">
            <div className="lg:w-7/12 w-full mx-auto">
              <h2 className="text-3xl font-bold text-center mb-[15px]">
                Top Categories
              </h2>
              <p className="text-center lg:text-base text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa enim Nullam nunc varius.
              </p>
            </div>
            <div className="w-full mx-auto">
              <div className="">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={30}
                  breakpoints={{
                    480: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    600: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 5,
                      spaceBetween: 40,
                    },
                    1200: {
                      slidesPerView: 7,
                      spaceBetween: 50,
                    },
                  }}
                  className="mt-[30px]"
                >
                  {category.map((item, index) => {
                    return (
                      <SwiperSlide key={index} className="select-none">
                        <Link to={item.path} className="">
                          <img
                            src={item.img}
                            className="object-cover"
                            alt={item.name}
                          />
                          <h2 className="text-center block text-base capitalize mt-[10px]">
                            {item.name}
                          </h2>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
