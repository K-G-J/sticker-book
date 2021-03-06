import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import About from './pages/about'
import Goals from './pages/Goals'
import Feed from './pages/Feed';
import SingleGoal from './pages/SingleGoal'
import Nav from './components/Nav';

const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const styles = {
  flex: `flex justify-center flex items-center justify-center min-h-screen from-purple-100 via-red-300 to-indigo-500 bg-gradient-to-br`
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Router
      basename='/'
      >
        <Nav />
        <Routes>
          <Route exact path="/" element={<Feed/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/goals" element={<Goals/>} />
          <Route exact path='/goal/:id' element= {<SingleGoal/>} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;