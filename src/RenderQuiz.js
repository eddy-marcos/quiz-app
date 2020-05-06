import React from 'react';

const RenderQuiz = (props) => {

   const handleRadioCheck = (option) => {
    props.updateChecked(option);
  }

   const handleSubmit = (event, answer) => {
      event.preventDefault();

      if (props.currentChecked === answer) {
        // console.log('true');
        props.updateResult('Excelente! :)');
        return true;
      }

      // console.log('false');
      props.updateResult('Intenta de nuevo.');
      return false;
  }

  const handleNext = () => {
    if (props.activeItem < props.state.length) {
      props.updateActiveItem(props.activeItem+1);
    }
  }

    return (
      props.state.map(d => {
          return(
            <div key={d.question} style={{display: props.activeItem === d.question ? 'block' : 'none'}}>
              <p>{d.question} {d.description}</p>

              <form onSubmit={e => handleSubmit(e, d.correctAnswer)}>
                   <div>
                    <input type="radio" id="option1" name={d.question} value={d.question}
                      checked={props.currentChecked === "optionA" && props.activeItem === d.question}
                      onChange={e => handleRadioCheck("optionA")}
                      />
                      <label htmlFor="option1">{d.options['a']}</label>
                  </div>
                  <div>
                    <input type="radio" id="option2" name={d.question} value={d.question}
                      checked={props.currentChecked === "optionB" && props.activeItem === d.question}
                      onChange={e => handleRadioCheck("optionB")}
                      />
                      <label htmlFor="option2">{d.options['b']}</label>
                  </div>
                  <div>
                    <input type="radio" id="option3" name={d.question} value={d.question}
                      checked={props.currentChecked === "optionC" && props.activeItem === d.question}
                      onChange={e => handleRadioCheck("optionC")}
                      />
                      <label htmlFor="option3">{d.options['c']}</label>
                  </div>
                  <div>
                    <input type="radio" id="option4" name={d.question} value={d.question}
                      checked={props.currentChecked === "optionD" && props.activeItem === d.question}
                      onChange={e => handleRadioCheck("optionD")}
                      />
                      <label htmlFor="option4">{d.options['d']}</label>
                  </div>
                  <div>
                    <input type="submit" value="Submit"/>
                </div>
                  <span className="result">{props.currentResult}</span>
              </form>

              <button className="next-btn" onClick={handleNext}>Siguiente</button>
        </div>
          )
        })
    );
  }

export default RenderQuiz;
