import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CSSTransitionGroup } from "react-transition-group";

const styles = {
  slideAppear: {
    opacity: 0.01
  },
  slideAppearActive: {
    opacity: 1,
    transition: "opacity 0.5s ease-in-out"
  },
  slideEnterNext: {
    transform: "translateX(100%)"
  },
  slideEnterPrev: {
    transform: "translateX(-100%)"
  },
  slideEnterActive: {
    transform: "translateX(0)",
    transition: "transform 0.5s ease-in-out"
  },
  slideExit: {
    transform: "translateX(0)"
  },
  slideExitNextActive: {
    transform: "translateX(-100%)",
    transition: "transform 0.5s ease-in-out"
  },
  slideExitPrevActive: {
    transform: "translateX(100%)",
    transition: "transform 0.5s ease-in-out"
  }
};

const Slide = props => {
  const { classes, toRight = true, timeout = 500, children } = props;
  return (
    <CSSTransitionGroup
      transitionName={{
        appear: classes.slideAppear,
        appearActive: classes.slideAppearActive,
        enter: toRight ? classes.slideEnterNext : classes.slideEnterPrev,
        enterActive: classes.slideEnterActive,
        leave: classes.slideExit,
        leaveActive: toRight
          ? classes.slideExitNextActive
          : classes.slideExitPrevActive
      }}
      transitionAppearTimeout={timeout}
      transitionEnterTimeout={timeout}
      transitionLeaveTimeout={timeout}
    >
      {children}
    </CSSTransitionGroup>
  );
};

Slide.propTypes = {
  timeout: PropTypes.number,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  toRight: PropTypes.bool
};

export default withStyles(styles)(Slide);
