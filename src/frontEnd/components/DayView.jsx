import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {PropTypes} from 'prop-types';

function trClassFormat(row, rowIndex) {
  // row is the current row data
  return rowIndex % 2 === 0
    ? 'tr-odd'
    : 'tr-even'; // return class name.
}

const DayView = ({events}) => {

  return (
    <BootstrapTable data={events} trClassName={trClassFormat}>
      <TableHeaderColumn dataField='created' dataAlign="center" isKey>Hours</TableHeaderColumn>
      <TableHeaderColumn dataField='description' dataAlign="center">30/2/2017</TableHeaderColumn>
    </BootstrapTable>
  );
};

DayView.propTypes = {
  events: PropTypes.arr
};

export default DayView;
