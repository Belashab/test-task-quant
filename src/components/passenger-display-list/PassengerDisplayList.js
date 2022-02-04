import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import PassengerDisplayCard from '../passenger-display-card/PassengerDisplayCard';
import './passengerDisplayList.css'

export default function PassengerDisplayList() {
    // Создаем запрос в API
    const [renderedPassengers, setPassengers] = useState([]);
    // const renderedPassengers = [];
    const accessPassengers = async () => {
        console.log('request dispatched')
        let pageToLoad = 0;
        await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${pageToLoad}&size=50`)
            .then(
                res => {
                    setPassengers(renderedPassengers.concat(res.data.data))
                    console.log(renderedPassengers)
                    pageToLoad++;
                    
                }
            );
        };
    return(
    <div className='passenger-display-list'>
    <InfiniteScroll
        dataLength={renderedPassengers.length} //This is important field to render the next data
        next={accessPassengers}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
       {renderedPassengers.map((renderedPassenger) => 
           <PassengerDisplayCard aircompanyLogo = {renderedPassenger.airline[0].logo} passengerName = {renderedPassenger.name}/>
       )}
      </InfiniteScroll>
      </div>
    )
}