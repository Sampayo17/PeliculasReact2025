import { useParams } from "react-router-dom";

export default function UpdateGenero() {

  const {id}: any = useParams();
  return (
    <>
        <h3 className='text-amber-50'>Editar Género</h3>
        <p className='text-amber-50'>ID del género: {id}</p>  

    </>

  )
}
