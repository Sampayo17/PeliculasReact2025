export default function Button(props: ButtonProps) {
  const { children, onClick, type, disabled } = props;
  return (
    <div>
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={
          disabled === false
            ? "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            : "bg-gray-500 text-white px-4 py-2 rounded"
        }
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
}

Button.defaultProps = {
  type: "button",
  disabled: false,
};
