import React from 'react';
import './EventCard.css';

export default function EventCard(props) {
   return (
      <div className="div w-100 EventCard">
         <div className="row">
            <div className="col-3">
               <b>{props.date}</b>
               <p>
                  <b>{props.time}</b>
               </p>
            </div>
            <div className="col-8">
               <h6>{props.title}</h6>
               <p>{props.venueName}</p>
               <p className="text-center text-lg-right">
                  <a
                     className="btn btn-outline-success"
                     href={`https://www.viagogo.com${props.url}`}
                  >
                     <small>• From: {props.minPrice}</small>
                  </a>
               </p>
            </div>
         </div>
      </div>
   );
}
