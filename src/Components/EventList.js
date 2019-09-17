import React from 'react';
import EventCard from './EventCard';

const findUnique = arr => {
   const memo = {};
   for (let i = 0; i < arr.length; i++) {
      if (!memo[arr[i]]) {
         memo[arr[i]] = true;
      }
   }
   return Object.keys(memo);
};

class EventList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         searchQuery: '',
      };
   }
   handleChange = event => {
      this.setState({ searchQuery: event.target.value });
   };

   render() {
      const matchingRegex = new RegExp(this.state.searchQuery, 'i');
      const filteredEvents = this.props.events.filter(
         ({ VenueName, IsSoldOut, VenueCity }) =>
            VenueName.includes(this.state.searchQuery) ||
            (VenueCity.match(matchingRegex) ||
               (VenueName.match(matchingRegex) && !IsSoldOut)),
      );
      return (
         <div className=" w-100 px-5">
            <div className="row mx-auto">
               <div className="col-12 mt-5 mx-auto d-lg-none">
                  {
                     // This is the select for part 2!
                     /* <h3 className="lead">Filter by venue</h3>
                  <select className="form-control" onChange={this.handleChange}>
                     <option value="">Show All</option>
                     {findUnique(
                        this.props.events.map(({ VenueName }) => VenueName),
                     ).map(venueName => (
                        <option key={venueName} value={venueName}>
                           {venueName}
                        </option>
                     ))}
                  </select> */
                  }
                  <h3 className="">Availible Events</h3>
                  <input
                     onChange={this.handleChange}
                     className="form-control"
                     placeholder="Search by venue name or by city name "
                  ></input>
               </div>
               <div className="col-lg-8 col-12">
                  <h3 className="display-4 d-none d-lg-block">
                     Availible Events
                  </h3>
                  {filteredEvents.map(event => (
                     <EventCard
                        key={event.EventId}
                        date={event.Date}
                        time={event.Time}
                        title={event.LinkTitleText}
                        venueName={event.VenueName}
                        minPrice={event.MinPrice}
                        url={event.EventUrl}
                     />
                  ))}
               </div>
               <div className="col-4 mt-5 mx-auto d-none d-lg-block">
                  {
                     // This is the select for part 2!
                     /* <h3 className="lead">Filter by venue</h3>
                  <select className="form-control" onChange={this.handleChange}>
                     <option value="">Show All</option>
                     {findUnique(
                        this.props.events.map(({ VenueName }) => VenueName),
                     ).map(venueName => (
                        <option key={venueName} value={venueName}>
                           {venueName}
                        </option>
                     ))}
                  </select> */
                  }
                  <h3 className="lead">Search by venue name or by city name</h3>
                  <input
                     onChange={this.handleChange}
                     className="form-control"
                  ></input>
               </div>
            </div>
         </div>
      );
   }
}

export default EventList;
