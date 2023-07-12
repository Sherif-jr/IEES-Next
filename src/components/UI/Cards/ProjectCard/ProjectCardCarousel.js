"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Galleria } from "primereact/galleria";

function ProjectCarousel({ imgsLinks, projectName }) {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const galleria = useRef();

  const imgTemplate = (link) => {
    return (
      <div
        onClick={(e) => {
          galleria.current.show();
        }}
        className="w-full min-h-[400px] relative group after:absolute after:w-full after:h-full after:hover:backdrop-brightness-50 after:cursor-pointer overflow-hidden bg-black"
      >
        <i
          style={{ fontSize: "2rem" }}
          className="pi pi-window-maximize text-white opacity-0 absolute left-1/2 top-1/2 z-[1] group-hover:opacity-100 cursor-pointer"
        />
        <Image
          src={link}
          alt={projectName || "project image"}
          className="aspect-square"
          fill
          objectFit="contain"
        />
      </div>
    );
  };
  const imgTemplateFullScreen = (link) => {
    return (
      <div
        style={{ width: "100%", overflow: "hidden" }}
        className="relative aspect-square"
      >
        <Image
          src={link}
          alt={`alt`}
          className="aspect-square"
          fill
          objectFit="contain"
        />
      </div>
    );
  };
  const thumbTemplate = (link) => {
    return (
      <div
        style={{ width: "50px", height: "50px", overflow: "hidden" }}
        className="relative"
      >
        <Image src={link} alt={`alt`} className="aspect-square" fill />
      </div>
    );
  };

  const responsiveOptionsCarousel = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "479px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const responsiveOptionsGalleria = [
    {
      breakpoint: "1199px",
      numVisible: 2,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
    },
    {
      breakpoint: "479px",
      numVisible: 1,
    },
  ];

  return (
    <>
      <div className="w-full">
        <Galleria
          // responsiveOptions={responsiveOptionsGalleria}
          value={imgsLinks}
          numVisible={8}
          thumbnail={thumbTemplate}
          circular
          item={imgTemplate}
        />
      </div>

      <Galleria
        numVisible={8}
        activeIndex={activeIndex}
        ref={galleria}
        value={imgsLinks}
        // responsiveOptions={responsiveOptionsGalleria}
        item={imgTemplateFullScreen}
        thumbnail={thumbTemplate}
        circular
        showItemNavigators
        fullScreen
      />
    </>
  );
}

export default ProjectCarousel;
