import React from 'react';
import './App.css';
import RenderQuiz from './RenderQuiz';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      quizes: [],
      checkedRadio: '',
      activeQuestion: 0,
      score: 0
    }

    this.updateRadioState = this.updateRadioState.bind(this);
    this.updateActiveQuestion = this.updateActiveQuestion.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
    this.updateScore = this.updateScore.bind(this);
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

  updateActiveQuestion(question){
    this.setState({
     activeQuestion : question
    });
  }

  startQuiz(){
    this.setState({activeQuestion : 1});
  }

  updateScore(score){
    this.setState({score});
  }

   resetQuiz() {
    if (window.confirm("Seguro que quieres comenzar otra vez?")) {
      this.setState({
       activeQuestion : 1
      });
    } else return false;
  }

   getResult() {
    console.log('result');
  }

  render(){
    const yourScore = (this.state.score / this.state.quizes.length) * 100;

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
            currentScore={this.state.score}
            updateScore={this.updateScore}
            activeItem={this.state.activeQuestion}
            updateActiveItem={this.updateActiveQuestion}
            />
        </section>

        <div className="results" style={{color: 'red'}}>
            {yourScore.toString()}
        </div>

        {
          this.state.activeQuestion > this.state.quizes.length ?
          <>
            <button className="reset-btn" onClick={this.resetQuiz}>Otra Vez</button>
            <button className="result-btn" onClick={this.getResult}>Ver Resultado</button>
          </>
          : <></>
        }
      </div>
    );

  }
}

export default App;
