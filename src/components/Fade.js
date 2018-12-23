import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CSSTransitionGroup } from "react-transition-group";

const styles = {
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
};

const Fade = props => {
  const { classes, children, timeout = 1000 } = props;
  return (
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
      transitionAppearTimeout={timeout}
      transitionEnterTimeout={timeout}
      transitionLeaveTimeout={timeout}
    >
      {children}
    </CSSTransitionGroup>
  );
};

Fade.propTypes = {
  timeout: PropTypes.number,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Fade);
