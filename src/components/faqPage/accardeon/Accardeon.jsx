import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const Accardeon = () => {
  const accordionData = {
    shipping: [
      {
        accardionTitle: "What Shipping Methods Are Available?",
        accardionSubTitle:
          "Ex Portland Pitchfork irure mustache. Eutra fap before they sold out literally. Aliquip ugh bicycle rights actually mlkshk, seitan squid craft beer tempor.",
      },
      {
        accardionTitle: "Do You Ship Internationally?",
        accardionSubTitle:
          "Hoodie tote bag mixtape tofu. Typewriter jean shorts wolf quinoa, messenger bag organic freegan cray.",
      },
      {
        accardionTitle: "How Long Will It Take To Get My Package?",
        accardionSubTitle:
          "Swag slow-carb quinoa VHS typewriter pork belly brunch, paleo single-origin coffee Wes Anderson. Flexitarian Pitchfork forage, literally paleo fap pour-over. Wes Anderson Pinterest YOLO fanny pack meggings, deep v XOXO chambray sustainable slow-carb raw denim church-key fap chillwave Etsy. +1 typewriter kitsch, American Apparel tofu Banksy Vice.",
      },
    ],
    payment: [
      {
        accardionTitle: "What Payment Methods Are Accepted?",
        accardionSubTitle:
          "Fashion axe DIY jean shorts, swag kale chips meh polaroid kogi butcher Wes Anderson chambray next level semiotics gentrify yr. Voluptate photo booth fugiat Vice. Austin sed Williamsburg, ea labore raw denim voluptate cred proident mixtape excepteur mustache. Twee chia photo booth readymade food truck, hoodie roof party swag keytar PBR DIY.",
      },
      {
        accardionTitle: "Is Buying On-Line Safe?",
        accardionSubTitle:
          "Art party authentic freegan semiotics jean shorts chia cred. Neutra Austin roof party Brooklyn, synth Thundercats swag 8-bit photo booth. Plaid letterpress leggings craft beer meh ethical Pinterest.",
      },
    ],
    order_returns: [
      {
        accardionTitle: "How do I place an Order?",
        accardionSubTitle:
          "Art party authentic freegan semiotics jean shorts chia cred. Neutra Austin roof party Brooklyn, synth Thundercats swag 8-bit photo booth. Plaid letterpress leggings craft beer meh ethical Pinterest.",
      },
      {
        accardionTitle: "How Can I Cancel Or Change My Order?",
        accardionSubTitle:
          "Plaid letterpress leggings craft beer meh ethical Pinterest. Art party authentic freegan semiotics jean shorts chia cred. Neutra Austin roof party Brooklyn, synth Thundercats swag 8-bit photo booth.",
      },
      {
        accardionTitle: "Do I need an account to place an order?",
        accardionSubTitle:
          "Thundercats swag 8-bit photo booth. Plaid letterpress leggings craft beer meh ethical Pinterest. Twee chia photo booth readymade food truck, hoodie roof party swag keytar PBR DIY. Cray ugh 3 wolf moon fap, fashion axe irony butcher cornhole typewriter chambray VHS banjo street art.",
      },
      {
        accardionTitle: "How Do I Track My Order?",
        accardionSubTitle:
          "Keytar cray slow-carb, Godard banh mi salvia pour-over. Slow-carb @Odd Future seitan normcore. Master cleanse American Apparel gentrify flexitarian beard slow-carb next level.",
      },
      {
        accardionTitle: "How Can I Return a Product?",
        accardionSubTitle:
          "Kale chips Truffaut Williamsburg, hashtag fixie Pinterest raw denim c hambray drinking vinegar Carles street art Bushwick gastropub. Wolf Tumblr paleo church-key. Plaid food truck Echo Park YOLO bitters hella, direct trade Thundercats leggings quinoa before they sold out. You probably haven’t heard of them wayfarers authentic umami drinking vinegar Pinterest Cosby sweater, fingerstache fap High Life.",
      },
    ],
  };

  const AccordionItem = ({ title, content, isOpen, toggleOpen }) => {
    return (
      <div className="border rounded-sm">
        <div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={toggleOpen}
        >
          <h5 className="text-lg font-medium">{title}</h5>
          <CiCirclePlus
            className={`text-3xl text-gray-500 ${isOpen ? "hidden" : ""}`}
          />
          {isOpen && <CiCircleMinus className="text-3xl text-gray-500" />}
        </div>
        {isOpen && (
          <div className="p-4">
            <p>{content}</p>
          </div>
        )}
      </div>
    );
  };

  const Accordion = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
      <div className="flex flex-col gap-3 overflow-hidden">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.accardionTitle}
            content={item.accardionSubTitle}
            isOpen={index === openIndex}
            toggleOpen={() => toggleItem(index)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="p-4">
      <h4 className="text-xl font-semibold mb-4">Shipping</h4>
      <Accordion data={accordionData.shipping} />

      <h4 className="text-xl font-semibold mt-8 mb-4">Payment</h4>
      <Accordion data={accordionData.payment} />

      <h4 className="text-xl font-semibold mt-8 mb-4">Order and Returns</h4>
      <Accordion data={accordionData.order_returns} />
    </div>
  );
};

export default Accardeon;
