import './styles.css'

export function Gastos(props) {
    return(
        <div className="gastos">
            <strong>{props.value}</strong>
            <p>{props.nome}</p>
            <small>{props.time}</small>
        </div>
    )
}