import { useEffect } from "react";
import Star from "./Star";

const StarBox = () => {
  useEffect(() => {
    const starBox = document.getElementById("starBox")!;
    const innerStar = document.getElementById("innerStar")!;
    const colorList = [
      "fill-yellow-400",
      "fill-red-600",
      "fill-blue-600",
      "fill-green-600",
    ];

    function pickColor(colorList: string[]) {
      return colorList[Math.floor(Math.random() * colorList.length)];
    }

    function displayStar() {
      const starClone = innerStar.cloneNode(true) as Element;
      starClone.addEventListener("animationend", function () {
        starClone.remove();
      });
      const horizon = `${Math.random() * 100 - 12.5}%`;
      const vertical = `${Math.random() * 100 - 12.5}%`;
      const size = `${Math.random() * 50}%`;

      starClone.setAttribute("x", horizon);
      starClone.setAttribute("y", vertical);
      starClone.setAttribute("width", size);
      starClone.children[0].setAttribute("class", pickColor(colorList));

      starBox.appendChild(starClone);
    }
    const intervalId = setInterval(displayStar, 500);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <svg
      id="starBox"
      viewBox="0 0 1500 1000"
      className="absolute w-full h-full"
    >
      <Star />
    </svg>
  );
};

export default StarBox;
