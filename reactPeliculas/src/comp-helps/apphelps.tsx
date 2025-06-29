import ErrorBundary from './errorBundary';
import ContenidoDinamico from './ContenidoDinamico';
import Card, { CardBody } from './Card';

export default function apphelps() {
 
    const calificationList = [
      { nombre: "Israel", calificacion: 15 },
      { nombre: "Pedro", calificacion: -1 },
      { nombre: "Ana", calificacion: 20 },
    ];
  
    //funcion que manda desde el btn hacia card body
    return (
      <>
        <Card>
          <CardBody title="Lista de personajes" text="Se mostrara una lista" />
        </Card>
  
        {calificationList.map((cal) => (
          <ErrorBundary key={cal.nombre}
            mensaje={""}
          >
            <ContenidoDinamico  {...cal} />
          </ErrorBundary>
        ))}
      </>
    );
  }