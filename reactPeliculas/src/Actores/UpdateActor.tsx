import ActorForm from "./ActorForm";

export default function UpdateActores() {
  return (
    <>
      <h3 className="text-amber-50">Editar Actor</h3>
      <ActorForm
        model={{
          nombre: "Israel Sampayo",
          fechaNacimiento: new Date("1996-05-01T00:00:00"),
          imgURL:
            "https://imagenes.elpais.com/resizer/v2/https%3A%2F%2Fcloudfront-eu-central-1.images.arcpublishing.com%2Fprisa%2FSAFAVYAWGVDW3EBQNSYJLPSFXY.jpg?auth=fd1beb1922ccfafa44bf56aa3d568d4e878e3996cc04d9be9ac9de98955d1fe2&width=1960&height=1103&smart=true",
        }}
        onSubmit={(valores) => console.log(valores)}
      />
    </>
  );
}
