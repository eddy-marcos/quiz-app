import React from 'react';

class RenderQuiz extends React.Component {

   handleRadioCheck(radioTarget, answer, option) {
    let radioValue = radioTarget.value;
    let correctAnswer = answer;
    console.log('option ', option);
    this.props.updateChecked(option);

    if(correctAnswer === radioValue) {
      // console.log('true');
        return true;
    }
    // console.log('false');
    return false;
  }

   handleSubmit(event, answer) {
      event.preventDefault();
      // console.log('answer ', answer);
      // need to get the checked input value
      console.log(this.element);
  }

  render(props) {
    // console.log(this.props.updateChecked);

    return (
      this.props.state.map(d => {
          return(
            <div key={d.question}>
              <p>{d.question} {d.description}</p>

              <form onSubmit={e => this.handleSubmit(e, d.correctAnswer)}
                ref={e=>this.element = e}>
                   <div>
                    <input type="radio" id="option1" name={d.question} value={d.question}
                      checked={this.props.currentChecked === "option1"}
                      onChange={(e)=>this.handleRadioCheck(e.target, d.correctAnswer, "option1")}
                      />
                      <label htmlFor="option1">{d.options['a']}</label>
                  </div>
                  <div>
                    <input type="radio" id="option2" name={d.question} value={d.question}
                      checked={this.props.currentChecked === "option2"}
                      onChange={(e)=>this.handleRadioCheck(e.target, d.correctAnswer, "option2")}
                      />
                      <label htmlFor="option2">{d.options['b']}</label>
                  </div>
                  <div>
                    <input type="radio" id="option3" name={d.question} value={d.question}
                      checked={this.props.currentChecked === "option3"}
                      onChange={(e)=>this.handleRadioCheck(e.target, d.correctAnswer, "option3")}
                      />
                      <label htmlFor="option3">{d.options['c']}</label>
                  </div>
                  <div>
                    <input type="radio" id="option4" name={d.question} value={d.question}
                      checked={this.props.currentChecked === "option4"}
                      onChange={(e)=>this.handleRadioCheck(e.target, d.correctAnswer, "option4")}
                      />
                      <label htmlFor="option4">{d.options['d']}</label>
                  </div>
                  <div>
                    <input type="submit" value="Submit"/>
                  </div>
              </form>
        </div>
          )
        })
    );
  }
}

export default RenderQuiz;
