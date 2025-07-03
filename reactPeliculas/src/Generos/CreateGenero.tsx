import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import {Form, Formik } from "formik";
import * as Yup from 'yup';
import FormGroupText from "../Utils/FormGroupText";


export default function CreateGenero() {
 // const navigate = useNavigate();
  return (
    <>
      <h1 className="text-amber-50">Crear Género</h1>
      <Formik
        initialValues={{
          nombre: "",
        }}
        onSubmit={(value) => {
          console.log(value);
        }}

        validationSchema={Yup.object({
          nombre: Yup.string().required("Este campo es requerido").firstLetterUpCasse()
        })}
      >
        <Form className="flex flex-col pt-2 text-amber-50">
          <FormGroupText campo="nombre" label="Nombre" placeHolder="Acción"/>
          <div className="flex pt-2">
            <Button type="submit">Salvar</Button>
            <Link
              className="bg-red-500 text-white ml-3 px-4 py-2 rounded hover:bg-red-700 transition duration-200"
              to="/Generos"
            >
              Cancelar
            </Link>
          </div>
        </Form>
      </Formik>
    </>
  );
}
