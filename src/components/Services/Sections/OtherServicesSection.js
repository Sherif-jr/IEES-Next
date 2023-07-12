import SerivceHoverCard from "@/components/UI/Cards/ServiceHoverCard";
import React from "react";

const OtherServicesSection = ({ cardsData }) => {
  return (
    <section
      id="other-services"
      className="container flex flex-col justify-start items-center w-full py-24 gap-12"
    >
      <h4 className="font-bold text-transparent text-center bg-clip-text text-5xl uppercase mb-4 animate-gradient">
        Other Services
      </h4>
      <div className="flex flex-col xl:flex-row items-center gap-10">
        {cardsData.map((card) => {
          return (
            <SerivceHoverCard
              key={card.name}
              name={card.name}
              description={card.content.description}
              bgLink={card.content.bgLink}
            />
          );
        })}
        {/* <SerivceHoverCard
          title="sdsdsdv"
          summary="ascacsdvsv dvdfv dfvdfv dfvdfv vdfvdfv dfdbe dvdfv dfdfwewefwevv vdvf dfvdvdfbdew dfdfdfv dvdfdfb."
        />
        <SerivceHoverCard
          title="sdsdsdv"
          summary="ascacsdvsv dvdfv dfvdfv dfvdfv vdfvdfv dfdbe dvdfv dfdfwewefwevv vdvf dfvdvdfbdew dfdfdfv dvdfdfb."
        />
        <SerivceHoverCard
          title="sdsdsdv"
          summary="ascacsdvsv dvdfv dfvdfv dfvdfv vdfvdfv dfdbe dvdfv dfdfwewefwevv vdvf dfvdvdfbdew dfdfdfv dvdfdfb."
        /> */}
      </div>
    </section>
  );
};

export default OtherServicesSection;
