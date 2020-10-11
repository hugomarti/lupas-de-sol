import React from "react";
import { Box, Video } from "grommet";
import ContentBox from "./ContentBox";

const HeroVideo = () => {
  return (
    <Box style={{ position: "relative" }} height="70vh">
      <Video
        fit="cover"
        controls={false}
        loop
        autoPlay
        muted
        preLoad
        style={{ zIndex: "-1" }}
      >
        <source
          key="video"
          src={require("../../assets/pexels-moe-magners-5270480.mp4")}
        />
      </Video>
      <Box
        style={{
          position: "absolute",
          zIndex: -1,
          left: "0rem",
          bottom: "0rem",
        }}
        background="rgba(0,0,0,0.2)"
        pad="1.5rem"
        align="center"
      >
        <ContentBox />
      </Box>
    </Box>
  );
};

export default HeroVideo;
