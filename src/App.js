import React from 'react';
import './App.css';
import RenderQuiz from './RenderQuiz';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      quizes: [],
      checkedRadio: 'option1'
    }

    this.updateRadioState = this.updateRadioState.bind(this);
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

  render(){
    return (
      <>
        <h1>O duis welcome quibusdam.</h1>
        <p>instructions Commodo irure aut pariatur concursionibus.</p>
        <RenderQuiz
          state={this.state.quizes}
          updateChecked={this.updateRadioState}
          currentChecked={this.state.checkedRadio}
          />
      </>
    );

  }
}

export default App;
