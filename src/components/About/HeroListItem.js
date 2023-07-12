import React from "react";

const HeroListItem = ({ text }) => {
  return (
    <div className="w-auto sm:w-[98%] md:w-full h-auto flex flex-row justify-start items-start mb-4">
      <li className="list-none list-item">
        <div className="flex w-auto h-auto items-center font-light justify-start fill-[#82bb27ff] text-[#005d63ff]">
          <svg viewBox="0 0 1024 1024" className="h-8 opacity-40 my-0 mr-2">
            <path d="M426.667 853.333c-34.219 0-66.347-13.312-90.539-37.504-24.149-24.149-37.461-56.32-37.461-90.496s13.312-66.347 37.504-90.539l122.795-122.795-122.795-122.837c-24.192-24.149-37.504-56.32-37.504-90.496s13.312-66.347 37.504-90.539c48.341-48.299 132.651-48.341 181.035 0.043l303.829 303.829-303.872 303.829c-24.149 24.192-56.277 37.504-90.496 37.504zM426.667 256c-11.435 0-22.101 4.437-30.165 12.459-8.064 8.107-12.501 18.816-12.501 30.208s4.437 22.101 12.501 30.165l183.125 183.168-183.125 183.168c-8.064 8.064-12.501 18.731-12.501 30.165s4.437 22.101 12.501 30.165c16.128 16.171 44.245 16.128 60.331 0.043l243.541-243.541-243.541-243.499c-8.064-8.064-18.731-12.501-30.165-12.501z"></path>
          </svg>
          <p className="inline-block text-xl sm:text-3xl md:text-2xl text-left tracking-[.05em] w-auto md:w-full ">
            {text}
          </p>
        </div>
      </li>
    </div>
  );
};

export default HeroListItem;
