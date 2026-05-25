import { useEffect } from "react";
import "./LayoutEffects.css";

const LayoutEffects = () => {

  useEffect(() => {

    const glow =
      document.querySelector(".global-mouse-glow");

    const moveGlow = (e) => {

      if(glow){

        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;

      }

    };

    window.addEventListener(
      "mousemove",
      moveGlow
    );

    return () => {

      window.removeEventListener(
        "mousemove",
        moveGlow
      );

    };

  }, []);

  return (

    <>
      <div className="global-grid"></div>

      <div className="global-mouse-glow"></div>

      <div className="global-orb orb-left"></div>

      <div className="global-orb orb-right"></div>
    </>

  );

};

export default LayoutEffects;