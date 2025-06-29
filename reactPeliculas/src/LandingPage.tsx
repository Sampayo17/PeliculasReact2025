import { useEffect, useState } from "react";
import type { LandingPageDTO } from "./Peliculas/peliculas.models";
import ListadoPeliculas from "./Peliculas/ListadoPeliculas";

export default function LandingPage() {
  const [peliculas, setPeliculas] = useState<LandingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPeliculas({
        enCartelera: [
          {
            id: 1,
            titulo: "Minecraft",
            poster:
              "https://hips.hearstapps.com/hmg-prod/images/es-mncrft-vert-main-2764x4096-intl-67ef76788220f.jpg?crop=1xw:1xh;center,top&resize=980:*",
          },
          {
            id: 2,
            titulo: "Mario Bross",
            poster: "https://i.ytimg.com/vi/8YQM6VlfiqM/maxresdefault.jpg",
          },
          {
            id: 3,
            titulo: "Indiana Jones",
            poster:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmv3BldAS7q3GGu9R_D6QozpUr321zr7MX0g&s",
          },
        ],

        proximosEstrenos: [
          {
            id: 4,
            titulo: "Star Wars",
            poster:
              "https://lumiere-a.akamaihd.net/v1/images/image_c671e2ee.jpeg?region=0,0,540,810",
          },
        ],
      });
    }, 1000);
    return () => clearTimeout(timerId);
  });

  return (
    <>
      <h3>En cartelera</h3>
      <ListadoPeliculas peliculas={peliculas.enCartelera} />

      <h3>Proximos Estrenos</h3>
      <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
    </>
  );
}
