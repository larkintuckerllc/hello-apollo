import { ApolloClient } from 'apollo-client';
import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import React from 'react';
import ReactDOM from 'react-dom';
import defaults from './graphql/defaults';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: withClientState({ resolvers, defaults, cache, typeDefs }),
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
