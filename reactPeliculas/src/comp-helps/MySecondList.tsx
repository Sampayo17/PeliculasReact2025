import { useState } from "react";

export default function MySecondList(props: mySecondListprops) {
  const [indice, setIndice] = useState();
  const { data, onSelect } = props;
  const handleClick = (i: number, element: string) => {
    setIndice(i);
    onSelect?.(element);
  };

  return (
    <>
      <ul className="list-group">
        {data.map((element, i) => (
          <li
            onClick={() => {
              handleClick(i, element);
            }}
            className={`item-center list-group-item ${indice === i ? "active" : ""}`}
            key={element}
          >
            {element}
          </li>
        ))}
      </ul>
    </>
  );
}

interface mySecondListprops {
  data: string[];
  onSelect?: (element: string) => void;
  addNewcharater?: (element: string) => void;
}
