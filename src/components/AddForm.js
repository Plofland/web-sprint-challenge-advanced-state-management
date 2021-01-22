import React from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/index';

class AddForm extends React.Component {
  state = {
    name: '',
    nickName: '',
    position: '',
    description: ''
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value

      //   newSmurf: [
      //     //!This is very wrong but I don't know how to get specific input values assigned to each key
      //     (this.name: e.target.value),
      //     (this.nickName: e.target.value),
      //     (this.position: e.target.value),
      //     (this.description: e.target.value)
      //   ]
    });
  };

  handleSubmit = (e) => {
    e.proventDefault();
  };

  render() {
    return (
      <section>
        <h2>Add Smurf</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="name"
              id="name"
              value={this.state.newSmurf.name}
            />
            <br />
            <label htmlFor="name">Nickname:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="nickName"
              id="nickName"
              value={this.state.newSmurf}
            />
            <br />
            <label htmlFor="name">Position:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="position"
              id="position"
              value={this.state.newSmurf}
            />
            <br />
            <label htmlFor="name">Description:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="description"
              id="description"
              value={this.state.newSmurf}
            />
            <br />
          </div>

          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error:{' '}
          </div>
          <button>Submit Smurf</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.id,
    name: state.name,
    position: state.position,
    nickname: state.nickname,
    description: state.description,
    isFetching: false,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurf })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.
