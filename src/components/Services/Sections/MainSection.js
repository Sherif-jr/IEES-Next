import Fade from "@/components/motion/Fade";
import FadeSlide from "@/components/motion/FadeSlide";
import Link from "next/link";
import React from "react";

const MainSection = ({ mainSection, firstSectionId, pageId }) => {
  const title = pageId.split("-").map((word) => word.toUpperCase());
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(113deg, rgba(0, 54, 57, 0.7) 8%, rgba(50, 74, 10, 0.8) 94%), url(${mainSection?.bgLink})`,
      }}
      className="w-full px-6 py-8 sm:px-8 md:p-12 min-h-[100vh] bg-center bg-cover bg-no-repeat relative flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center max-w-[1350px] py-8 mt-8 sm:mt-24 lg:mt-0">
        <FadeSlide distance="sm">
          <h1 className="text-[2.4rem] sm:text-[2.6rem] text-center lg:text-start lg:text-5xl font-bold text-white mb-8 sm:mb-12 animate__fadeInUp animate__animated">
            <span className="text-[#82bb27ff]">{title[0][0]}</span>
            <span>
              {title[0].substring(1)}
              <span />{" "}
            </span>
            <span className="text-[#82bb27ff]">{title[1][0]}</span>
            <span>{title[1].substring(1)}</span>
          </h1>
        </FadeSlide>
        <Fade
          delay={0.3}
          className="max-w-full w-auto sm:w-[70%] lg:max-w-[80%] mt-8 mb-12"
        >
          <span className="text-xs max-w-full w-auto text-white text-center sm:text-sm sm:w-[70%] lg:max-w-[80%]">
            {mainSection.description.length > 0
              ? mainSection.description.split("\n").map((paragraph, i) => {
                  if (i === 0 && paragraph.length > 0) {
                    return <span key={i}>{paragraph}</span>;
                  } else if (i !== 0 && paragraph.length > 0) {
                    return (
                      <>
                        <br />
                        <span key={i}>{paragraph}</span>
                      </>
                    );
                  } else if (i !== 0 && paragraph.length === 0) {
                    return <br key={i} />;
                  }
                })
              : ""}
          </span>
        </Fade>
        <div className="flex flex-col items-center sm:flex-row gap-4">
          <div className="flex relative w-full sm:w-auto">
            <FadeSlide
              delay={0.1}
              direction="down"
              distance={50}
              className="inline-block w-full"
            >
              <Link
                href={`#${firstSectionId}`}
                className="uppercase no-underline px-8 text-center w-full border border-white text-[#005d63ff] bg-white py-4 sm:px-11 hover:text-white hover:border-[#005d63ff] hover:bg-[#005d63ff] inline-block rounded"
              >
                Get Started
              </Link>
            </FadeSlide>
          </div>
          <div className="flex relative">
            <FadeSlide
              delay={0.4}
              direction="down"
              distance={50}
              className="block"
            >
              <Link
                href="#other-services"
                className="inline-block uppercase no-underline px-8 text-center w-full text-white bg-transparent py-4 sm:px-11 hover:text-[#005d63ff] rounded border hover:bg-white button"
              >
                OTHER SERVICES
              </Link>
            </FadeSlide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
