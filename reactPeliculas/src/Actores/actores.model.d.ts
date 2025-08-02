import type { number } from "yup";

export interface actoresCreationDTO {
  nombre: string;
  fechaNacimiento?: Date;
  foto?: File;
  imgURL: string;
  biografia?: string;
}

export interface actorPeliculaDTO {
  id: number;
  nombre: string;
  personaje: string;
  foto: string;
}
