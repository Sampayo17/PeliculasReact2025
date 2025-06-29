import { useEffect, useState } from "react";

export default function UseEffect(props: useeffectprops){
     const [fecha, setFecha] = useState(new Date);

    useEffect(() =>{
        console.log("Use effect del click");
        document.title= `${props.countTitle}` //Esto siver par actualizar el titulo
        

        return ()=> {
            //se ejecuta para limpiar el useEffect
            console.log("el componente se destruira");
        }
    }, [props.countTitle]) //con esto, se hace que solo se ejecute este useEffect solo si el parametro que colocamos cambio


    useEffect(() =>{
        console.log("Use effect interval");
        const IntervalId = setInterval(()=>{
                setFecha(new Date())
        }, 1000)

        return () => clearInterval(IntervalId)

    })

    useEffect(()=>{
        console.log("soy de un solo uso")
    }, [])//al pasarle la lista vacia [], solo se renderizara una vez y mas nunca lo hara 


    return(
        <>
            <h1>Use effect</h1> 
            <span>{fecha.toString()}</span>
        
        </>
    )

}

interface useeffectprops{
    countTitle: number;
}