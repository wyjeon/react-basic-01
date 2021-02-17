import React from 'react';
import Navbar from './Componetns/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MoviePage from './pages/MoviePage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/movies" exact>
            <MoviePage />
          </Route>
          <Route path="/users" exact>
            <UsersPage />
          </Route>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
