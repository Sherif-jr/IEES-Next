import React from "react";
import ProblemItem from "./ProblemItem";
import SolutionItem from "./SolutionItem";

const StageCard = ({ problems, solutions, content }) => {
  return (
    <div
      //   bgColorRGBA={problems ? "255, 255, 255, 0.2" : "255, 255, 255, 0.8"}
      className={` rounded-3xl h-[350px] w-[400px] flex flex-col items-center justify-start mb-8 p-8  lg:px-4 md:p-4 ${
        problems ? "bg-[#ffffff33]" : "bg-[#ffffffcc]"
      } `}
    >
      {/* ----------- Card title ---------------- */}
      <div className="w-full h-[50px] flex items-center justify-center text-center">
        <h3 className="text-base font-bold lg:text-xl text-transparent relative w-full uppercase bg-gradient-to-br from-[#1eb1bb] to-[#82bb27eb] bg-clip-text">
          <span>
            {(problems && "Common Problems") ||
              (solutions && "IEES Solutions") ||
              "title?"}
          </span>
          <br></br>
        </h3>
      </div>
      {/* ------------------ Items List ----------- */}
      <div className="flex-grow w-full flex flex-col gap-2">
        {problems && (
          <ul className="w-full list-inside">
            {content.map((item, i) => (
              <ProblemItem
                key={`${item.content.substring(2, 8)}==${Math.random()}`}
                item={item}
              />
            ))}
          </ul>
        )}
        {solutions &&
          content.map((item, i) => (
            <SolutionItem
              key={`${item.content.substring(2, 8)}==${Math.random()}`}
              item={item}
            />
          ))}
      </div>
      {/* {(props.problems && (
        <ul className="list serv-section-problems-list">
          {props.dataArray.map((problem, i) => (
            <ProblemsList problem={problem} key={i} />
          ))}
        </ul>
      )) ||
        (props.solutions && (
          <div className="project-management-container08 list">
            {props.dataArray.map((solution, i) => (
              <SolutionsList solution={solution} key={i} />
            ))}
          </div>
        ))} */}
    </div>
  );
};

export default StageCard;
