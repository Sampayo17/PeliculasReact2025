export default function Button(props: ButtonProps) {
  const { children, onClick, type, disabled, className } = props;
  return (
    <div>
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={className}
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
}

Button.defaultProps = {
  type: "button",
  disabled: false,
};
