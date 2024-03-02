import React from 'react'
import Card from '../tripsCard/Card';
import background1 from '../../assets/tbilisi.png';
import background2 from '../../assets/istanbul.png';
import background3 from '../../assets/dubai.png';
import background4 from '../../assets/phuket.png';





const trips = [
  {
    isTransport  : 'на автобусе',
    isPerson : '10', 
    title :'Тбилиси',
    month : 'апрель',
    price :'83.000',
    image :  background1
    
  },

  { 
    isTransport  : 'на самолете',
    isPerson :'5',
    title :'Стамбул',
    month : 'март',
    price :'110.000',
    image :  background2

    
  },

  {
    isTransport : 'на самолете',
    isPerson: '15', 
    title :'Дубай',
    month : 'июнь',
    price :'220.000',
    image :  background3
    
  },

  {
    isTransport : 'самолет + паром',
    isPerson : '11', 
    title :'Пхукет',
    month : 'сентябрь',
    price :'135.000',
    image :  background4

  }
];

function TripSection () {
    return (
      <div> 
      {trips.map(function(trip) {
        return (
            
        
            <Card
            
              title={trip.title}
              month ={trip.month}
              price={trip.price}
              image={trip.image}
              isTransport={trip.isTransport} 
              isPerson={trip.isPerson}/>
          )
      }) }
    
      </div>
      
    );
}

export default TripSection