import type { actorPeliculaDTO } from "../Actores/actores.model";

export interface pelicula {
  id: number;
  titulo: string;
  poster: string;
}

export interface peliculaCreationDTO {
  titulo: string;
  enCines: boolean;
  trailer: string;
  fechaLanzamiento?: Date;
  poster?: File;
  posterURL?: string;
  generosIds?: number[];
  cinesIds?: number[];
  actores?: actorPeliculaDTO[];
}

export interface LandingPageDTO {
  enCartelera?: pelicula[];
  proximosEstrenos?: pelicula[];
}
