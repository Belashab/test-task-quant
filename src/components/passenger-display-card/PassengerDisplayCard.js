export default function PassengerDisplayCard(props) {
    return(
        <div>
            <img src={props.aircompanyLogo} alt=""></img>
            <p>{props.passengerName}</p>
        </div>
    )
}