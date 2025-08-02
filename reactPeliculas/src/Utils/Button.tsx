export default function Button(props: ButtonProps) {
  const { children, onClick, type, disabled, className, typeBtn } = props;
  let test = "";

  const validateBtnType = (typeBtn?: string) => {
    if (typeBtn === "Cancel") {
      test =
        "bg-red-500 text-white ml-3 px-4 py-2 rounded hover:bg-red-700 transition duration-200 cursor-pointer";
    } else if (typeBtn === "Success") {
      test =
        "bg-green-500 text-white ml-3 px-4 py-2 rounded hover:bg-green-700 transition duration-200 cursor-pointer";
    } else if (typeBtn === "Info") {
      test =
        "bg-blue-500 text-white px-4 py-2 m-2 rounded hover:bg-blue-700 transition duration-200 cursor-pointer";
    }

    return test;
  };

  return (
    <div>
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={className?.length ? className : validateBtnType(typeBtn)}
      >
        {children}
      </button>
    </div>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type: "button" | "submit";
  disabled?: boolean;
  className?: string;
  typeBtn?: string;
}

Button.defaultProps = {
  type: "button",
  disabled: false,
};
