import { CiCalendarDate } from "react-icons/ci";
import { useGlobalContext } from "../../../context/Context";
import { Link } from "react-router-dom";

const Blog = () => {
  const { blog } = useGlobalContext();
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto">
          <div className="px-6">
            <div className="flex flex-col">
              <div className="w-full text-center">
                <h3 className="text-3xl font-bold capitalize mb-6">
                  Visit Our Blog
                </h3>
                <p className="text-[#687188] mb-6">
                  Our Blog updated the newest trend of the world regularly
                </p>
              </div>
              <div className="">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                  {blog.slice(0, 3).map((item, index) => {
                    return (
                      <div key={index} className="shadow-md">
                        <div className="img">
                          <img
                            src={item.poster}
                            alt={item.id}
                            className="w-full h-full"
                          />
                        </div>
                        <div className="desc p-4">
                          <h5 className="text-sm sm:text-xl font-bold mb-4 text-[#292b2c]">
                            <Link to={`/blog/${item.id}`}>{item.title}</Link>
                          </h5>
                          <ul className="flex space-x-6 mb-2 text-[#687188] items-center">
                            <li className="flex items-center space-x-1">
                              <CiCalendarDate className="text-xl" />
                              <span className="text-sm sm:text-base">
                                {item.date}
                              </span>
                            </li>
                            <li className="flex items-center space-x-1">
                              <span>{item.view}</span>
                              <span className="text-sm sm:text-base">
                                Views {item.views}
                              </span>
                            </li>
                          </ul>
                          <p className="text-sm sm:text-base  text-[#687188]">
                            {item.description.slice(0, 100) + "..."}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
