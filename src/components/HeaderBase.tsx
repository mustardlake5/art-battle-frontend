type HeaderBaseProps = {
  bgColor: string;
  textColor: string;
  title: string;
};

const HeaderBase = ({ bgColor, textColor, title }: HeaderBaseProps) => {
  return (
    <header className={`${bgColor} ${textColor} p-5`}>
      <h1 className="text-center text-xl font-bold">{title}</h1>
    </header>
  );
};

export default HeaderBase;
