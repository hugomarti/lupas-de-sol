import React from "react";
import { Box, Video, ResponsiveContext } from "grommet";
import ContentBox from "./ContentBox";

const HeroVideo = () => {
  return (
    <Box style={{ position: "relative" }}>
      <Video
        fit="cover"
        controls={false}
        loop
        autoPlay
        muted
        preLoad
        style={{ zIndex: "-6" }}
      >
        <source
          key="video"
          src={require("../../assets/pexels-moe-magners-5270480.mp4")}
        />
      </Video>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <Box
              style={{
                position: "absolute",
                zIndex: 1,
                left: "0rem",
                bottom: "0rem",
              }}
              background="rgba(0,0,0,0.2)"
              pad="1.5rem"
              align="center"
            >
              <ContentBox />
            </Box>
          ) : (
            <Box
              style={{
                position: "absolute",
                left: "1rem",
                bottom: "2rem",
                margin: "2rem",
              }}
              background="rgba(0,0,0,0.2)"
              pad="1.5rem"
              align="center"
            >
              <ContentBox />
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Box>
  );
};

export default HeroVideo;
