const HeaderConfig = () => ([
  {
    headerName: 'Id',
    field: 'make',
    width: 70,
    filter: 'agNumberColumnFilter',
    filterParams: {
      clearButton: true,
    },
    sort: 'asc',
  },
  {
    headerName: 'Description',
    field: 'description',
    width: 170,
    filter: 'agTextColumnFilter',
    filterParams: {
      clearButton: true,
    },
  },
  {
    headerName: 'Due Date',
    field: 'dueDate',
    width: 170,
    filter: 'agDateColumnFilter',
    filterParams: {
      clearButton: true,
    },
  },
  {
    headerName: 'Label',
    field: 'label',
    width: 170,
    filter: 'agTextColumnFilter',
    filterParams: {
      clearButton: true,
    },
  },
]);

export default HeaderConfig;
