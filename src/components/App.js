import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Carousel from "./Carousel";

const theme = createMuiTheme({
  useNextVariants: true,
  palette: {
    type: "dark",
    background: {
      default: "#111"
    }
  }
});

function App() {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Carousel />
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
