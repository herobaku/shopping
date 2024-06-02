import { CiCalendarDate } from "react-icons/ci";

const blogs = [
  {
    img: "./blog/8-540x300.jpg",
    title: "The World Caters to Average People",
    date: "May 09, 2024",
    view: "1,755",
    desc: "I have seen many people underestimating the power of their wallets. To them, they are just a functional item they use to carry. As a result, they often end up with the wallets which are not really suitable for them.    You should pay more attention when you choose your wallets. There are a lot of them on the market with the different designs and styles. When you choose carefully, you would be able to buy a wallet that is catered to your needs. Not to mention that it will help to enhance your style significantly.",
  },
  {
    img: "./blog/9-540x300.jpg",
    title: "Why Teamwork Really Makes The Dream Work",
    date: "May 09, 2024",
    view: "2,400",
    desc: "I have seen many people underestimating the power of their wallets. To them, they are just a functional item they use to carry. As a result, they often end up with the wallets which are not really suitable for them.    You should pay more attention when you choose your wallets. There are a lot of them on the market with the different designs and styles. When you choose carefully, you would be able to buy a wallet that is catered to your needs. Not to mention that it will help to enhance your style significantly.",
  },
  {
    img: "./blog/10-540x300.jpg",
    title: "9 Things I Love About Shaving My Head",
    date: "May 09, 2024",
    view: "1,974",
    desc: "I have seen many people underestimating the power of their wallets. To them, they are just a functional item they use to carry. As a result, they often end up with the wallets which are not really suitable for them.    You should pay more attention when you choose your wallets. There are a lot of them on the market with the different designs and styles. When you choose carefully, you would be able to buy a wallet that is catered to your needs. Not to mention that it will help to enhance your style significantly.",
  },
];

const Blog = () => {
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
                  {blogs.map((blog, index) => {
                    return (
                      <div key={index} className="shadow-md">
                        <div className="img">
                          <img
                            src={blog.img}
                            alt={blog.title}
                            className="w-full h-full"
                          />
                        </div>
                        <div className="desc p-4">
                          <h5 className="text-sm sm:text-xl font-bold mb-4 text-[#292b2c]">
                            {blog.title}
                          </h5>
                          <ul className="flex space-x-6 mb-2 text-[#687188] items-center">
                            <li className="flex items-center space-x-1">
                              <CiCalendarDate className="text-xl" />
                              <span className="text-sm sm:text-base">
                                {blog.date}
                              </span>
                            </li>
                            <li className="flex items-center space-x-1">
                              <span>{blog.view}</span>
                              <span className="text-sm sm:text-base">
                                Views
                              </span>
                            </li>
                          </ul>
                          <p className="text-sm sm:text-base  text-[#687188]">
                            {blog.desc.slice(0, 200)}
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
