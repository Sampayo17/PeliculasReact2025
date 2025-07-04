import { ErrorMessage, Field } from "formik";
import ShowErrorMessage from "./ShowErrorMessage";

export default function FormGroupText(props: formGroupTextprops) {
  const { campo, label } = props;

  return (
    <>
      {label ? (
        <label className="mr-5" htmlFor="nombre">
          {label}
        </label>
      ) : null}
      <Field  className="bg-amber-50 text-black" name={campo} />
      <ErrorMessage name={campo}>
        {(mensaje) => <ShowErrorMessage mensaje={mensaje} />}
      </ErrorMessage>
    </>
  );
}

interface formGroupTextprops {
  campo: string;
  label?: string;
  placeHolder?: string;
}
