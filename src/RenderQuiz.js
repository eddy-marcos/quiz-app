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
      props.updateResult('');
    }
  }

  const resetQuiz = () => {
    props.updateActiveItem(1);
    props.updateResult('');
  }

    return (
      props.state.map(d => {
          return(
            <div key={d.question} style={{display: props.activeItem === d.question ? 'block' : 'none'}}>
              <p>{d.question}. {d.description}</p>
                {
                  d.question === 1 ? <img src={d.image.url} alt={d.image.description}/>
                : <></>
                }
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
                    <button className="submit-btn"
                      onClick={event => handleSubmit(event, d.correctAnswer)}
                      >Listo</button>
                    <button className="next-btn" onClick={handleNext}>Siguiente</button>
                    <button className="reset-btn" onClick={resetQuiz}>Otra Vez</button>
                </div>
                  <span className="result">{props.currentResult}</span>
        </div>
          )
        })
    );
  }

export default RenderQuiz;
