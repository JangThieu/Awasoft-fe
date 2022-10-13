import React from "react";
import styled from "styled-components";
import Title from "./Title";
import example1 from "assets/example1.png";
import example2 from "assets/example2.png";
import example3 from "assets/example3.jpg";
import play from "assets/play.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { blogsAnimations } from "animations";

export default function Example() {
  const [element, controls] = useScroll();
  const blogsData = [
    {
      title: "MERN Memories",
      src: example1,
      type: ["Mongo", "Express", "React", "Node"],
      description:
        "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
    },
    {
      title: "E-Commerce",
      src: example2,
      type: ["React", "JavaScript"],
      description:
        "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio",
    },
    {
      title: "Unichat",
      src: example3,
      type: ["React", "ChatEngine", "Firebase"],
      description:
        "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    },
  ];
  return (
    <Section id="example" ref={element}>
      <Title value="Example" />
      <div className="decoration"></div>
      <div className="blogs">
        {blogsData.map((items, i) => {
          return (
            <motion.div
              className="blog"
              key={i}
              variants={blogsAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="image">
                <img src={items.src} alt="Placeholder" className="image-size" />
              </div>
              <div className="title">
                <h3>{items.title}</h3>
              </div>
              <TypeList className="type">
                {items.type.map((types, j) => {
                  return <Type key={j}>{types}</Type>;
                })}
              </TypeList>
              <div className="description">
                <p>{items.description}</p>
              </div>
              <div className="more">
                <img src={play} alt="play" />
                <span>Read more</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  .decoration {
    position: absolute;
    height: 21rem;
    width: 70vw;
    border: 0.5rem solid var(--secondary-color);
    left: 15%;
    top: -2rem;
  }
  .blogs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 5rem 20rem;
    .blog {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .image {
        height: 14rem;
        background-color: #a686f0af;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .image-size {
        width: 100%;
        height: 100%;
      }
      .title {
        h3 {
          color: var(--secondary-color);
          font-size: 2rem;
        }
      }
      .type {
        color: var(--primary-color);
        font-weight: bolder;
        text-transform: uppercase;
        margin-top: 2rem;
      }

      .description {
        height: 10rem;
        color: var(--primary-color);
      }
      .more {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        margin-top: 2rem;
        span {
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 0;
    .decoration {
      display: none;
    }
    .blogs {
      padding: 0 2rem;
      grid-template-columns: 1fr;
      margin: 0 1rem;
    }
  }
`;

const TypeList = styled.div`
  color: var(--primary-color);
  font-weight: bolder;
  text-transform: uppercase;
  display: flex;
  gap: 2rem;
`;

const Type = styled.span`
  font-size: 1rem;
`;
