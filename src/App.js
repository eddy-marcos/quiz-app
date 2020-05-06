import React from 'react';
import './App.css';
import RenderQuiz from './RenderQuiz';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      quizes: [],
      checkedRadio: 'optionA',
      result: '',
      activeQuestion: 1
    }

    this.updateRadioState = this.updateRadioState.bind(this);
    this.updateResult = this.updateResult.bind(this);
    this.updateActiveQuestion = this.updateActiveQuestion.bind(this);
  }

  componentDidMount() {
    this.setState({
      quizes: this.props.quizData
    });
  }

   updateRadioState(option){
    this.setState({
      checkedRadio: option
    });
  }

   updateResult(result){
    this.setState({
      result
    });
  }

  updateActiveQuestion(question){
    this.setState({
     activeQuestion : question
    });
  }

  render(){
    return (
      <div className="container">
        <h1>O duis welcome quibusdam.</h1>
        <p>instructions Commodo irure aut pariatur concursionibus.</p>
        <RenderQuiz
          state={this.state.quizes}
          updateChecked={this.updateRadioState}
          currentChecked={this.state.checkedRadio}
          currentResult={this.state.result}
          updateResult={this.updateResult}
          activeItem={this.state.activeQuestion}
          updateActiveItem={this.updateActiveQuestion}
          />
      </div>
    );

  }
}

export default App;
