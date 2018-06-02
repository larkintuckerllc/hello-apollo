import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Query } from 'react-apollo';

const CounterView = ({ counter, onDecrement, onIncrement }) => (
  <div>
    <div>{counter}</div>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
  </div>
);

CounterView.propTypes = {
  counter: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

const GET_COUNTER = gql`
  {
    counter @client
  }
`;

const Counter = () => (
  <Query query={GET_COUNTER}>
    {({ data, client }) => {
      const { counter } = data;
      const handleIncrement = () => client.writeData({ data: { counter: counter + 1 }});
      const handleDecrement = () => client.writeData({ data: { counter: counter - 1 }});
      return (
       <CounterView
          {...data}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
        />
      );
    }}
  </Query>
);

export default Counter;
