import HeroListItem from "@/components/About/HeroListItem";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import topWave from "public/Assets/home/top.svg";
import bottomWave from "public/Assets/home/bottom.svg";
// import contactImage from "public/Assets/home/contact-image.png";
import yogaImage from "public/Assets/about/yoga.png";
import officeImage from "public/Assets/about/office.png";
import visionImage from "public/Assets/about/vision.jpg";
import missionImage from "public/Assets/about/mission.jpg";
import pattern from "public/Assets/others/pattern.png";
import pattern2 from "public/Assets/about/pattern2.svg";
import { getAbout, getAllServicesCards } from "@/libs/firebase";
import SerivceHoverCard from "@/components/UI/Cards/ServiceHoverCard";

export default async function about() {
  const [content, servicesCards] = await Promise.all([
    getAbout(),
    getAllServicesCards(),
  ]);
  console.log(content);
  return (
    <>
      <main className="w-full py-8 px-4 sm:px-8 md:p-12 mt-24 flex items-center flex-col justify-between ">
        <h1 className="uppercase text-2xl md:text-[2rem] text-center mb-8 ">
          This is why we existed, That is what we achieve.
        </h1>
        <span className="text-base tracking-[.075em] sm:text-xl text-center mb-2 ">
          We provide you the best in market engineering services. No more
          headaches or delays. Our services are tailored for your needs. Pay
          only for what you need and expand even more at any time.
        </span>
        <div className="mt-8 px-4 min-w-full sy:mt-12 flex items-center justify-center min-h-fit md:min-w-[800px] lg:min-w-[1000px] xl:min-w-[1400px] lg:my-8 ">
          <div className="w-full flex md:w-[50%] md:justify-center items-center justify-items-center flex-col relative z-[1] h-full flex-grow-0 flex-shrink-0">
            <div className="mt-2 px-2 w-full flex flex-col items-start justify-start md:mx-4 md:pl-0 ">
              <div className="text-xl px-2 md:text-xs w-full inline-block lg:text-sm text-left text-[#67748eff]">
                <HeroListItem text="Latest technology" />
                <HeroListItem text="Efficient project management" />
                <HeroListItem text="Optimized engineering designs" />
                <HeroListItem text="Less energy consumption" />
                <HeroListItem text="Greener environment" />
              </div>
            </div>
            <div className="p-0 sm:py-4 md:pb-0 lg:py-6  flex flex-col items-center md:items-start justify-center h-auto w-full">
              <Link
                href="#services-section"
                className=" w-1/2 md:w-auto h-auto py-6 md:px-8 mt-4 ml-4 sm:m-0  md:py-4 no-underline border rounded border-[#004c52ff] text-base sm:text-3xl md:text-base text-[#004c52ff] text-center transition-all duration-300 hover:text-[#ffffff] hover:bg-[#004c52ff] hover:scale-105  fixME-button  "
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden relative md:flex items-center flex-col justify-center w-1/2 min-h-[50vh]">
            <Image
              alt="image"
              src={yogaImage}
              // loading="eager"
              fill
              className="h-auto w-full object-contain "
            />
          </div>
        </div>
      </main>
      {/* 


      ---------------------------------------------------- History section ---------------------------------------------------------
      
      
      */}
      <section className="overflow-hidden flex flex-col w-full relative items-center bg-gradient-to-br from-[#005d63] to-[#82bb27]">
        <div className="py-24 sm:py-48 md:py-60 px-8 lg:px-12 flex justify-center items-center xl:justify-between xl:items-start z-[1] max-w-[1320px]">
          <div className="flex flex-col items-center lg:item h-auto w-1/2">
            <div className="flex m-w-[600px] items-start mr-0 lg:mr-12 flex-col">
              <p className="mr-0 flex flex-col max-w-[600px] items-start sm:mr-12 ">
                <span className="font-normal text-base text-[#d2d6daff] opacity-80 mb-4">
                  PAST IS THE BEGINNING OF THE FUTURE
                </span>
                <br></br>
              </p>
              <h3 className="uppercase w-[382px] text-[#ffffff] font-bold md:font-normal text-3xl mb-12 ">
                <span>IEES HISTORY</span>
                <br></br>
              </h3>
              <p className="text-[#ffffff] text-xl md:text-base opacity-80 mb-8">
                After a long experience in Mechanical, Electrical, and Plumbing
                (MEP) projects in different phases (Designing, Tendering,
                Contracting, Construction, operating, maintenance, developing,
                and upgrading) and as a response and responsibility on our
                global duty to participate in climate change actions, we
                developed an adapted firm (Integrated Energy and Engineering
                Services Company IEES) that depends on the market experience and
                updated science and research to participate in:
              </p>
              <ul className="text-xl md:text-base -mt-4 md:m-0 pl-8 md:p-0 text-white list-disc list-outside block w-full">
                <li className="list-item">
                  <span>
                    Developing optimized MEP designs (Design Services).
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    Managing MEP projects (Project Management Services).
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    Energy Management for different facilities (Energy
                    Management Services).
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    Maintenance Management for different facilities (Maintenance
                    Management Services).
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden relative md:flex flex-col justify-center items-center h-[400px] w-5/12 ">
            <Image alt="" src={officeImage} fill objectFit="contain" />
          </div>
        </div>
        <Image
          alt="image"
          src={bottomWave}
          className="waves bottomWave z-[1]"
        />
        <Image
          alt="image"
          src={pattern}
          className="top-auto left-0 right-0 bottom-auto opacity-10 w-full h-full absolute object-cover"
        />
        <Image alt="image" src={topWave} className="waves topWave z-[1]" />
      </section>
      {/* 


      ---------------------------------------------------- Vision section ---------------------------------------------------------
      
      
      */}
      <section className="w-full py-8 px-4 sm:px-8 md:p-12 flex flex-col items-center justify-between mt-24 ">
        <div className="flex h-auto max-w-[1400px] my-8 items-center">
          <div className="hidden sm:flex flex-col justify-center items-center w-1/2">
            <Image
              alt="image"
              src={visionImage}
              className="object-contain h-[300px] md:h-[450px]"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col items-end justify-stretch">
            <p className="text-base font-normal text-[#d2d6daff] opacity-80 mb-4">
              DREAM, ACHIEVE
              <br></br>
            </p>
            <h3 className="uppercase text-4xl lg:text-5xl mb-12">OUR VISION</h3>
            <span
              className="max-w-[1400px] text-justify mb-2 tracking-wider"
              style={{ direction: "rtl" }}
            >
              {content.vision}
            </span>
          </div>
        </div>
      </section>
      {/* 


      ---------------------------------------------------- Mission section ---------------------------------------------------------
      
      
      */}
      <section className="py-8 px-4 sm:px-8 mb-0 sm:mb-4 mt-0 md:mb-24 md:mt-12 lg:mt-24 lg:mb-48 flex flex-col justify-center xl:justify-between md:p-12 items-center w-full min-h-[70vh] ">
        <div className="flex flex-row h-auto my-8 items-center">
          <div className="w-full sm:w-1/2 flex items-start justify-stretch flex-col">
            <p className="text-base font-normal text-[#d2d6daff] opacity-80 mb-4">
              A GLIMPSE OF TOMORROW
            </p>
            <h3 className="uppercase text-4xl lg:text-5xl mb-12">
              OUR MISSION
            </h3>
            <span className="max-w-[1400px] text-justify mb-2 tracking-wider p-0 sm:px-4">
              {content.mission}
            </span>
          </div>
          <div className="hidden sm:flex w-1/2 items-center flex-col justify-center ">
            <Image
              alt=""
              src={missionImage}
              className="object-contain h-[300px] md:h-[450px]"
            />
          </div>
        </div>
      </section>
      {/* 


      ---------------------------------------------------- Services section ---------------------------------------------------------
      

      */}
      <section
        id="services-section"
        className="overflow-hidden w-full flex items-center justify-center py-24 bg-cover bg-center bg-gradient-to-t from-[#005d63b3] to-[#82bb27b5] relative"
      >
        <Image
          alt="image"
          src={pattern2}
          className="top-auto left-0 right-0 bottom-auto w-full h-full absolute object-cover z-[-1]"
        />
        <div className="flex flex-col xl:flex-row items-center gap-5 p-9">
          {servicesCards.map((card) => (
            <SerivceHoverCard
              key={card.name}
              name={card.name}
              description={card.content.description}
              bgLink={card.content.bgLink}
              all
            />
          ))}
        </div>
      </section>
      {/* 


      ---------------------------------------------------- Proejects section ---------------------------------------------------------
      
      
      */}
      <section className="p-8 min-h-[70vh] xl:min-h-[50vh] w-full flex flex-col items-center justify-center md:p-12">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-center py-12">
            <div className="flex flex-col items-center justify-center w-auto pb-12">
              <svg
                viewBox="0 0 1090.8525714285713 1024"
                className="fill-[#82bb27ff] w-8 h-8"
              >
                <path d="M1017.714 532c0-16-17.714-20-30.286-20h-621.714c-30.286 0-70.286 18.857-89.714 42.286l-168 207.429c-5.143 6.857-10.286 14.286-10.286 22.857 0 16 17.714 20 30.286 20h621.714c30.286 0 70.286-18.857 89.714-42.857l168-207.429c5.143-6.286 10.286-13.714 10.286-22.286zM365.714 438.857h438.857v-91.429c0-30.286-24.571-54.857-54.857-54.857h-329.143c-30.286 0-54.857-24.571-54.857-54.857v-36.571c0-30.286-24.571-54.857-54.857-54.857h-182.857c-30.286 0-54.857 24.571-54.857 54.857v487.429l146.286-180c33.143-40.571 94.286-69.714 146.286-69.714zM1090.857 532c0 25.143-10.857 49.143-26.286 68.571l-168.571 207.429c-32.571 40-94.857 69.714-146.286 69.714h-621.714c-70.286 0-128-57.714-128-128v-548.571c0-70.286 57.714-128 128-128h182.857c70.286 0 128 57.714 128 128v18.286h310.857c70.286 0 128 57.714 128 128v91.429h109.714c38.857 0 77.714 17.714 94.857 54.286 5.714 12 8.571 25.143 8.571 38.857z"></path>
              </svg>
              <h1 className="uppercase text-3xl text-center mt-6">
                Our portfolio
              </h1>
            </div>
            <span className="text-base max-w-[70%] mb-8 xl:text-xl text-center">
              <span>
                Well documented projects are waiting for you to explore. 
              </span>
              <span>Take a look at our portfolio from the button below.</span>
              <br></br>
            </span>
            <Link
              href="/projects"
              className="flex items-center justify-center py-4 px-8 fill-[#67748eff] hover:fill-white hover:text-white hover:bg-[#004c52ff] hover:scale-[1.02] cursor-pointer border rounded bg-white border-[#67748e] transition duration-300"
            >
              <span className="mr-2">Explore Projects</span>
              <svg viewBox="0 0 1024 1024" className="w-4 h-4">
                <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM341.333 554.667h238.336l-97.835 97.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l170.667-170.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-170.667-170.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l97.835 97.835h-238.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* 


      ---------------------------------------------------- Contact section ---------------------------------------------------------
      
      
      */}
      <div className="py-8 px-4 sm:px-8 w-full md:p-12 min-h-[60vh] flex flex-col items-center justify-center relative bg-gradient-to-r from-[#005d63] via-[#82bb27f7] via-[92%] to-[#82bb27d9] ">
        <Image fill src={pattern} alt="" className="object-cover z-[-1]" />
        <h4 className="text-white text-3xl sm:text-4xl font-semibold mb-12 text-center xl:mb-8 xl:text-5xl ">
          We&apos;d love to hear from you!
        </h4>
        <p className="text-base max-w-[90%] text-center text-white xl:text-xl mb-8 ">
          Whether you are an existing customer who needs help, a new customer
          who wishes to know more, or you&apos;re just curious about the
          features and wants to be up to date with our latest news and offers.
          you are a click away from what you need.
        </p>
        <Link
          href="/contact"
          className="py-4 px-12 transition duration-300 button text-[#67748e] border-[#67748eff] rounded bg-white hover:bg-black hover:text-white"
        >
          Get in touch
        </Link>
      </div>
    </>
  );
}
