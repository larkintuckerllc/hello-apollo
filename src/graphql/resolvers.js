import gql from 'graphql-tag';

const query = gql`
{
  counter @client
}
`;

export default {
  Mutation: {
    decrementCounter: (_, params, { cache }) => {
      const { counter } = cache.readQuery({ query });
      const nextCounter = counter - 1;
      const data = {
        counter: nextCounter,
      };
      cache.writeData({ data });
      return nextCounter;
    },
    incrementCounter: (_, params, { cache }) => {
      const { counter } = cache.readQuery({ query });
      const nextCounter = counter + 1;
      const data = {
        counter: nextCounter,
      };
      cache.writeData({ data });
      return nextCounter;
    },
  },
};
