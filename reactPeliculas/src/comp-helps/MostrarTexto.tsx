export default function MostrarTexto(props:mostrarTextoprops){
    return(
        <>
            <div>
                {props.texto}
            </div>
        </>
    )
}

interface mostrarTextoprops{
    texto: string; //asi se declara

}