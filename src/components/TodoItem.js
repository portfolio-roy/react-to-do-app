/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    const { todo, handleChangeProps } = this.props;
    return (
      <li>
        <input type="checkbox" checked={todo.completed} onChange={() => handleChangeProps(todo.id)} />
        <button type="button">Delete</button>
        {todo.title}
      </li>
    );
  }
}
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
};
export default TodoItem;
