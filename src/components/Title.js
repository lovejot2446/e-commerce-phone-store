import React, { Component } from "react";

class Title extends Component {
  render() {
    const { title, name } = this.props;
    return (
      <div className="row">
        <div className="col-10 mx-auto my-2 text-center text-title">
          <h1 className="text-capitalize font-weight-bold">
            {name}
            <strong className="text-blue px-3">{title}</strong>
          </h1>
        </div>
      </div>
    );
  }
}

export default Title;
