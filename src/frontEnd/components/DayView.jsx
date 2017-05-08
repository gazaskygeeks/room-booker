import React from 'react';
import {PropTypes} from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';


BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
const DayView = ({events}) => {
  return (
    <div className="calendar-container">
      <BigCalendar
        events={events}
        views={['week', 'day']}
        defaultView='day'
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date()}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={(slotInfo) => alert(`selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` + `\nend: ${slotInfo.end.toLocaleString()}`)}/>
    </div>
  );
};



DayView.propTypes = {
  events: PropTypes.array
};

export default DayView;
