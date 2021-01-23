import React, { Component } from 'react';

import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';
// import axios from 'axios';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { getSmurf } from './actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          {/* <a href="localhost:3000" className="navbar-brand">Smurf Village Database</a>  */}
          <h2 className="headliner">Smurf Village Database</h2>
        </nav>
        <main>
          <AddForm />
          <SmurfDisplay />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurf })(App);

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.
