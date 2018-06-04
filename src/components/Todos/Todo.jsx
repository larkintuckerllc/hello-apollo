import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Mutation } from 'react-apollo';

const TodoView = ({ completed, text, onClick }) => (
  <div
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </div>
);

TodoView.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: Int!) {
    toggleTodo(id: $id) @client
  }
`;

const Todo = ({ completed, id, text }) => (
  <Mutation mutation={TOGGLE_TODO} variables={{ id }}>
    {toggleTodo => (
      <TodoView
        completed={completed}
        text={text}
        onClick={toggleTodo}
      />
    )}
  </Mutation>
);

export default Todo;
