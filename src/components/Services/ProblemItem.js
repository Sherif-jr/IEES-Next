import React from "react";

const ProblemItem = ({ item }) => {
  return (
    <li className="list-item list-disc text-white list-outside mx-4 ">
      {item.content}
      {item.children && item.children.length > 0 && (
        <ul className="text-xs lg:text-sm ml-4 list-[square] list-inside">
          {item.children.map((subProblem, i) => (
            <li key={i} className="list-item text-white list-outside">
              <span>{subProblem}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default ProblemItem;
