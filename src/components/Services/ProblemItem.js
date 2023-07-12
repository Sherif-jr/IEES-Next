import React from "react";

const ProblemItem = ({ item }) => {
  return (
    <li className="list-item list-disc text-white font-medium">
      {item.content}
      {item.children && item.children.length > 0 && (
        <ul className="text-xs lg:text-sm ml-4 list-[square] list-inside">
          {item.children.map((subProblem, i) => (
            <li key={i} className="list-item text-white">
              {subProblem}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default ProblemItem;
