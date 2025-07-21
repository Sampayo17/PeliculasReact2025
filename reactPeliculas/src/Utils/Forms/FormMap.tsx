import { useFormikContext } from "formik";
import type { coordenadaDTO } from "../models/Coordenada.model";
import UbicationMap from "../UbicationMap";

export default function FormMap(props: formMapProps) {
  const { coordenadasValue, campoLat, campoLon } = props;

  const { values } = useFormikContext<any>();

  function updateCampo(coordenadas: coordenadaDTO) {
    values[campoLat] = coordenadas.latitud;
    values[campoLon] = coordenadas.longitud;
  }
  return (
    <>
      <UbicationMap
        coordenadasValue={coordenadasValue}
        manejarClickCampos={updateCampo}
      />
    </>
  );
}

interface formMapProps {
  coordenadasValue: coordenadaDTO[];
  campoLat: string;
  campoLon: string;
}

FormMap.defaultProps = {
  coordenadasValue: [], //si se define esto, al llamar el componente, entendera que ya tiene un valor la variable y no te dara error de que falta algun parametro
};
