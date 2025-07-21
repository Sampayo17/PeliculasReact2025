import { useFormikContext } from "formik";
import { useState, type ChangeEvent } from "react";

export default function FormGroupImg(props: formGroupImgprops) {
  const { campo, label, imgUrl } = props;

  const [imgBase64, setimgBase64] = useState("");
  const [fotoUrl, setfotoUrl] = useState(imgUrl);
  const { values } = useFormikContext<any>();

  const ManejarOnchance = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const archivo = e.currentTarget.files[0];
      toBase64(archivo)
        .then((representBase64: string) => setimgBase64(representBase64))
        .catch((error) => console.error(error));

      values[campo] = archivo;
      setfotoUrl("");
    }
  };

  //convertir a base64

  const toBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <>
      <div>
        <label>{label}</label>
        <div>
          <input
            className="m-0.5 p-1 rounded  bg-blue-900 hover:bg-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={ManejarOnchance}
          />
        </div>
        {imgBase64 ? (
          <div>
            <div>
              {" "}
              <img
                src={imgBase64}
                width="250px"
                height="250px"
                alt="Imagen"
              />{" "}
            </div>
          </div>
        ) : null}

        {fotoUrl ? (
          <div>
            <div>
              {" "}
              <img
                src={fotoUrl}
                width="250px"
                height="250px"
                alt="Imagen"
              />{" "}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

interface formGroupImgprops {
  campo: string;
  label: string;
  imgUrl: string;
}

FormGroupImg.defaultProps = {
  imgUrl: "",
};
