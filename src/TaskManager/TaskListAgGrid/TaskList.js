import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import './TaskList.scss';
import HeaderConfig from './HeaderConfig';

const rowData = [{
  make: 'Toyota', model: 'Celica', price: 35000,
}, {
  make: 'Ford', model: 'Mondeo', price: 32000,
}, {
  make: 'Porsche', model: 'Boxter', price: 72000,
}];

const TaskList = () => (
  <div>
    <h2>Task DashBoard</h2>
    <div
      className="ag-theme-balham"
    >
      <AgGridReact
        columnDefs={HeaderConfig()}
        rowData={rowData}
        defaultColDef={{
          flex: 1,
          sortable: true,
          filter: true,
          floatingFilter: true,
        }}
      />
    </div>
  </div>
);

export default TaskList;
