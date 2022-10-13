import React from "react";
import styled from "styled-components";
import {
  BsBehance,
  BsDiscord,
  BsFacebook,
  BsTelegram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { useScroll } from "./useScroll";
import { footerLogoAnimations, footerTextAnimations } from "animations";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";

function Footer() {
  const [element, controls] = useScroll();
  return (
    <Foot ref={element}>
      <motion.span
        animate={controls}
        variants={footerTextAnimations}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        &copy; {new Date().getFullYear()} AWAGIT VIET NAM CO., LTD. ALL RIGHTS
        RESERVED.
      </motion.span>
      <motion.div
        className="footer__social__icons"
        animate={controls}
        variants={footerLogoAnimations}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        <Tippy placement="top" content="Telegram" delay={[0, 50]}>
          <Button className="social_btn">
            <BsTelegram />
          </Button>
        </Tippy>
        <Tippy placement="top" content="Discord" delay={[0, 50]}>
          <Button className="social_btn">
            <BsDiscord />
          </Button>
        </Tippy>
        <Tippy placement="top" content="Behance" delay={[0, 50]}>
          <Button className="social_btn">
            <BsBehance />
          </Button>
        </Tippy>
        <Tippy placement="top" content="Twitter" delay={[0, 50]}>
          <Button className="social_btn">
            <BsTwitter />
          </Button>
        </Tippy>
        <Tippy placement="top" content="Facebook" delay={[0, 50]}>
          <Button className="social_btn">
            <BsFacebook />
          </Button>
        </Tippy>
        <Tippy placement="top" content="Youtube" delay={[0, 50]}>
          <Button className="social_btn">
            <BsYoutube />
          </Button>
        </Tippy>
      </motion.div>
    </Foot>
  );
}

const Foot = styled.footer`
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  .footer__social__icons {
    display: flex;
    gap: 1rem;
    svg {
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const Button = styled.button`
  position: relative;
  display: flex;
  font-size: 1.4rem;
  color: #fff;
  background-color: transparent;
  padding: 4px 10px;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  border: none;
  &:hover {
    color: var(--secondary-color);
  }
`;

export default Footer;
