import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../events.js';
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
class DayView extends Component {
  render() {
    return (
      <div>
        <BigCalendar selectable events={events} views={['week','day']}  defaultView='day' scrollToTime={new Date(1970, 1, 1, 6)} defaultDate={new Date(2015, 3, 12)} onSelectEvent={event => alert(event.title)} onSelectSlot={(slotInfo) => alert(`selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` + `\nend: ${slotInfo.end.toLocaleString()}`)}/>
      </div>
    );
  }
}

DayView.propTypes = {
  events: PropTypes.arr
};

export default DayView;
