import { useState } from "react";

export default function FormularioTexto(props: formularioTextoProps) {
 const {getData} = props;
 const [InputValue, setInputValue] = useState("");
 
 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    getData?.(InputValue);
  };

  return (
    <>
      {/*<input type='text'  
        onKeyUp={(e) => props.manejarKeyUp?.(e.currentTarget.value)} />
    */}
      
      <input type="text" placeholder="Add new chararter" value={InputValue} onChange={handleChange} />
    </>
  );
}

interface formularioTextoProps {
  manejarKeyUp?(texto: string): void;
  getData?: (element: string) => void;
}
