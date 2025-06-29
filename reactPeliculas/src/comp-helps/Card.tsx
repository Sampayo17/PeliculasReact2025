//rfc crear componente mas rapido
import BotonCls from "./BotonCls";
import { useState } from "react";
import type { ReactNode } from "react";
import MySecondList from "./MySecondList";
import FormularioTexto from "./FormularioTexto";

export default function Card(props: cardprops) {
  //const charaterList: string[] = [];
  const [data, setData] = useState(["Ichigo", "Rukia", "Kuchiky"]);
  const [count, setCount] = useState(0);
  const [newChararter, setNewChararter] = useState("");
 
  // const charaterList  = ["Ichigo", "Rukia", "Kuchiky"];
  const { children } = props;

  const handleSelect = (element: string) => {
    console.log(`Imprimiendo: ${element}`);
  };

  const getData = (element: string) => {
    console.log(`Imprimiendo desde get: ${element}`);
    setNewChararter(element);
  };


  const addMinios = () => {
    setCount(count + 1);
    //setData([...data, "Minion " + count]); //de esta manera se puede agregar elementos a una lista en memoria en react con js
    setData([...data, newChararter]); //de esta manera se puede agregar elementos a una lista en memoria en react con js
  };
  const delMinios = () => setData(data.slice(0, -1)); //de esta manera se puede eliminar elementos a una lista en memoria en react con js




  const contenido = data.length ? (
    <MySecondList data={data} onSelect={handleSelect} />
  ) : (
    "Sin elementos para mostrar"
  );

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">{children}</div>
        {contenido}
        <FormularioTexto getData={getData}></FormularioTexto>
        <BotonCls
          btnName="Agregar"
          classNameType="btn btn-primary"
          onChange={addMinios}
        />
        <BotonCls
          btnName="Eliminar"
          classNameType="btn btn-danger"
          onChange={delMinios}
        />
      </div>
    </>
  );
}

export function CardBody(props: cardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div>{text}</div>
      </div>
    </>
  );
}

interface cardBodyProps {
  title: string;
  text?: string;
}

interface cardprops {
  children: ReactNode;
}
