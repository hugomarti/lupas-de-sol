import React from "react";
import { Box, ResponsiveContext, Video } from "grommet";
import ContentBox from "./ContentBox";

const HeroVideo = () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          direction={size === "small" ? "column" : "row"}
          pad={size === "small" ? { top: "7vh" } : { top: "8vh" }}
          height={size === "small" ? "65vh" : "76vh"}
        >
          <Box flex={{ grow: 1, shrink: 1 }}>
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
            background="dark-1"
            justify="center"
            align="center"
            pad="medium"
            flex={{ grow: 1, shrink: 1 }}
          >
            <ContentBox />
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default HeroVideo;
