import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardItem from "./CardItem";
import { API_URL } from "../config";

const styles = theme => ({
  root: {
    width: "866px",
    margin: "auto"
  }
});

class Carousel extends Component {
  state = {
    items: [],
    currentIdx: 0,
    length: 4,
    maxLength: 16
  };
  componentDidMount() {
    fetch(`${API_URL}/users/1/items?amt=16`)
      .then(res => res.json())
      .then(json => this.setState({ items: json.items }));
  }
  handlePrevious = () => {
    this.setState(prevState => {
      const newIdx = prevState.currentIdx - prevState.length;
      return newIdx >= 0 ? { currentIdx: newIdx } : prevState;
    });
  };
  handleNext = () => {
    const { maxLength } = this.state;
    this.setState(prevState => {
      const newIdx = prevState.currentIdx + prevState.length;
      return newIdx < maxLength ? { currentIdx: newIdx } : prevState;
    });
  };
  render() {
    const { classes } = this.props;
    const { currentIdx, length, items } = this.state;
    const showing = items.filter((item, index) => {
      return index >= currentIdx && index < currentIdx + length;
    });
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Top Recommendations For You
          </Typography>
          <Grid
            container
            className={classes.list}
            justify="center"
            spacing={16}
          >
            {showing.map(item => (
              <Grid key={item.id} item>
                <CardItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <button onClick={this.handlePrevious}>Previous</button>
        <button onClick={this.handleNext}>Next</button>
      </Grid>
    );
  }
}

export default withStyles(styles)(Carousel);
