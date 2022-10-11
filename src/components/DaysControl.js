import React from 'react';
import DaysList from './DaysList';

class DaysControl extends React.Component{

  constructor (props){
    super(props);
  }

  render(){
    return(
      <DaysList />
    );
  }
}

export default DaysControl;