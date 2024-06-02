import { FaShippingFast } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import styles from "./style.module.css";

const service = [
  {
    icon: <FaShippingFast className="text-5xl mx-auto fill-gray-500" />,
    name: "Free Delivery",
    desc: "Free shipping on all US order or order above $200",
  },
  {
    icon: <GiPayMoney className="text-5xl mx-auto fill-gray-500" />,
    name: "30 Day Returns Guarantee",
    desc: "Simply return it within 30 days for an exchange",
  },
  {
    icon: <BiSupport className="text-5xl mx-auto fill-gray-500" />,
    name: "27/4 Online Support",
    desc: "Contact us 24 hours a day, 7 days a week",
  },
];

const Services = () => {
  return (
    <div className="py-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap">
          {service.map((serv, index) => {
            return (
              <div
                className={`md:w-1/3 w-full ${styles.services__card}`}
                key={index}
              >
                <div className="icon mb-3.5">{serv.icon}</div>
                <h5 className="text-xl font-medium mb-[8px]">{serv.name}</h5>
                <p className="text-[#687188]">{serv.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
