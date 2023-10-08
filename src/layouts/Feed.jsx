import { Box } from "@mui/system";
import * as React from "react";
import Post from "../components/Post";
const Feed = () => {
  return (
    <Box p={2} flex={4}>
      <Post img={"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} />
      <Post img={"https://images.unsplash.com/photo-1551782450-a2132b4ba21d"} />
      <Post img={"https://images.unsplash.com/photo-1533827432537-70133748f5c8"}/>
    </Box>
  );
};
export default Feed;
