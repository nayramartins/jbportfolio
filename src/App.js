import React from 'react'
import { Router, Route } from 'react-router'

import { ApolloProvider } from '@apollo/react-hooks'
import { PrismicLink } from 'apollo-link-prismic'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { createBrowserHistory } from 'history'
import introspectionResult from './fragmentTypes'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './layouts/Home'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult,
})

const cache = new InMemoryCache({
  fragmentMatcher,
})

const client = new ApolloClient({
  link: PrismicLink({
    uri: 'https://julianabezerra.prismic.io/graphql',
  }),
  cache
})

const history = createBrowserHistory()

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Header />
        <Router history={history}>
          <Route exact path="/" component={Home} />
        </Router>
        {/* <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} /> */}
        <Footer />

      </ApolloProvider>
    </div>
  )
}

export default App
