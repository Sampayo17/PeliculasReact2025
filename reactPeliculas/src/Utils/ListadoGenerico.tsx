import { type ReactElement } from "react";
import Cargando from "./Cargando";

export default function ListadoGenerico(props: listadoGenericoProps) {
  const { listado, children, cargandoUI, listadoVacioUI } = props;

  if (!listado) {
    if (cargandoUI) {
      return cargandoUI;
    }
    return <Cargando />;
  } else if (listado.length === 0) {
    if (listadoVacioUI) {
      return listadoVacioUI;
    }
    return <>No hay elementos para mostrar</>;
  } else {
    return children;
  }
}

interface listadoGenericoProps {
  listado: any;
  children: ReactElement;
  cargandoUI?: ReactElement;
  listadoVacioUI?: ReactElement;
}
