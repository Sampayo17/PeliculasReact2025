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
}

export interface LandingPageDTO {
  enCartelera?: pelicula[];
  proximosEstrenos?: pelicula[];
}
