import {Sidebar} from "./components/Sidebar.jsx";
import {Feed} from "./components/Feed.jsx";
import {Rightbar} from "./components/Rightbar.jsx";
import {Box, createTheme, Stack, ThemeProvider} from "@mui/material";
import {Navbar} from "./components/Navbar.jsx";
import {useState} from "react";

function App() {
    const [mode, setMode] = useState("light")

    const darkTheme = createTheme({
        palette:{
            mode:mode,
        }
    })

  return (
      <ThemeProvider theme={darkTheme}>
          <Box bgcolor={"background.default"} color={"text.primary"}>
              <Navbar/>
              <Stack direction="row" spacing={2} justifyContent="space-between">
                  <Sidebar setMode={setMode} mode={mode}/>
                  <Feed/>
                  <Rightbar/>
              </Stack>
          </Box>
      </ThemeProvider>
  )
}

export default App
