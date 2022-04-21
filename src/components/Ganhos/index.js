import './styles.css'

export function Ganhos(props) {
    return(
        <div className="ganhos">
            <strong>{props.value}</strong>
            <p>{props.nome}</p>
            <small>{props.time}</small>
        </div>
    )
}