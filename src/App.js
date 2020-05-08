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
      activeQuestion: 0
    }

    this.updateRadioState = this.updateRadioState.bind(this);
    this.updateResult = this.updateResult.bind(this);
    this.updateActiveQuestion = this.updateActiveQuestion.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
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

  startQuiz(){
    this.setState({activeQuestion : 1});
  }

  render(){
    return (
      <div className="container">

        {
          this.state.activeQuestion === 0 ?
          <div>
            <h1>Bienvenido al Quiz</h1>
            <p><b>Instrucciones generales:</b><br/><br/>
              Selecciona una opción y toca en "Listo" para ver el resultado.<br/>
            Toca "Siguiente" para avanzar a la siguiente pregunta,
              y "Otra vez" para volver a empezar.
            </p>

            <button className="start-btn" onClick={this.startQuiz}>Comenzar</button>
          </div> : <></>
        }

        <section className="question-content">
          <RenderQuiz
            state={this.state.quizes}
            updateChecked={this.updateRadioState}
            currentChecked={this.state.checkedRadio}
            currentResult={this.state.result}
            updateResult={this.updateResult}
            activeItem={this.state.activeQuestion}
            updateActiveItem={this.updateActiveQuestion}
            />
        </section>
      </div>
    );

  }
}

export default App;
