import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Mutation } from 'react-apollo';

const DecrementView = ({ onDecrement }) => (
  <button onClick={onDecrement}>-</button>
);

DecrementView.propTypes = {
  onDecrement: PropTypes.func.isRequired,
};

const DECREMENT_COUNTER = gql`
  mutation {
    decrementCounter @client
  }
`;

const Decrement = () => (
  <Mutation mutation={DECREMENT_COUNTER}>
    {decrementCounter => <DecrementView onDecrement={decrementCounter} />}
  </Mutation>
);

export default Decrement;
