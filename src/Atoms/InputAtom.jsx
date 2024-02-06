const DefaultInput = ({ type, value, onChange }) => (
  <input
    className="Default-Input h-8 border-2 border-black rounded-md"
    type={type}
    value={value}
    onChange={onChange}
  />
);

const InputAtom = ({ varient, type, value, onChange }) => {
  switch (varient) {
    case "default":
      return <DefaultInput type={type} value={value} onChange={onChange} />;
    default:
      return null;
  }
};

export default InputAtom;
