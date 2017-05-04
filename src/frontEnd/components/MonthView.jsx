import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import Form from './Form.jsx';
import moment from 'moment';
import events from '../events.js';
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class MonthView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="calendar-container">
        <h1>
          Room 1
        </h1>
        <Form />
        <BigCalendar
          selectable
          events={events}
          views={['week','day']}
          defaultView='week'
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2017, 3, 30)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={()=>{
            
          }
          }
        />
      </div>
    );
  }

}

export default MonthView;
