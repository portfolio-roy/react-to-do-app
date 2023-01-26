/* eslint-disable react/prefer-stateless-function */
/* eslint-disable prefer-const */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.scss';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,

    };
  }

  componentWillUnmount() {
    console.log('Cleaning up...');
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const {
      todo, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;
    const { editing } = this.state;
    let viewMode = {};
    let editMode = {};

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={todo.completed}
            onChange={() => handleChangeProps(todo.id)}
          />
          <button type="button" onClick={() => deleteTodoProps(todo.id)}>Delete</button>
          <span style={todo.completed ? completedStyle : null}>
            {todo.title}
          </span>
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={todo.title}
          onChange={(e) => {
            setUpdate(e.target.value, todo.id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />

      </li>
    );
  }
}
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default TodoItem;
