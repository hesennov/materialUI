import { useState } from "react";
import "./App.css";
import Sidebar from "./layouts/Sidebar";
import Rightbar from "./layouts/Rightbar";
import Feed from "./layouts/Feed";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Stack } from "@mui/system";
import Navbar from "./layouts/Navbar";
import Add from "./components/Add";

function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
