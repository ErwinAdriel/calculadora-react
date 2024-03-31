import '../App.css';

export default function Boton ({clickHandle, name, wide}){
    const handleClick = () => clickHandle(name)

    const className = [
        "component-button",
        wide ? "wide": "",
    ]
        
    return(
        <div className={className.join(" ").trim()}>
            <button className='btn' onClick={handleClick}>{name}</button>
        </div>
        
    )
}