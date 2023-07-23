import Link from "next/link";
import React from "react";

const MainSection = ({ mainSection, firstSectionId, pageId }) => {
  const title = pageId.split("-").map((word) => word.toUpperCase());
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(113deg, rgba(0, 54, 57, 0.7) 8%, rgba(50, 74, 10, 0.8) 94%), url(${mainSection?.bgLink})`,
      }}
      className="h-[100vh] w-full px-6 py-8 sm:px-8 md:p-12 min-h-[80vh] bg-center bg-cover bg-no-repeat relative flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center max-w-[1350px] py-8 mt-8 sm:mt-24 lg:mt-0">
        {/* ToDO: Bold Headline */}
        <h1 className="text-[2.4rem] sm:text-[2.6rem] text-center lg:text-start lg:text-5xl font-bold text-white mb-12 animate__fadeInUp animate__animated">
          <span className="text-[#82bb27ff]">{title[0][0]}</span>
          <span>
            {title[0].substring(1)}
            <span />{" "}
          </span>
          <span className="text-[#82bb27ff]">{title[1][0]}</span>
          <span>{title[1].substring(1)}</span>
        </h1>
        <span className="text-xs max-w-full w-auto text-white text-center sm:text-sm sm:w-[70%] lg:max-w-[80%] mt-8 mb-12">
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

          {/* <span>
            A balance between the engineering view and the business view will
            help you solve most common problems and overcome a lot of obstacles
            saving a lot of time and maintaining the best quality with an eye on
            the financial side and the other on the practical engineering side.
          </span>
          <br />
          <br />
          <br />
          <span>
            To help you understand what we do and how can we help you manage
            your project efficiently and effectively, we designed a journey for
            you where you will learn about your project stages and what we do
            for you in every single stage.
          </span> */}
        </span>
        <div className="flex flex-col items-center sm:flex-row gap-4">
          <div className="flex relative">
            <Link
              href={`#${firstSectionId}`}
              className="uppercase no-underline px-8 text-center w-full border border-white text-[#005d63ff] bg-white py-4 sm:px-11 hover:text-white hover:border-[#005d63ff] hover:bg-[#005d63ff] inline-block rounded"
            >
              Get Started
            </Link>
          </div>
          <div className="flex relative">
            <Link
              href="#other-services"
              className="uppercase no-underline px-8 text-center w-full text-white bg-transparent py-4 sm:px-11 hover:text-[#005d63ff] rounded border hover:bg-white button"
            >
              OTHER SERVICES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
