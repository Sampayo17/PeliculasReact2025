import { Field, useFormikContext } from "formik";
import ReactMarkdown from "react-markdown";

export default function FormGruopMarkDown(props: formGruopMarkDownprops) {
  const { campo, label } = props;
  const { values } = useFormikContext<any>();

  return (
    <>
      <div className="flex p-2">
        <div className="mr-4">
          <label>{label}</label>
          <div>
            <Field
              name={campo}
              as="textarea"
              className="bg-amber-50 text-black border-amber-50 rounded w-[550px] h-40"
            />
          </div>
        </div>
        <div>
          <label>{label}: preview</label>
          <div className=" outline-dashed outline-2 outline-offset-1 outline-cyan-500 rounded w-[550px] h-40">
            <ReactMarkdown>{values[campo]}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

interface formGruopMarkDownprops {
  campo: string;
  label: string;
}
