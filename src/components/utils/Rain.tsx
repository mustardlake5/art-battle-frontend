type RainProps = {
  width: number;
};

const Rain = ({ width }: RainProps) => {
  return (
    <svg
      id="rain"
      width={width}
      viewBox="0 0 62 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        className="drop"
        x1="31"
        y1="66"
        x2="31"
        y2="116"
        stroke="#A6C1DA"
      />
    </svg>
  );
};

export default Rain;
