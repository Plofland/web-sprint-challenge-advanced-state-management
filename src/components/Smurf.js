import React from 'react';
// import { Card } from 'react-bootstrap';

class Smurf extends React.Component {
  render() {
    const { smurf } = this.props;

    return (
      //   <div data-testid="smurf" className="card">
      //     <h3>{this.props.smurf.name}</h3>
      //     <p>Nickname: {this.props.smurf.nickName}</p>
      //     <p>Position: {this.props.smurf.position}</p>
      //     <p>Description: {this.props.smurf.description}</p>
      //   </div>
      <div data-testid="smurf" className="card">
        <div className="card-body">
          <h3 className="card-title">{smurf.name}</h3>
          <h6 className="card-subtitle">{smurf.nickname}</h6>
          <h6 className="card-subtitle">{smurf.position}</h6>
          <p className="card-text">{smurf.description}</p>
        </div>
      </div>
    );
  }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.
