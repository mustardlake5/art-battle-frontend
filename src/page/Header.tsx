import HeaderBase from "../components/HeaderBase";
import { createHeaderDesign } from "../lib/header";
import { Phase } from "../slices/statusSlice";

type HeaderProps = {
  phase?: Phase;
};

const Header = ({ phase = Phase.INITIAL }: HeaderProps) => {
  const { title, bgColor, textColor } = createHeaderDesign(phase);
  return <HeaderBase bgColor={bgColor} textColor={textColor} title={title} />;
};

export default Header;
