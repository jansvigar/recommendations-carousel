import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { CSSTransitionGroup } from "react-transition-group";
import { withStyles } from "@material-ui/core/styles";

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
  },
  fadeEnter: {
    opacity: 0.01
  },
  fadeEnterActive: {
    opacity: 1,
    transition: "opacity 1s ease-in-out"
  },
  fadeExit: {
    opacity: 1
  },
  fadeExitActive: {
    opacity: 0.01,
    transition: "opacity 1s ease-in-out"
  }
});

function CardItem(props) {
  const { classes, item, handleItemLike } = props;
  const handleLikeIconClick = id => () => {
    handleItemLike(id);
  };
  return (
    <React.Fragment>
      <CSSTransitionGroup
        transitionName={{
          appear: classes.fadeEnter,
          appearActive: classes.fadeEnterActive,
          enter: classes.fadeEnter,
          enterActive: classes.fadeEnterActive,
          leave: classes.fadeExit,
          leaveActive: classes.fadeExitActive
        }}
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <Card className={classes.card} key={item.id}>
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
      </CSSTransitionGroup>
    </React.Fragment>
  );
}

export default withStyles(styles)(CardItem);
