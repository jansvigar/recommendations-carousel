import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    width: 200
  },
  media: {
    height: 300,
    position: "relative"
  },
  likeIcon: {
    fontSize: 32,
    color: "#fff",
    "&:hover": {
      color: "red"
    }
  },
  likeButton: {
    position: "absolute",
    right: 5,
    top: 5,
    backgroundColor: "transparent",
    cursor: "pointer",
    border: 0,
    margin: 0,
    padding: 0
  }
});

function CardItem(props) {
  const { classes, item } = props;
  const handleLikeIconClick = id => () => {
    props.handleItemLike(id);
  };
  return (
    <Card className={classes.card}>
      {item ? (
        <React.Fragment>
          <CardMedia className={classes.media} image={item.image}>
            <button
              className={classes.likeButton}
              onClick={handleLikeIconClick(item.id)}
            >
              <FavoriteIcon className={classes.likeIcon} />
            </button>
          </CardMedia>
        </React.Fragment>
      ) : null}
    </Card>
  );
}

export default withStyles(styles)(CardItem);
