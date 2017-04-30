import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
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
      <div {...this.props}>
        <h1>
          Room 1
        </h1>
        <BigCalendar
          selectable
          events={events}
          views={['week','day']}
          defaultView='week'
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2017, 3, 30)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}`
          )}
        />
      </div>
    );
  }

}

export default MonthView;
