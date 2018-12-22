import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "./CardItem";
import { API_URL } from "../config";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Carousel extends Component {
  state = {
    items: [],
    showing: [],
    page: 1
  };
  componentDidMount() {
    fetch(`${API_URL}/users/1/items?amt=16`)
      .then(res => res.json())
      .then(json => this.setState({ items: json.items }));
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.list}
            justify="center"
            spacing={16}
          >
            {this.state.items.map(item => (
              <Grid key={item.id} item>
                <CardItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Carousel);
