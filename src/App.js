import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      quizes: []
    }
  }

  componentDidMount() {
    this.setState({
      quizes: this.props.quizData
    });
  }

  render(){
    return <h1>eeeeeeee</h1>
  }
}

export default App;
