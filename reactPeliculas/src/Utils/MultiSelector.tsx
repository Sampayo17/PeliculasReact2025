import Button from "./Button";

export default function MultiSelector(props: multiSelectorprosp) {
  const { seleccionados, noSeleccionados, onChange } = props;

  function selection(item: multiSelectorModel) {
    const select = seleccionados.filter((value) => value !== item);
    const noSelect = [...noSeleccionados, item];
    onChange(select, noSelect);
  }

  function deselection(item: multiSelectorModel) {
    const select = [...seleccionados, item];
    const noSelect = noSeleccionados.filter((value) => value !== item);
    onChange(select, noSelect);
  }

  function selectAll() {
    const selectfull = [...seleccionados, ...noSeleccionados];
    const selectEmpty: multiSelectorModel[] = [];
    onChange(selectfull, selectEmpty);
  }

  function selectEmpty() {
    const selectEmpty = [...seleccionados, ...noSeleccionados];
    const selectfull: multiSelectorModel[] = [];
    onChange(selectfull, selectEmpty);
  }
  return (
    <>
      <div className="flex">
        <ul className=" bg-amber-50 rounded text-black m-2  h-45 w-25 outline-2 outline-offset-2 outline-blue-500">
          {seleccionados.map((item) => (
            <li
              className="h-auto w-auto text-center size-3.5  hover:bg-cyan-700  hover:text-amber-50"
              key={item.valor}
              onClick={() => selection(item)}
            >
              {item.valor}
            </li>
          ))}
        </ul>
        <div className="flex flex-col p-1 m-2 justify-center">
          <Button type="button" typeBtn="Info" onClick={selectAll}>
            {"<<"}
          </Button>
          <Button type="button" typeBtn="Info" onClick={selectEmpty}>
            {">>"}
          </Button>
        </div>
        <ul className=" bg-amber-50 rounded text-black m-2 h-45 w-25 outline-2 outline-offset-2 outline-blue-500">
          {noSeleccionados.map((item) => (
            <li
              className="h-auto w-auto text-center size-3.5  hover:bg-cyan-700 hover:text-amber-50"
              key={item.valor}
              onClick={() => deselection(item)}
            >
              {item.valor}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

interface multiSelectorprosp {
  seleccionados: multiSelectorModel[];
  noSeleccionados: multiSelectorModel[];
  onChange(
    seleccionados: multiSelectorModel[],
    noSeleccionados: multiSelectorModel[]
  ): void;
}

export interface multiSelectorModel {
  llave: number;
  valor: string;
}
