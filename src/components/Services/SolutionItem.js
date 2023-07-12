import React from "react";
const Item = ({ text, sub }) => {
  return (
    <div className="w-full">
      <div className={`flex items-center w-full ${sub && "ml-4"}`}>
        <svg
          viewBox="0 0 1024 1024"
          className="fill-[#004c52ff] my-0 mr-1 md:mr-2 w-4 h-4 "
        >
          <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
        </svg>
        <p className="text-[#004c52ff] w-full text-sm text-left">{text}</p>
      </div>
    </div>
  );
};
const SolutionItem = ({ item }) => {
  return (
    <>
      <Item text={item.content} />
      {item.children &&
        item.children.length > 0 &&
        item.children.map((sol, i) => (
          <Item key={`${sol.substring(4, 8)}>${i}`} sub text={item.content} />
        ))}
    </>
  );
};

export default SolutionItem;
