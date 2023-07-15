import React from "react";
import ContactForm from "./ContactForm";
import Link from "next/link";
import Hwave from "public/Assets/wave-h.svg";
import Image from "next/image";

const ContactDetail = ({ href, primeIcon, text }) => {
  return (
    <div className=" flex items-start my-4">
      <i className={`pi ${primeIcon} fill-white w-6 h-6 mr-4`}></i>
      <Link href={href || "#"} className="opacity-80 text-sm">
        {text}
      </Link>
    </div>
  );
};

const ContactCard = ({ countries }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full shadow-Card rounded-2xl bg-white">
      <div className="pt-8 flex flex-col items-start md:py-16 px-8">
        <h3 className="text-[#344767ff] mb-4 ">Just afew fields to fill...</h3>
        <span className="mb-8 text-xl">
          Setting up the most suitable services for you.
        </span>
        <ContactForm countries={countries} />
      </div>
      {/*  */}
      <div className=" relative flex flex-1 flex-col justify-center pl-0 lg:pl-24 rounded-tr-none lg:rounded-tr-2xl rounded-bl-2xl lg:rounded-bl-none rounded-br-2xl bg-[url('/Assets/bg-curved.jpg')] bg-cover overflow-hidden text-white">
        <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-b from-[#079ea8] to-[#005d63eb] opacity-90" />
        <Image
          src={Hwave}
          alt=""
          className="hidden lg:block top-0 left-[-1px] right-auto w-auto h-full z-[2] absolute object-cover "
          width={1500}
          height={1500}
        />
        <div className=" z-[1] flex flex-col items-start p-16">
          <h2 className="text-3xl font-bold">Contact Information</h2>
          <p className="opacity-80">
            Fill up the form and our Team will get back to you within 24 hours.
          </p>
          <div className="flex flex-col w-full my-8 items-start">
            <ContactDetail
              href="tel:+201095722947"
              primeIcon="pi-phone"
              text="+201095722947"
            />
            <ContactDetail
              href="mailto:sales@iees-co.com?subject="
              primeIcon="pi-envelope"
              text="sales@iees-co.com"
            />
            <ContactDetail
              href=""
              primeIcon="pi-map-marker"
              text="18 St. Zahrah Al Madaen, Joseph Tito, Second floor, Al Nozha, Cairo, Egypt"
            />
          </div>
          <div className="flex items-start w-[200px]">
            <Link href={`#`}>
              <i className="pi pi-linkedin fill-white w-6 h-6 mr-7" />
            </Link>
            <Link href={`#`}>
              <i className="pi pi-twitter fill-white w-6 h-6 mr-7" />
            </Link>
            <Link href={`#`}>
              <i className="pi pi-facebook fill-white w-6 h-6 mr-7" />
            </Link>
            <Link href={`#`}>
              <i className="pi pi-instagram fill-white w-6 h-6 mr-7" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
