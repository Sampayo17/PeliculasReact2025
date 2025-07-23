import { Field } from "formik";

export default function FormGroupCheckBox(props: formGroupCheckBoxprops) {
  const { campo, label } = props;
  return (
    <>
      <div>
        <Field
          className=" outline-amber-50"
          type="checkbox"
          name={campo}
          id={campo}
        />
        <label htmlFor={campo}>{label}</label>
      </div>
    </>
  );
}

interface formGroupCheckBoxprops {
  campo: string;
  label: string;
}
