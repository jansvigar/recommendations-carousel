import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Fade from "./Fade";

const styles = theme => ({
  card: {
    width: 200,
    maxWidth: 200
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
  },
  label: {
    maxWidth: 200
  }
});

function CardItem(props) {
  const { classes, item, handleItemLike } = props;
  const handleLikeIconClick = id => () => {
    handleItemLike(id);
  };
  return (
    <React.Fragment>
      <Fade timeout={1000}>
        <Card className={classes.card}>
          {item ? (
            <CardMedia className={classes.media} image={item.image}>
              <button
                className={classes.likeButton}
                onClick={handleLikeIconClick(item.id)}
              >
                <FavoriteIcon className={classes.likeIcon} />
              </button>
            </CardMedia>
          ) : null}
        </Card>

        <Typography variant="subtitle2" className={classes.label}>
          {item.name}
        </Typography>
        <Typography variant="caption" className={classes.label}>
          {item.definingInfo}
        </Typography>
      </Fade>
    </React.Fragment>
  );
}

export default withStyles(styles)(CardItem);
