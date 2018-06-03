export default `
  type Query {
    counter: Int
  }

  type Mutation {
    decrementCounter(unused: Boolean): Int
    incrementCounter(unused: Boolean): Int
  }
`;
