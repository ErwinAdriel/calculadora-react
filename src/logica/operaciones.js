import Big from "big.js";
import operate from "./operate";
import inNumber from "./inNumber";

export default function operaciones(estado, nombreDeBoton){

    //Borra todo
    if(nombreDeBoton === "AC"){
        return{
            total: null,
            siguiente: null,
            operador: null
        }
    }

    //Selecciona el numero
    if(inNumber(nombreDeBoton)){

        if(nombreDeBoton === "0"  && estado.siguiente === "0") return {}

        if(estado.operador){
            if(estado.siguiente) return { siguiente: estado.siguiente + nombreDeBoton }

            return { siguiente:nombreDeBoton }
        }

        if(estado.siguiente){
            const siguiente = estado.siguiente === "0" ? nombreDeBoton: estado.siguiente + nombreDeBoton
    
            return { siguiente, total:null }
        }

        return{ siguiente: nombreDeBoton, total: null }
    }

    //Division
    if(nombreDeBoton === "%"){
        if(estado.operador && estado.siguiente){

            const resultado = operate(estado.total, estado.siguiente, estado.operador)

            return{ 
                total: Big(resultado)
                    .div(Big("100"))
                    .toString(), 
                siguiente: null,
                operador:null }
        }

        if(estado.siguiente){
            return{ 
                siguiente: Big(estado.siguiente)
                    .div(Big("100"))
                    .toString() 
            }
        }

        return {}
    }

    //Decimales
    if(nombreDeBoton === "."){

        if(estado.siguiente){

            if(estado.siguiente.includes(".")) return{}

            return{ siguiente: estado.siguiente + "." }
        }
        return { siguiente: "0." }
    }

    //Igualdad
    if(nombreDeBoton === "="){
        if(estado.siguiente && estado.operador){
            return { total: operate(estado.total, estado.siguiente, estado.operador),
                    siguiente: null, 
                    operador: null}
        }

        return {}
    }

    if(estado.operador){
        return{
            total:operate(estado.siguiente, estado.total, estado.operador),
            siguiente:null,
            operador: nombreDeBoton
        }
    }

    if(!estado.siguiente) return { operador: nombreDeBoton }

    return{
        total: estado.siguiente,
        siguiente: null,
        operador: nombreDeBoton
    }
    
}