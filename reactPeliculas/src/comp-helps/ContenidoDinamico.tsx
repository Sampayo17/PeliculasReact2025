import React from "react";

export default function ContenidoDinamico(props: contenidoDinamicoProps) {
  const { nombre, calificacion } = props;

  if (calificacion >= 19) {
    return (
      <>
        <div>
          <h5>
            {nombre} {calificacion} : <span>Felicitaciones</span>
          </h5>
        
        </div>
      </>
    );
  } else if (calificacion >= 10 && calificacion <= 15) {
    return (
      <>
        <div>
          <h5>
            {nombre} {calificacion} : <span>Bien hecho</span>
          </h5>
         
        </div>
      </>
    );
  } else if (calificacion >0 && calificacion <= 10) {
    return (
      <>
        <div>
          <h5>
            {nombre} {calificacion} : <span>Raspao</span>
          </h5>
          
        </div>
      </>
    );
  }else{

    throw `Hay un error con la calficación de ${nombre}`;
              
  }
}

interface contenidoDinamicoProps {
  nombre: string;
  calificacion: number;
}
