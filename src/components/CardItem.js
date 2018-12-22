import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    width: 200
  },
  media: {
    height: 300
  }
});

function CardItem(props) {
  const { classes, item } = props;
  return (
    <Card className={classes.card}>
      {item ? <CardMedia className={classes.media} image={item.image} /> : null}
    </Card>
  );
}

export default withStyles(styles)(CardItem);
