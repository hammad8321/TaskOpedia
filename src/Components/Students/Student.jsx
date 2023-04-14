import React from "react";

class Student extends React.Component {
  render() {
    return (
      <div className="col-4 p-1">
        <div className="rwo border">
          <div className="col-2">
            {/* <img src={`https://ui-avatars.com/api/?name=${props.name}`} className="w-100" alt=""></img>*/}

            <img
              src={this.props.headshot}
              className="w-100 py-2"
              alt="prop"
            ></img>
          </div>
          <div className="col-8">
            Name {this.props.name} <br />
            Programming Exp {this.props.experience} years
          </div>
          <div className="col-2">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Student;
