import { connect } from 'react-redux';
import { fetchAllTodos } from '../taskManagerActions';
import TaskList from './TaskList';

const mapStateToProps = ({ taskManagerReducer }) => ({
  data: taskManagerReducer.data,
});

const mapDispatchToProps = {
  fetchAllTodos,
};


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
