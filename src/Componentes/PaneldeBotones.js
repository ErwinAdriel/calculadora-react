import Boton from "./Boton";
import '../App.css';

export default function PaneldeBotones ({clickHandle}){

    const handleClick = nombreDeBoton => {
        clickHandle(nombreDeBoton)
    } 

    return(
        <div className="component-botonera">
            <div>
                <Boton name="AC" clickHandle={handleClick} wide></Boton>
                <Boton name="%" clickHandle={handleClick}></Boton>
                <Boton name="/" clickHandle={handleClick}></Boton>
            </div>
            <div>
                <Boton name="1" clickHandle={handleClick}></Boton>
                <Boton name="2" clickHandle={handleClick}></Boton>
                <Boton name="3" clickHandle={handleClick}></Boton>
                <Boton name="*" clickHandle={handleClick}></Boton>
            </div>
            <div>
                <Boton name="4" clickHandle={handleClick}></Boton>
                <Boton name="5" clickHandle={handleClick}></Boton>
                <Boton name="6" clickHandle={handleClick}></Boton>
                <Boton name="+" clickHandle={handleClick}></Boton>
            </div>
            <div>
                <Boton name="7" clickHandle={handleClick}></Boton>
                <Boton name="8" clickHandle={handleClick}></Boton>
                <Boton name="9" clickHandle={handleClick}></Boton>
                <Boton name="-" clickHandle={handleClick}></Boton>
            </div>
            <div>
                <Boton name="." clickHandle={handleClick}></Boton>
                <Boton name="0" clickHandle={handleClick}></Boton>
                <Boton name="=" clickHandle={handleClick} wide></Boton>
            </div>
        </div>
    )

}