import React, { useState } from "react";
import styled from "styled-components";
import Title from "components/Title";
import { contactAnimations } from "animations";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import axios from "axios";

function Contact() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    axios.create({
      baseURL: "http://localhost:8080/awasoft-backend/public/api/",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NjBhZGMwNC03N2E5LTQwODMtYWE5ZC03YzdiMTE0MDZhM2QiLCJqdGkiOiIxOTJlNWYyYzhhYzU4NmFjNTdhMGU1ZjFmOTQxYjI3MGVjNjAzMmYxZTZkOWM1NGU3OGI4ZjY3NmRhZjFiZDA5YzM1NThmZDA1MTY0OWQ4MyIsImlhdCI6MTY0OTc3ODE4MC41OTU0NDksIm5iZiI6MTY0OTc3ODE4MC41OTU0NTEsImV4cCI6MTY4MTMxNDE4MC41ODA1MzIsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.S_fP9y6PFW6mdWhEd1ea0InJyiEDUO5oyOC-yCKMQXQs5lFPAmSY-b81mfh-7UIf7qg3sUIaIaA5lHL25CmdKATnV7fVmOKM47f1fxTlgsSdiSXYFkVwdTUEuREtaUwW5yiZycen1rHoUFM87F4qpQrsKjYMQyRoYTf-sIB3L-i0Comn0xuDYE9Yi6gISEeGn61cKJB0DtMZqsom7FNWLJaVywnGi8zv_D02AHxrayMbxwZi1FFjtY054R_kGpdeqsMtXuKf9KXL-jzLK-TUGtDIMBLgBwlCozXHUckbp2UYTNJjGQ54mXX8BRnVBEq07XQGJ5rEQEKmyfh2GkKtj67WhI7osFVhRf7FXReefYksSzp-zoE-Gzyfsw6hLvMMWT8EZLnifsQIAuh82JhhT4fShdY0_LaCLsOI3YaG_WZSSyDkGtBG5pdQsYEpKGIeE__PYRM2f6rbjTyr3lNwGh3W5Dqa-7El5Ner3MyZlmx_ER1u6aHOrJgw3cV8Zi1XKqQ03WteUj1GgHFXwhBgZsffxAy_mTilYd1klYb6o_4RlzTHll0NBhTCRVodbZe2-2oykAiD8zu7K_XcIhCso1ClpPyGVLsVY38yCeGlVdZDkzYBZlYzgJXpZXuo_OAx_cEEDec0iT1otNttxkuIQXjNsZoW-t7kvIdLCtie4xM",
      },
    });
  };

  const hanldeChange = (e) => {
    console.log(e.target.value);
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const [element, controls] = useScroll();
  return (
    <Section id="contact" ref={element}>
      <Title value="contact" />
      <motion.div
        className="contact"
        animate={controls}
        variants={contactAnimations}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
      >
        <div className="contact__title">
          <p>Stay in touch with us</p>
          <h2>
            Please feel free to contact us with your opinions, consultations,
            estimates, etc.
          </h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Use from on the right to contact us or just to say hi!</h4>
            <p>We will contact you after confirming the contents.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod
              molestias animi, ad quibusdam et accusantium nisi architecto at
              vitae
            </p>
            <div>
              <p>
                <strong>Address:</strong> 11A DANG MINH KHIEM, DA NANG.
              </p>
              <p>
                <strong>Email:</strong> awagit@gmail.com
              </p>
              <p>
                <strong>Website:</strong> www.awagit.com
              </p>
            </div>
          </div>
          <form className="contact__data__form" onClick={handleSubmit}>
            <input
              type="text"
              placeholder="name"
              name="name"
              value={formValue.name}
              onChange={hanldeChange}
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              value={formValue.email}
              onChange={hanldeChange}
            />
            <textarea
              placeholder="message"
              name="message"
              value={formValue.message}
              onChange={hanldeChange}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .contact {
    color: var(--primary-color);
    margin: 0 23rem;
    &__title {
      margin: 6rem 0;
      p {
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: var(--primary-color);
      }
      h2 {
        color: var(--secondary-color);
        font-size: 2rem;
      }
    }
    &__data {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
      &__description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4 {
          font-size: 1.5rem;
        }
        p {
          letter-spacing: 0.1rem;
          text-align: justify;
        }
        div {
          p {
            strong {
              text-transform: uppercase;
            }
          }
        }
      }

      &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        input,
        textarea {
          text-transform: uppercase;
          border: none;
          border-bottom: 0.1rem solid var(--secondary-color);
          width: 100%;
          color: var(--secondary-color);
          letter-spacing: 0.2rem;
          padding-bottom: 0.7rem;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: var(--secondary-color);
            letter-spacing: 0.4rem;
          }
        }
        textarea {
          width: 100% !important;
          height: 50%;

          resize: none;
        }
        button {
          width: 100%;
          background-color: transparent;
          border: 0.1rem solid var(--secondary-color);
          height: 3rem;
          color: var(--secondary-color);
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            background-color: var(--secondary-color);
            color: var(--primary-color);
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .contact {
      margin: 1rem;
      padding: 0 1rem;
      &__title {
        margin: 0;
        text-align: center;
        p {
          font-size: 0.8rem;
        }
        h2 {
          font-size: 1.3rem;
        }
      }
      &__data {
        grid-template-columns: 1fr;
        margin: 0;
        p {
          text-align: left;
        }
        &__form {
          input {
          }
          button {
            height: 6rem;
          }
        }
      }
    }
  }
`;

export default Contact;
