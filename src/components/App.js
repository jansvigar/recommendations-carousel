import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Carousel from "./Carousel";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Typography variant="h4" gutterBottom>
        Top Recommendations For You
      </Typography>
      <Carousel />
    </React.Fragment>
  );
}

export default App;
