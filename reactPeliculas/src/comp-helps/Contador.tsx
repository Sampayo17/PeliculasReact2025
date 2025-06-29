export default function Contador(props: contadorprops)
{
    return(
       <>
        <h3>Ejemplo react</h3>
        <input type="number" value={props.numero}/>  
       </> 
    );
}

interface contadorprops{
    numero: number;
}