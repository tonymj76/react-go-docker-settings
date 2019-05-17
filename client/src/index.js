import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { setContext } from 'apollo-link-context';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const httpLink = new HttpLink({uri: 'http://localhost:4477/server/dev'})

const authLink = setContext((_, {headers}) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJzZXJ2ZXJAZGV2Iiwicm9sZXMiOlsiYWRtaW4iXX0sImlhdCI6MTU1MTA2OTMwMCwiZXhwIjoxNTUxNjc0MTAwfQ.FTwUhRwkq4xTRluZWg4Bq3LCKc5R2HZR9z0uxlkj2Os'
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`
    }
  }
})

const link = authLink.concat(httpLink)

const client = new ApolloClient({
  link: link,
  cache : new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'));
// registerServiceWorker();
