import Button from "../Utils/Button";
import { useNavigate } from "react-router-dom";
export default function CreateActores() {
  const navigate = useNavigate();
  return (
    <>
      <h3 className='text-amber-50'>Crear Actor</h3>
      <Button onClick={() => navigate('/actores')}>Salvar</Button>

    </>
  )
}
