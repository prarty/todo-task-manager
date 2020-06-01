import { connect } from 'react-redux';
import { addNewTask } from './taskManagerActions';
import AddTaskForm from './AddTaskForm';

const mapDispatchToProp = {
  addNewTask,
};

export default connect(null, mapDispatchToProp)(AddTaskForm);
