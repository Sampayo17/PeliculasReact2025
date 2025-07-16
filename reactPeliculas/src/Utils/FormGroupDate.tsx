import { useFormikContext } from "formik";
import ShowErrorMessage from "./ShowErrorMessage";

export default function FormGroupDate(props: formGroupDateprops) {
  const { campo, label } = props;
  const { values, validateForm, touched, errors } = useFormikContext<any>();
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={campo}>{label}</label>
        <input
          type="date"
          className="bg-amber-50 mr-2 mt-2 p-2 rounded text-black"
          id={campo}
          name={campo}
          defaultValue={values[campo]?.toLocaleDateString("en-CA")}
          onChange={(e) => {
            const fecha = new Date(e.currentTarget.value + "T00:00:00");
            values[campo] = fecha;
            validateForm();
          }}
        />

        {touched[campo] && errors[campo] ? (
          <ShowErrorMessage mensaje={errors[campo]?.toString()!} />
        ) : null}
      </div>
    </>
  );
}

interface formGroupDateprops {
  campo: string;
  label: string;
}
