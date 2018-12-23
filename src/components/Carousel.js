import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardItem from "./CardItem";
import Slide from "./Slide";
import { USER_ID } from "../config";
import { getUserItems, rateUserItem } from "../api";

const styles = theme => ({
  root: {
    width: "880px",
    margin: "auto",
    paddingTop: "100px",
    paddingBottom: "100px",
    position: "relative"
  },
  listContainer: {
    position: "relative",
    height: 400,
    overflow: "hidden"
  },
  list: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    margin: "auto"
  },
  carouselControl: {
    display: "inline-block",
    position: "absolute",
    top: "48%",
    right: -20,
    width: "2vw",
    height: "2vw",
    border: 0,
    backgroundColor: "transparent",
    boxSizing: "border-box",
    borderBottom: "3px solid white",
    borderLeft: "3px solid white",
    cursor: "pointer",
    padding: "3px",
    outline: "none"
  },
  next: {
    transform: "rotate(-135deg)",
    right: -20
  },
  prev: {
    transform: "rotate(45deg)",
    left: -20
  }
});

class Carousel extends Component {
  state = {
    items: [],
    currentIdx: 0,
    length: 4,
    maxLength: 16,
    isNext: true
  };

  newItems = [];

  componentDidMount() {
    const { maxLength } = this.state;
    getUserItems(USER_ID, 20).then(json => {
      const data = json.items;
      this.setState({ items: data.slice(0, maxLength) }, () => {
        this.newItems.push(...data.slice(maxLength));
      });
    });
  }
  fetchEarly = () => {
    getUserItems(USER_ID, 4, [...this.state.items, ...this.newItems]).then(
      json => this.newItems.push(...json.items)
    );
  };
  handleItemLike = id => {
    rateUserItem(USER_ID, id, "like").then(response => {
      if (this.newItems.length <= 1) this.fetchEarly();

      const newItem = this.newItems.pop();
      let newItems;

      if (newItem) {
        newItems = this.state.items.map(item => {
          return item.id === id ? newItem : item;
        });
      } else {
        newItems = this.state.items.filter(item => {
          return item.id !== id;
        });
      }

      this.setState({ items: newItems });
    });
  };
  handlePreviousClick = () => {
    this.setState(prevState => {
      const newIdx = prevState.currentIdx - prevState.length;
      return newIdx >= 0 ? { currentIdx: newIdx, isNext: false } : prevState;
    });
  };
  handleNextClick = () => {
    const { maxLength } = this.state;
    this.setState(prevState => {
      const newIdx = prevState.currentIdx + prevState.length;
      return newIdx < maxLength
        ? { currentIdx: newIdx, isNext: true }
        : prevState;
    });
  };
  render() {
    const { classes } = this.props;
    const { currentIdx, length, items, isNext } = this.state;
    const showing = items.filter((item, index) => {
      return index >= currentIdx && index < currentIdx + length;
    });

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Top Recommendations For You
          </Typography>
          <Grid item xs={12} className={classes.listContainer}>
            <Slide timeout={500} isNext={isNext}>
              <Grid
                container
                className={classes.list}
                justify="center"
                spacing={16}
                key={currentIdx}
              >
                {showing.map(item => (
                  <Grid key={item.id} item>
                    <CardItem
                      item={item}
                      handleItemLike={this.handleItemLike}
                    />
                  </Grid>
                ))}
              </Grid>
            </Slide>
          </Grid>
        </Grid>
        <button
          className={`${classes.carouselControl} ${classes.prev}`}
          onClick={this.handlePreviousClick}
        />
        <button
          className={`${classes.carouselControl} ${classes.next}`}
          onClick={this.handleNextClick}
        />
      </Grid>
    );
  }
}

export default withStyles(styles)(Carousel);
