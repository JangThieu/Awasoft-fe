import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import styled from "styled-components";
import { motion } from "framer-motion";
import { contactAnimations } from "animations";
import { useScroll } from "./useScroll";

export const Maps = () => {
  const [element, controls] = useScroll();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCocMojEhEjVN6QXoTeT-qIFyh3kQvXV4c",
  });

  const position = {
    lat: 16.072117,
    lng: 108.171475,
  };

  return (
    <Section ref={element}>
      <motion.div
        className="maps"
        animate={controls}
        variants={contactAnimations}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
      >
        <div className="h-96">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={position}
              zoom={15}
            >
              <Marker
                position={position}
                options={{
                  label: {
                    text: "11A Đặng Minh Khiêm",
                    className: "title",
                  },
                }}
              />
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>
      </motion.div>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  .maps {
    height: 100vh;
  }
`;
