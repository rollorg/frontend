import React from "react";
import { CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";

interface SwipeTransitionProps {
  children: React.ReactNode;
}

const SwipeTransition: React.FC<SwipeTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={700}
      classNames="swipe"
      key={location.key}
    >
      <div>{children}</div>
    </CSSTransition>
  );
};

export default SwipeTransition;
