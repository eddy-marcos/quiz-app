import React from 'react';
import './App.css';
import RenderQuiz from './RenderQuiz';

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
    return (
      <>
        <h1>O duis welcome quibusdam.</h1>
        <RenderQuiz state={this.state.quizes}/>
      </>
    );

  }
}

export default App;
