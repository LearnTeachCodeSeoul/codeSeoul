import React from 'react';
import {CarouselComponent} from '../components/CarouselComponent';
import PastEvents from '../components/presentational/PastEvents';
import { FlexBox } from '../styles/HomePageStyle';

const placeholderData = [
  {  
      'title':'Meetup #1',
      'date' : '2018-08-29 14:00',
      'host' : 'Instructor A',
      'background': '#e1f7d5',
      'link': '#link1'
  },
  {
      'title':'Meetup #2',
      'date' : '2018-08-12 15:00',
      'host' : 'Instructor B',
      'background': '	#ffbdbd',
      'link': '#link2'
  },
  {
      'title':'Meetup #3',
      'date' : '2018-08-18 13:00',
      'host' : 'Instructor C',
      'background': '#c9c9ff',
      'link': '#link3'
  },
];

 
class HomePage extends React.Component{
  state = {
    pastEvents: [],
    upcomingEvents: [],
  }

  componentDidMount() {
    fetch('https://api.meetup.com/Learn-Teach-Code-Seoul/events?status=past&page=4&desc=true')
      .then(res => res.json())
      .then(events => {
        this.setState({
          pastEvents: events
        });
      });
    fetch('https://api.meetup.com/Learn-Teach-Code-Seoul/events?page=10')
      .then(res => res.json())
      .then(events => {
        function removeDuplicatesByKey(array, keyFn){
          let set = new Set();
          return array.filter(item=>{
            let key = keyFn(item), isNew = !set.has(key);
            if(isNew) set.add(key);
            return isNew;
          })
        }
        const filteredEvents = removeDuplicatesByKey(events, event=>event.name);
        this.setState({
          upcomingEvents: filteredEvents
        });
      });
  }

  render = () => {
    console.log(this.state.upcomingEvents);
    return (
      <div>
        <CarouselComponent meetupArray={placeholderData} />
        <FlexBox>
          <PastEvents events={this.state.pastEvents}/>
          {/* <QnA/>
          <Resources/> */}
        </FlexBox>
      </div>
    );
  }
} 

export default HomePage;