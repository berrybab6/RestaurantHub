import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';
import { createUploadLink } from 'apollo-upload-client';

import {ApolloProvider, ApolloClient, ApolloLink, InMemoryCache, HttpLink } from "@apollo/client";
import { BrowserRouter } from 'react-router-dom';
// import { RestLink } from "apollo-link-rest";
const httpLink = new createUploadLink({ uri: "http://127.0.0.1:8000/graphql",usePOSTForQueries: true
});

// const httpLink = new HttpLink({
//   uri: "http://127.0.0.1:8000/graphql",
// });

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

ReactDOM.render(
  
  <BrowserRouter>
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregist/er();
