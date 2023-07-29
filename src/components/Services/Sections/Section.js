import React from "react";
import StageCard from "../StageCard";
import Image from "next/image";
import FadeSlide from "@/components/motion/FadeSlide";

const Section = ({ id, stage, index }) => {
  return (
    <section
      id={id}
      // style={{
      //   backgroundImage: `linear-gradient(113deg, rgba(0, 54, 57, 0.7) 8%, rgba(50, 74, 10, 0.8) 94%), url(${stage?.bgLink})`,
      // }}
      className="xl:h-[100vh] w-full px-6 py-8 sm:px-8 md:p-12 min-h-[80vh] bg-center bg-cover bg-no-repeat relative flex flex-col items-start justify-start bg-gradient-to-t from-[#003639b2] to-[#324a0acc]"
    >
      <Image fill src={stage.bgLink} alt="" className="object-cover z-[-1]" />
      <div className="container">
        <div className="w-full mb-0 sm:mb-4 flex flex-col items-start">
          <h1 className="text-white w-fit text-[2rem]">
            <span>{index}.</span>
            <br></br>
            <span>{stage.title.toUpperCase()}</span>
          </h1>
          <p className="text-xs text-white mt-8 mb-6 text-left">
            <span>{stage.description}</span>
          </p>
        </div>
        <div className="w-full gap-10 px-0 pt-8 max-h-[initial] sm:pt-4 justify-center flex flex-wrap md:pt-12 lg:p-4 items-center lg:justify-center  xl:p-8">
          <FadeSlide
            distance="sm"
            disableFade
            className="h-full flex flex-col items-center justify-start md:justify-center "
          >
            <StageCard problems content={stage.problems} />
          </FadeSlide>
          <FadeSlide
            distance="sm"
            disableFade
            className="h-full flex flex-col items-center justify-start md:justify-center "
          >
            <StageCard solutions content={stage.solutions} />
          </FadeSlide>
        </div>
      </div>
    </section>
  );
};

export default Section;
