import React from 'react';

import './App.css';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.timerID = null;
    this.state = {date: props.date};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }


  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {

    //let temp = this.state.date;

    //temp.setTime(temp.getTime()+1000);

    this.setState( state => ( {
      date: new Date(state.date.getTime() + 1000)
    }));
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock date={new Date('2012','4','5')}/>
      <Clock date={new Date(2019,4,5,12,45,36)}/>
    </div>
  );
}

export default App;
