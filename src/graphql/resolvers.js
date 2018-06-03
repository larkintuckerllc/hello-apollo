import gql from 'graphql-tag';

// TODO: GET RID OF PARAMS
export default {
  Mutation: {
    decrementCounter: (_, params, { cache }) => {
      const query = gql`
        {
          counter @client
        }
      `;
      const { counter } = cache.readQuery({ query });
      const nextCounter = counter - 1;
      const data = {
        counter: nextCounter,
      };
      cache.writeData({ data });
      return nextCounter;
    },
    incrementCounter: (_, params, { cache }) => {
      const query = gql`
        {
          counter @client
        }
      `;
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
