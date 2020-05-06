import React from 'react';

class RenderQuiz extends React.Component {

   handleRadioCheck(option) {
    this.props.updateChecked(option);
  }

   handleSubmit(event, answer) {
      event.preventDefault();

      if (this.props.currentChecked === answer) {
        // console.log('true');
        this.props.updateResult('Excelente! :)');
        return true;
      }

      // console.log('false');
      this.props.updateResult('Intenta de nuevo.');
      return false;
  }

  render(props) {
    return (
      this.props.state.map(d => {
          return(
            <div key={d.question}>
              <p>{d.question} {d.description}</p>

              <form onSubmit={e => this.handleSubmit(e, d.correctAnswer)}>
                   <div>
                    <input type="radio" id="option1" name={d.question} value={d.question}
                      checked={this.props.currentChecked === "optionA"}
                      onChange={e => this.handleRadioCheck("optionA")}
                      />
                      <label htmlFor="option1">{d.options['a']}</label>
                  </div>
                  <div>
                    <input type="radio" id="option2" name={d.question} value={d.question}
                      checked={this.props.currentChecked === "optionB"}
                      onChange={e => this.handleRadioCheck("optionB")}
                      />
                      <label htmlFor="option2">{d.options['b']}</label>
                  </div>
                  <div>
                    <input type="radio" id="option3" name={d.question} value={d.question}
                      checked={this.props.currentChecked === "optionC"}
                      onChange={e => this.handleRadioCheck("optionC")}
                      />
                      <label htmlFor="option3">{d.options['c']}</label>
                  </div>
                  <div>
                    <input type="radio" id="option4" name={d.question} value={d.question}
                      checked={this.props.currentChecked === "optionD"}
                      onChange={e => this.handleRadioCheck("optionD")}
                      />
                      <label htmlFor="option4">{d.options['d']}</label>
                  </div>
                  <div>
                    <input type="submit" value="Submit"/>
                </div>
                  <span className="result">{this.props.currentResult}</span>
              </form>
        </div>
          )
        })
    );
  }
}

export default RenderQuiz;
