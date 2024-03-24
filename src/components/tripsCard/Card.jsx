import React from 'react'
import './trip_card.css';
import icon from '../../assets/bi_peoplel.png'




function Card (props){
    const afterIcon = <img className='icon' src={icon} alt="колличество человек" />;

    return (

            <div className='tripcard'
                style={{ 
                backgroundImage: `url(${props.image})`,
                
             }}>

            <div>
                <div className='props-wrapper'>
                    <div className='props'>{props.isTransport}</div> 
                    <div className='props'>{props.isPerson}
                        {props.isPerson > 0 && (afterIcon)}

                    </div>
                </div>
               


                <p className='bgimg-text'>   
                {props.title}, {props.month} — {props.price}</p>

            </div>
            
            </div>
    );
}
export default Card
