import React, { type ReactElement, type ReactNode } from "react";
export default class extends 
React.Component<errorBundaryProps, errorBundaryState>{
    constructor(props:errorBundaryProps){
        super(props)
        this.state ={hayError: false, mensaje: ' '}
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error);
        console.log(errorInfo)
    }

    static getDerivedStateFromError(error: any){
        console.log(error);
        return{
            hayError:true,
            mensaje: error
        }
    }
    render(): React.ReactNode {
        if (this.state.hayError){
            if(this.props.errorUI){
                return this.props.errorUI;
            }else{
                return <h3>{this.state.mensaje}</h3>
            }
        }

        return this.props.children;
    }
}

interface errorBundaryState{
    hayError: boolean;
    mensaje: string;
}

interface errorBundaryProps{
    errorUI?: ReactElement;
    mensaje: string;
    children?: ReactNode;
}