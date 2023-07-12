"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "primereact/carousel";
// import { Image } from "primereact/image";
import Image from "next/image";
const imgTemplate = (src) => {
  return (
    <Image
      src={src}
      alt="partner"
      width={150}
      height={150}
      objectFit="cover"
      className="mx-auto my-auto"
    />
  );
};
const PartnerCarousel = ({ partnersImgs }) => {
  const [imgsArr, setImgsArr] = useState([]);
  useEffect(() => {
    setImgsArr(partnersImgs);
  }, []);
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "479px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  return (
    <Carousel
      responsiveOptions={responsiveOptions}
      value={imgsArr}
      numVisible={3}
      numScroll={1}
      showIndicators={false}
      autoplayInterval={3000}
      circular
      itemTemplate={imgTemplate}
      // pt={{ item: { className: "" } }}
    />
  );
};

export default PartnerCarousel;
