import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const products = [
  {
    id: 1,
    name: 'Product1',
    time: 1
  }, {
    id: 2,
    name: 'Product2',
    time: 1
  }, {
    id: 3,
    name: 'Product3',
    time: 1
  }, {
    id: 4,
    name: '',
    time: 1
  }, {
    id: 5,
    name: '',
    time: 1

  }
];

function trClassFormat(row, rowIndex) {
  // row is the current row data
  return rowIndex % 2 === 0 ? 'tr-odd' : 'tr-even';  // return class name.
}

const DayView = ({room})=>(

      <BootstrapTable data={products} className="col-md-5" trClassName={ trClassFormat }>
        <TableHeaderColumn dataField='id' isKey>Hour</TableHeaderColumn>
        <TableHeaderColumn dataField='name' dataAlign="center">30/2/2017</TableHeaderColumn>
      </BootstrapTable>
    );



export default DayView;
