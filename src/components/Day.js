import React from "react";
import PropTypes from "prop-types";

function Day(props){
  return (
    <React.Fragment>
      <h3>{props.day} - {props.names}</h3>
      <p><em>{props.location}</em></p>
      <p><em>{props.hours}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Day.propTypes = {
// propertyName: PropTypes.propertyType
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Day;