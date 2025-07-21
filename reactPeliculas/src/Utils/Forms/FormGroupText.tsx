import { ErrorMessage, Field } from "formik";
import ShowErrorMessage from "../ShowErrorMessage";

export default function FormGroupText(props: formGroupTextprops) {
  const { campo, label } = props;

  return (
    <>
      <div className="flex flex-col">
        {label ? (
          <label className="mr-5" htmlFor="nombre">
            {label}
          </label>
        ) : null}

        <Field
          className="bg-amber-50 mr-2 mt-2 p-2 rounded text-black"
          name={campo}
        />
        <ErrorMessage name={campo}>
          {(mensaje) => <ShowErrorMessage mensaje={mensaje} />}
        </ErrorMessage>
      </div>
    </>
  );
}

interface formGroupTextprops {
  campo: string;
  label?: string;
  placeHolder?: string;
}
