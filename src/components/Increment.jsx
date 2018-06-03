import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Mutation } from 'react-apollo';

const IncrementView = ({ onIncrement }) => (
  <button onClick={onIncrement}>+</button>
);

IncrementView.propTypes = {
  onIncrement: PropTypes.func.isRequired,
};

const INCREMENT_COUNTER = gql`
  mutation {
    incrementCounter @client
  }
`;

const Increment = () => (
  <Mutation mutation={INCREMENT_COUNTER}>
    {incrementCounter => <IncrementView onIncrement={incrementCounter} />}
  </Mutation>
);

export default Increment;
