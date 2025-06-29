import type { MouseEvent } from "react";

export default function BotonCls(props: botonClsprops) {
  const { onChange, classNameType, btnName, isEnable } = props;

  return (
    <>
      <button
        className={classNameType}
        disabled={isEnable}
        onClick={onChange}>
        {btnName}
      </button>
    </>
  );
}

interface botonClsprops {
  clearString?: string;
  clearNumber?: number;
  classNameType: string;
  btnName: string;
  isEnable?: boolean;
  onChangeNumber?(numero: number): void;
  onChangeText?(texto: string): void;
  onChange(change: MouseEvent): void;
}
