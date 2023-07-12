"use client";
//ToDo make fully static
import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "/public/Logo.svg";
import HeaderGreenButton from "../UI/Buttons/header-green-button";
import styles from "./header.module.css";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../UI/sheet";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/UI/hover-card";
import { Divider } from "primereact/divider";

const Header = (props) => {
  const pathName = usePathname();
  const overlay = useRef();
  const dropdown = useRef();
  console.log(pathName);

  return (
    <div
      data-role="Header"
      className={`${styles.header} ${props.rootClassName} `}
    >
      <nav
        className={`${styles.headerNav} animate__fadeInDown animate__animated`}
      >
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.headerNavlink}>
            <div className={styles.headerContainer1}>
              <Image
                alt={props.image_alt}
                src={Logo}
                className={styles.headerImage}
              />
              <span className={`${styles.headerText}`}>IEES</span>
            </div>
          </Link>
          <div className={styles.headerMenu}>
            <Link
              href="/"
              className={`${styles.headerNavlink1} Large ${
                pathName === "/" && styles.active
              }`}
            >
              Home
            </Link>
            <HoverCard align="left">
              <div
                ref={dropdown}
                className={`${styles.headerDropdown} list-item group`}
              >
                <HoverCardTrigger>
                  <div className={`${styles.headerDropdownToggle}`}>
                    <span className={`Large`}>Services</span>
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className={`${styles.headerIcon} group-hover:rotate-90`}
                      >
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <ul>
                    <li className={`${styles.headerDropdown} list-item`}>
                      <Link href="/services/project-management">
                        <div className={styles.headerDropdownListItem}>
                          <span
                            className={`${styles.headerDropdownListItemText} ${
                              pathName === "/services/project-management" &&
                              styles.active
                            }`}
                          >
                            Project Management
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li className={`${styles.headerDropdown} list-item`}>
                      <Link
                        href="/services/maintenance-management"
                        className=""
                      >
                        <div className={styles.headerDropdownListItem}>
                          <span className={styles.headerDropdownListItemText}>
                            Maintenance Management
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li className={`${styles.headerDropdown} list-item`}>
                      <Link href="/services/energy-management" className="">
                        <div className={styles.headerDropdownListItem}>
                          <span className={styles.headerDropdownListItemText}>
                            Energy Management
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li className={`${styles.headerDropdown} list-item`}>
                      <Link href="/services/design-management">
                        <div className={styles.headerDropdownListItem}>
                          <span className={styles.headerDropdownListItemText}>
                            Design Services
                          </span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </HoverCardContent>
              </div>
            </HoverCard>
            <Link
              href="/projects"
              className={`${styles.headerNavlink1} Large ${
                pathName === "/projects" && styles.active
              }`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`${styles.headerNavlink1} Large ${
                pathName === "/about" && styles.active
              }`}
            >
              About
            </Link>
          </div>
          <div className={styles.actionContainer}>
            <div className={styles.buttonContainer}>
              <Link href="/contact">
                <HeaderGreenButton
                  button="CONTACT US"
                  rootClassName="header-green-button-root-class-name"
                  className="header-component"
                ></HeaderGreenButton>
              </Link>
            </div>
            <Sheet>
              <SheetTrigger>
                <div data-role="BurgerMenu" className={styles.headerBurgerMenu}>
                  <svg viewBox="0 0 1024 1024" className={styles.headerIcon2}>
                    <path
                      d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                      className=""
                    ></path>
                  </svg>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>IEES</SheetTitle>
                  <SheetDescription> </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col items-center py-6 px-4">
                  <div className="flex flex-col gap-4 w-full">
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className="xl:text-lg border rounded border-gray-200 p-3 xl:p-4 w-full text-center"
                      >
                        Home
                      </Link>
                    </SheetClose>
                    <div className="xl:text-lg border rounded flex flex-col items-center gap-4 border-gray-200 px-4 pt-4 pb-6 w-full text-center ">
                      Services
                      <hr className="h-[1px]  w-1/2 mb-4" />
                      <SheetClose asChild>
                        <Link
                          href="/services/project-management"
                          className="text-sm border rounded border-gray-200 p-3 xl:p-4 w-full text-center"
                        >
                          Project Management
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/services/project-management"
                          className="text-sm border rounded border-gray-200 p-3 xl:p-4 w-full text-center"
                        >
                          Maintenance Management
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/services/project-management"
                          className="text-sm border rounded border-gray-200 p-3 xl:p-4 w-full text-center"
                        >
                          Energy Management
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/services/project-management"
                          className="text-sm border rounded border-gray-200 p-3 xl:p-4 w-full text-center"
                        >
                          Design Services
                        </Link>
                      </SheetClose>
                    </div>
                    <SheetClose asChild>
                      <Link
                        href="/projects"
                        className="border rounded border-gray-200 p-3 xl:p-4 w-full text-center"
                      >
                        Projects
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/about"
                        className="border rounded border-gray-200 p-3 xl:p-4 w-full text-center"
                      >
                        About
                      </Link>
                    </SheetClose>
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Link
                      href="/contact"
                      className="rounded p-3 xl:p-4 w-full text-center bg-[#005d63] text-white hover:bg-[#82bb27]"
                    >
                      contact Us
                    </Link>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* <div data-role="MobileMenu" className="headerMobileMenu">
        <div className="header-top">
          <Link
            href="/"
            className={`${styles.headerNavlink8} animate__fadeIn animate__animated`}
          >
            IEES
          </Link>
          <div
            data-role="CloseMobileMenu"
            className={`${styles.headerCloseMenu} animate__animated`}
          >
            <svg
              viewBox="0 0 1024 1024"
              className={`${styles.headerIcon2} animate__fadeIn animate__animated`}
            >
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className={styles.headerMid}>
          <div className={styles.headerMenu1}>
            <Link
              href="/"
              className="header-mobile-link animate__faster animate__fadeInLeft animate__animated"
            >
              Home
            </Link>
            <span
              className={`${styles.headerMobileLink} animate__fadeInRight animate__faster animate__animated`}
            >
              services
            </span>
            <Link
              href="/maintenance-management"
              className={`${styles.headerMobileSubLink} animate__fadeInRight animate__faster animate__animated`}
            >
              MAINTENANCE MANAGEMENT
            </Link>
            <Link
              href="/project-management"
              className={`${styles.headerMobileSubLink} animate__fadeInRight animate__faster animate__animated`}
            >
              Project MANAGEMENT
            </Link>
            <Link
              href="/energy-management"
              className={`${styles.headerMobileSubLink} animate__fadeInRight animate__faster animate__animated`}
            >
              energy MANAGEMENT
            </Link>
            <Link
              href="/projects"
              className={`${styles.headerMobileSubLink} animate__fadeInRight animate__faster animate__animated`}
            >
              projects
            </Link>
            <Link
              href="/about"
              className={`${styles.headerMobileSubLink} animate__fadeInRight animate__faster animate__animated`}
            >
              About
            </Link>
            <Link
              href="/contact-us"
              className={`${styles.headerMobileSubLink} animate__fadeInRight animate__faster animate__animated`}
            >
              contact us
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

// Header.defaultProps = {
//   second_item: "Maintenance Management",
//   link_servicesLink: "",
//   rootClassName: "",
//   image_src: "",
//   first_item: "Project Management",
//   forth_item: "Design Management",
//   image_alt: "image",
//   button: "Button",
//   third_item: "Energy Management",
// };

// Header.propTypes = {
//   second_item: PropTypes.string,
//   link_servicesLink: PropTypes.string,
//   rootClassName: PropTypes.string,
//   image_src: PropTypes.string,
//   first_item: PropTypes.string,
//   forth_item: PropTypes.string,
//   image_alt: PropTypes.string,
//   button: PropTypes.string,
//   third_item: PropTypes.string,
// };

export default Header;
