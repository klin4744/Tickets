import React from 'react';
import data from '../eventList';
import EventList from './EventList';
import NavBar from './Navbar';
import JumboTron from './JumboTron';

class Main extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         events: data.Items,
      };
   }
   render() {
      return (
         <div>
            <NavBar />
            <JumboTron />
            <EventList events={this.state.events} />
         </div>
      );
   }
}

export default Main;
