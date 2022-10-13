import React from 'react';
import DaysControl from './DaysControl';
import SeazonsControl from './SeazonsControl';

const className = " btn btn1";
class ViewControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    }
    this.handleClick = this.handleClick.bind(this); //specific line of code that binds our function
  }
  // handleClick = () => {
  //   this.setState({formVisibleOnPage: true});
  // }
  handleClick() {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; // new code

    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <SeazonsControl />
      buttonText = "See seazon's availability"; // new code
    }else{
      currentlyVisibleState = <DaysControl />
      buttonText = "See days and hours"; // new code
    }
    return (
      <React.Fragment>
        {/* which component should be rendered */}
        {currentlyVisibleState}
        <button onClick={this.handleClick} className = {className}>{buttonText}</button> { /* new code */ }
      </React.Fragment>
    );
  }
}

export default ViewControl;