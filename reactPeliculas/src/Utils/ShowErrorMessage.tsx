export default function ShowErrorMessage(props: showErrorMessageProps) {
  const { mensaje } = props;
  return (
    <>
      <div className=" text-red-500">{mensaje}</div>
    </>
  );
}

interface showErrorMessageProps {
  mensaje: string;
}
