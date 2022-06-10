import React from "react";
import PropTypes from 'prop-types';


class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper />
        </div>
      );
    }
  };

  class Camper extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <p>{this.props.name}</p>
      )
    }
  }

  Camper.defaultProps = { name: "CamperBot" }

  Camper.propTypes = {
    name: PropTypes.string.isRequired
  }


export default CampSite;