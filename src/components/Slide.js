import React from "react";
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
  const { classes, isNext, timeout, children } = props;
  return (
    <CSSTransitionGroup
      transitionName={{
        appear: classes.slideAppear,
        appearActive: classes.slideAppearActive,
        enter: isNext ? classes.slideEnterNext : classes.slideEnterPrev,
        enterActive: classes.slideEnterActive,
        leave: classes.slideExit,
        leaveActive: isNext
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

export default withStyles(styles)(Slide);
