
export default function Button(props: ButtonProps) {
    const { children, onClick, type } = props;
  return (
    <div>
      <button type={type} onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
        {children}
      </button>
    </div>
  )
}


interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type: "button" | "submit";
}

Button.defaultProps ={
  type:"button"
}

