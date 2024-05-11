"use client";
import Image from "next/image";
import { useState, useEffect, useCallback, useContext } from "react";
import { Store } from "@/context/Store";
import PersianNavbar from "./navbar/PersianNavbar";
import hr from "../../public/HR-White.svg";
import { motion } from "framer-motion";
import PersianHamMenuNavbar from "./navbar/PersianHamMenuNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function PersianHeader() {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.screen.width <= 650 : null
  );
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { isPersian } = state;

  const changeLanguage = () => {
    dispatch({ type: "CHANGE_LANGUAGE", payload: !isPersian });
  };

  const handleResize = useCallback(() => {
    setIsMobile(
      typeof window !== "undefined" ? window.screen.width <= 650 : null
    );
  }, [typeof window !== "undefined" ? window : null]);

  const menuOpenHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const clicked = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize());
    }
    if(isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
      document.body.style.overflowX = 'hidden';
    }
  }, [
    typeof window !== "undefined"
      ? window.addEventListener("resize", handleResize)
      : null,
      isOpen
  ]);

  return (
    <>
      {isClient ? (
        <header dir="rtl">
            {isPersian ? (
              <small className="language" onClick={changeLanguage}>Eng <FontAwesomeIcon icon={faGlobe}/></small>
            ) : (
              <small className="language font" onClick={changeLanguage}>فارسی <FontAwesomeIcon icon={faGlobe}/></small>
            )}
          <div className="header-container font">
            <div className="logo-wrapper">
              <Image src={hr} width={100} alt="Logo" loading="lazy"/>
            </div>
            {isMobile ? (
              <div className="ham-icon" onClick={menuOpenHandler}>
                <motion.span
                  animate={{ top: [isOpen ? 8 : 0], rotate: [isOpen ? 45 : 0] }}
                ></motion.span>
                <motion.span hidden={isOpen}></motion.span>
                <motion.span
                  animate={{
                    top: [isOpen ? 8 : 18],
                    rotate: [isOpen ? -45 : 0],
                  }}
                ></motion.span>
              </div>
            ) : (
              <PersianNavbar />
            )}
          </div>
        </header>
      ) : (
        <header></header>
      )}
      {isClient ? (
        <motion.div dir="rtl" className="ham-menu ham-menu-persian" animate={{ scaleX: [isOpen ? 1 : 0] }}>
          <PersianHamMenuNavbar clicked={clicked} />
        </motion.div>
      ) : null}
    </>
  );
}
