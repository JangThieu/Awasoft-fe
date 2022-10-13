/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import Title from "./Title";
import pricing1 from "assets/pricing1.png";
import pricing2 from "assets/pricing2.png";
import php from "assets/php.png";
import cakephp from "assets/cakephp.png";
import docker from "assets/docker.png";
import java from "assets/java.png";
import laravel from "assets/laravel.png";
import mongodb from "assets/mongodb.png";
import mysql from "assets/mysql.png";
import nodejs from "assets/nodejs.png";
import python from "assets/python.png";
import react from "assets/react.png";
import swift from "assets/swift.png";
import vue from "assets/vue.png";
import html from "assets/html.png";
import css3 from "assets/css.png";
import ruby from "assets/ruby.png";
import aws from "assets/aws.png";
import jquery from "assets/jquery.png";
import wordpress from "assets/wordpress.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { pricingAnimations } from "animations";
export default function Technology() {
  const [element, controls] = useScroll();

  const techs = [
    {
      id: 1,
      imgSrc: php,
      title: "PHP",
    },
    {
      id: 2,
      imgSrc: cakephp,
      title: "Cakephp",
    },
    {
      id: 3,
      imgSrc: docker,
      title: "Docker",
    },
    {
      id: 4,
      imgSrc: java,
      title: "Java",
    },
    {
      id: 5,
      imgSrc: laravel,
      title: "Laravel",
    },
    {
      id: 6,
      imgSrc: mongodb,
      title: "Mongodb",
    },
    {
      id: 7,
      imgSrc: mysql,
      title: "Mysql",
    },
    {
      id: 8,
      imgSrc: nodejs,
      title: "Nodejs",
    },
    {
      id: 9,
      imgSrc: python,
      title: "Python",
    },
    {
      id: 10,
      imgSrc: react,
      title: "React",
    },
    {
      id: 11,
      imgSrc: swift,
      title: "Swift",
    },
    {
      id: 12,
      imgSrc: vue,
      title: "Vue",
    },
    {
      id: 13,
      imgSrc: html,
      title: "HTML",
    },
    {
      id: 14,
      imgSrc: css3,
      title: "CSS",
    },
    {
      id: 15,
      imgSrc: jquery,
      title: "Jquery",
    },
    {
      id: 16,
      imgSrc: ruby,
      title: "Ruby on rails",
    },
    {
      id: 17,
      imgSrc: aws,
      title: "AWS",
    },
    {
      id: 18,
      imgSrc: wordpress,
      title: "Wordpress",
    },
  ];
  return (
    <Section ref={element} id="technologies">
      <Title value="Technologies" />
      <div className="background">
        <img src={pricing1} alt="background" className="bg1" />
        <img src={pricing2} alt="background" className="bg2" />
      </div>
      <div className="techs__title">
        <p>Find your technicals you need</p>
        <h2>With modern technology to help you</h2>
      </div>
      <div className="tech">
        {techs.map((items, index) => (
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          <motion.div
            className="tech__box"
            key={index}
            variant={pricingAnimations}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <img className="tech__image" key={items.id} src={items.imgSrc} />
            <p className="tech__title">{items.title}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  .background {
    .bg1 {
      position: absolute;
      top: -60%;
      left: -5%;
      z-index: -1;
    }
    .bg2 {
      position: absolute;
      right: 0;
      bottom: 5rem;
    }
  }
  .techs__title {
    margin: 6rem 10rem;
    p {
      color: var(--secondary-color);
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
    h2 {
      color: var(--primary-color);
      font-size: 2rem;
    }
  }
  .tech {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
    padding: 0 20rem;

    &__box {
      display: grid;
      justify-content: center;
    }
    &__image {
      width: auto;
      height: 80px;
    }
    &__title {
      display: inline-block;
      text-align: center;
      white-space: nowrap;
    }
  }

  .pricing {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 10rem;
    &__plan {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      &:nth-child(2) {
        .pricing__plan__content {
          padding: 0 5rem;
          border-left: 0.2rem solid var(--primary-color);
          border-right: 0.2rem solid var(--primary-color);
        }
      }
      &__name {
        background-color: var(--primary-color);
        width: 15rem;
        height: 15rem;
        border-radius: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: var(--secondary-color);
        h2 {
          font-size: 2rem;
          line-height: 1.3rem;
        }
        &__price {
          color: white;
          display: flex;
          position: relative;
          span {
            position: absolute;
            top: 1rem;
            left: -0.9rem;
            font-size: 1.3rem;
          }
          p {
            font-size: 4rem;
            font-weight: bold;
          }
        }
      }
      &__content {
        &__features {
          list-style-type: none;
          text-align: center;
          color: var(--primary-color);
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          .line {
            text-decoration: line-through;
          }
          margin-bottom: 2rem;
        }

        &__actions {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: var(--primary-color);
          gap: 0.5rem;
          span {
            text-transform: uppercase;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    background-color: var(--secondary-color);
    .techs__title {
      margin: 0;
      padding: 0 2rem;
      text-align: center;
      h2 {
        font-size: 1.3rem;
      }
    }
    .background {
      display: none;
    }
    .tech {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 0 1rem;
      gap: 2rem;

    }
  }
`;
