import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import play from "assets/play.png";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animations";

const data = [
  {
    id: "1",
    title: "Agency",
    subtitle: "Digital Crafters",
  },
  {
    id: "2",
    title: "Email",
    subtitle: "awagit@gmail.com",
  },
  {
    id: "3",
    title: "Mobile",
    subtitle: "+84 123456789",
  },
  {
    id: "4",
    title: "Address",
    subtitle: "11A DANG MINH KHIEM, DA NANG",
  },
  {
    id: "5",
    title: "Services",
    subtitle: "Corporate Identity Full Coding ",
  },
  {
    id: "6",
    title: "Working Hours",
    subtitle: "Monday to Friday 08:00 to 18:00",
  },
];

export default function Home() {
  return (
    <Section id="home">
      <Navbar />
      <motion.div
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
        className="home"
      >
        <div className="content">
          <div className="title">
            <h1>Awagit Software</h1>
          </div>
          <div className="subTitle">
            <p>
              Create new value together with customers Awagit, a company that
              lights up the light of happiness
            </p>
          </div>
          <img src={play} alt="Play Button" />
        </div>
      </motion.div>
      <motion.div
        className="info"
        variants={homeInfoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="grid">
          {data.map((items, index) => (
            <div className="col" key={index}>
              <strong>{items.title}</strong>
              <p>{items.subtitle}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background: linear-gradient(268.43deg, #93216c 5.3%, #23073a 53.26%);
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  .home {
    height: 100%;
    .content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      padding-left: 18rem;
      margin-top: 8rem;
      width: 60%;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: white;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;
