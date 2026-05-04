import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const MovieCardPortal = ({ children, style, onMouseEnter, onMouseLeave }) => {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    const portal = el.current;
    Object.assign(portal.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      pointerEvents: "none",
      zIndex: "9999",
    });
    document.body.appendChild(portal);
    return () => document.body.removeChild(portal);
  }, []);

  return ReactDOM.createPortal(
    <div
      style={{ ...style, pointerEvents: "all", position: "absolute" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>,
    el.current,
  );
};

export default MovieCardPortal;
