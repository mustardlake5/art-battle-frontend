import { useEffect } from "react";
import Rain from "./Rain";

const RainBox = () => {
  useEffect(() => {
    const rainBox = document.getElementById("rainBox")!;
    const rain = document.getElementById("rain")!;

    rain.setAttribute("x", "-300%");

    function displayRain() {
      const rainClone = rain.cloneNode(true) as Element;
      rainClone.children[0].addEventListener("animationend", function () {
        rainClone.remove();
      });
      const horizon = `${Math.random() * 100}%`;

      rainClone.setAttribute("x", horizon);

      rainBox.appendChild(rainClone);
    }
    const intervalId = setInterval(displayRain, 150);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <svg
      id="rainBox"
      viewBox="0 0 1500 1000"
      className="absolute w-full h-full"
    >
      <Rain width={200} />
    </svg>
  );
};

export default RainBox;
