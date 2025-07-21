import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import Icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import type { coordenadaDTO } from "../Utils/models/Coordenada.model";
import { useMapEvent } from "react-leaflet";
import { useState } from "react";

let defaultIcon = L.icon({
  iconUrl: Icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = defaultIcon;

export default function UbicationMap(props: ubicationMapPros) {
  const { height, coordenadasValue, manejarClickCampos } = props;
  const [coordenadas, setCoordenadas] =
    useState<coordenadaDTO[]>(coordenadasValue);
  return (
    <>
      <MapContainer
        center={[10.497261, -66.907506]}
        zoom={12}
        style={{ height: "400px" }}
      >
        <TileLayer
          attribution="React Pelicula"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ClickUbicationMap
          setPunto={(coordenadas) => {
            setCoordenadas([coordenadas]);
            manejarClickCampos(coordenadas);
          }}
        />
        {coordenadas?.map((coordenadas) => (
          <Marcador
            key={coordenadas.latitud + coordenadas.longitud}
            {...coordenadas}
          />
        ))}
      </MapContainer>
    </>
  );
}

function Marcador(props: coordenadaDTO) {
  const { latitud, longitud } = props;
  return <Marker position={[latitud, longitud]} />;
}

function ClickUbicationMap(props: clickUbicationMapProps) {
  const { setPunto } = props;
  useMapEvent("click", (e) => {
    setPunto({ latitud: e.latlng.lat, longitud: e.latlng.lng });
  });
  return null;
}

interface clickUbicationMapProps {
  setPunto(coordenadas: coordenadaDTO): void;
}

interface ubicationMapPros {
  height: string;
  coordenadasValue: coordenadaDTO[];
  manejarClickCampos(coordenadas: coordenadaDTO): void;
}

UbicationMap.defaultProps = {
  height: "500px",
};
