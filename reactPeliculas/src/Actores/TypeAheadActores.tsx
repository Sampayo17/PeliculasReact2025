import { Typeahead } from "react-bootstrap-typeahead";
import type { actorPeliculaDTO } from "./actores.model";
import "./css/style.css";
import { useState, type ReactElement } from "react";
import Button from "../Utils/Button";

export default function TypeAheadActores(props: typeAheadActoresprops) {
  const { actores, onAdd, listadoUI } = props;

  const selected: actorPeliculaDTO[] = [];

  const listActores: actorPeliculaDTO[] = [
    {
      id: 1,
      nombre: "Scarlet",
      personaje: "",
      foto: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRkYo9f9DErkkYFi838FqKCaRoO-JoHyBsb0ycBCikMZXQEgWSYMk_4K9F1jocK1YWRp94Rq3-ddtcbK1Y",
    },
    {
      id: 2,
      nombre: "Stalone",
      personaje: "Rambo",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Flickr_-_nicogenin_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29_-_Sylvester_Stallone_%2826%29.jpg/250px-Flickr_-_nicogenin_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29_-_Sylvester_Stallone_%2826%29.jpg",
    },
    {
      id: 3,
      nombre: "Calvin",
      personaje: "Superman",
      foto: "https://media.revistavanityfair.es/photos/64906a700f909e8fb48b0911/16:9/w_2560%2Cc_limit/997145650",
    },
  ];

  const [dragstarItem, setDragstarItem] = useState<
    actorPeliculaDTO | undefined
  >(undefined);

  function manejarDragstart(actor: actorPeliculaDTO) {
    setDragstarItem(actor);
  }
  function manejarDragsOver(actor: actorPeliculaDTO) {
    if (!dragstarItem) {
      return;
    }

    if (actor.id !== dragstarItem.id) {
      const itemdragstindex = actores.findIndex(
        (x) => x.id === dragstarItem.id
      );

      const itemIndex = actores.findIndex((x) => x.id === actor.id);

      const actoresMove = [...actores];
      actoresMove[itemIndex] = dragstarItem;
      actoresMove[itemdragstindex] = actor;

      onAdd(actoresMove);
    }
  }
  return (
    <>
      <label>Actores</label>
      <Typeahead
        className="mi-typeahead"
        id="typeahead"
        onChange={(actorNew) => {
          if (actores.findIndex((x) => x.id === actorNew[0].id) === -1) {
            onAdd([...actores, actorNew[0]]);
          }
        }}
        options={listActores}
        labelKey="nombre"
        filterBy={["nombre"]}
        placeholder="Escriba el nombre del actor..."
        minLength={1}
        flip={true}
        selected={selected}
        renderMenuItemChildren={(actor) => (
          <div className="flex flex-row">
            <img
              alt="imagen actor"
              src={actor.foto}
              style={{ width: "44px", height: "44px", margin: "10px 10px" }}
            />
            <span>{actor.nombre}</span>
          </div>
        )}
      />

      <ul>
        {actores.map((actor) => (
          <li
            key={actor.id}
            draggable={true}
            onDragStart={() => manejarDragstart(actor)}
            onDragOver={() => manejarDragsOver(actor)}
          >
            <div className="flex items-center justify-between">
              {listadoUI(actor)}

              <Button
                type="button"
                typeBtn="Cancel"
                onClick={() => props.onRemove(actor)}
              >
                x{" "}
              </Button>
            </div>
            <hr className="rounder flex w-2xl items-center ml-60" />
          </li>
        ))}
      </ul>
    </>
  );
}

interface typeAheadActoresprops {
  actores: actorPeliculaDTO[];
  onAdd(actorNew: actorPeliculaDTO[]): void;
  listadoUI(actor: actorPeliculaDTO): ReactElement;
  onRemove(actor: actorPeliculaDTO): void;
}
