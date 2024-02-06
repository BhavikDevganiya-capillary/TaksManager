const DefaultButton = ({ text, onClick }) => (
  <button
    className="rounded-md bg-black h-8 w-24 text-sm font-semibold text-white shadow-sm hover:bg-black/80"
    onClick={onClick}
  >
    {text}
  </button>
);

const ButtonAtom = ({ varient, text, onClick }) => {
  switch (varient) {
    case "default":
      return <DefaultButton text={text} onClick={onClick} />;
    default:
      return null;
  }
};

ButtonAtom.defaultProps = {
  onClick: () => {},
};

export default ButtonAtom;
