import React from 'react';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import * as moment from 'moment';
import Select from 'react-select';
import './TaskManager.scss';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddTaskForm = () => {
  const validationSchema = Yup.object({
    taskValue: Yup.string().required('task details are required'),
    dueDate: Yup.date().required('DueDate is Required'),
  });

  const formik = useFormik({
    initialValues: {
      taskValue: '',
      dueDate: moment().format('YYYY-MM-DD'),
      label: { label: '', value: '' },
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    initialErrors: {},
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="task-form">
        <TextField
          name="taskValue"
          className="task-text"
          required
          onChange={(text) => {
            formik.setFieldValue('taskValue', text);
          }}
        />
        <div className="date-picker">
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              autoOk
              format="DD/MM/YYYY"
              margin="normal"
              id="dueDate"
              name="dueDate"
              label="Date picker"
              value={formik.values.dueDate}
              onChange={(date) => formik.setFieldValue('dueDate', date)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              required
            />
          </MuiPickersUtilsProvider>
        </div>
        <Select
          value={formik.values.label}
          onChange={() => {
          }}
          options={[{ label: 'temp', value: '123' }, { label: 'temp1', value: '423' }]}
          className="drop-down"
        />
        <Button
          variant="contained"
          color="primary"
          className="save-button"
          startIcon={<SaveIcon />}
          type="submit"
          onClick={() => {
            console.log('Clicked');
          }}
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default AddTaskForm;
