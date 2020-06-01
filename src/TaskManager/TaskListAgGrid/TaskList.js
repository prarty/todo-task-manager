import React, { useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './TaskList.scss';
import * as PropTypes from 'prop-types';
import HeaderConfig from './HeaderConfig';

const rowData = [{
  make: 'Toyota', model: 'Celica', price: 35000,
}, {
  make: 'Ford', model: 'Mondeo', price: 32000,
}, {
  make: 'Porsche', model: 'Boxter', price: 72000,
}];

const TaskList = ({ data, fetchAllTodos }) => {
  useEffect(() => {
    fetchAllTodos();
  }, [fetchAllTodos]);
  return (
    <div>
      <h2>Task DashBoard</h2>
      <div
        className="ag-theme-balham"
      >
        <AgGridReact
          columnDefs={HeaderConfig()}
          rowData={data ?? rowData}
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
};

TaskList.propTypes = {
  fetchAllTodos: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};
export default TaskList;
