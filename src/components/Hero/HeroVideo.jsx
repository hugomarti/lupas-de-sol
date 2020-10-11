import React from "react";
import { Box, ResponsiveContext, Video } from "grommet";
import ContentBox from "./ContentBox";

const HeroVideo = () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          direction={size === "small" ? "column" : "row"}
          pad={{ top: "5vh" }}
          height="60vh"
        >
          <Box width={size === "small" ? "100%" : "80vw"}>
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
          </Box>
          <Box
            // style={{
            //   position: "absolute",
            //   zIndex: -1,
            //   left: "0rem",
            //   bottom: "0rem",
            // }}
            background="dark-1"
            justify="center"
            align="center"
            pad="medium"
          >
            <ContentBox />
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default HeroVideo;
