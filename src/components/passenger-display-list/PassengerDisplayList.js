import axios from 'axios';
import { useState } from 'react';
import PassengerDisplayCard from '../passenger-display-card/PassengerDisplayCard';
import './passengerDisplayList.css';

export default function PassengerDisplayList() {
    // Создаем запрос в API
    const pageSize = 50;
    const [renderedPassengers, setPassengers] = useState([]);
    let [pageToLoad, setNextPage] = useState(0);
    // const renderedPassengers = [];
    const accessPassengers = () => {
        console.log('request dispatched')
        axios.get(`https://api.instantwebtools.net/v1/passenger?page=${pageToLoad}&size=${pageSize}`)
            .then(
                res => {
                    setPassengers(renderedPassengers.concat(res.data.data));
                    console.log(renderedPassengers);
                    setNextPage(pageToLoad + 1);
                    console.log(pageToLoad);
                }
            );
        };
    return(
        <div
            id="scrollableDiv"
            >
        <button onClick={
            accessPassengers
        }>клик</button>
       {renderedPassengers.map((renderedPassenger) => 
           <PassengerDisplayCard aircompanyLogo = {renderedPassenger.airline[0].logo} passengerName = {renderedPassenger.name}/>
       )}
      </div>
    )
}