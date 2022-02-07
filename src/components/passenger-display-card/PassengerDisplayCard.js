import "./passengerDisplayCard.css"

export default function PassengerDisplayCard(props) {
    return(
        <div className="passengerDisplayCard">
            <img src={props.aircompanyLogo} alt=""></img>
            <p>{props.passengerName}</p>
        </div>
    )
}