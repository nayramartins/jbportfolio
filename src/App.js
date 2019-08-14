import React from 'react'
import { Router, Route } from 'react-router'

import { ApolloProvider } from '@apollo/react-hooks'
import { PrismicLink } from 'apollo-link-prismic'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { createBrowserHistory } from 'history'
import introspectionResult from './fragmentTypes'

import Menu from './layouts/Menu'
import Home from './layouts/Home'
import Projects from './layouts/Projects'
import Single from './layouts/Single'
import Footer from './components/Footer'

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
        <Menu />
        <Router history={history}>
          <Route exact path="/" component={Home} />
          <Route path="/sobre" component={Single} />
          <Route path="/projetos" component={Projects} />
        </Router>
        <Footer />

      </ApolloProvider>
    </div>
  )
}

export default App
