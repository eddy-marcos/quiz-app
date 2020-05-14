import React from 'react';

const RenderQuiz = (props) => {

   const handleRadioCheck = (option) => {
    props.updateChecked(option);
  }

  const handleNext = (answer) => {
    if (props.activeItem <= props.state.length) {
      props.updateActiveItem(props.activeItem+1);
    }

      props.updateChecked("");

    if (props.currentChecked === answer && props.currentChecked !== '') {
      props.updateScore(props.currentScore+1);
      return true;
    }

    return false;
  }

    return (
      props.state.map(d => {
          return(
            <div key={d.question} className={props.activeItem === d.question ? '' : 'hidden'}>
              <b><p>{d.question}. {d.description}</p></b>
                {
                  d.image ? <img src={d.image.url} alt={d.image.description}/>
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

                    {
                      props.currentChecked !== ''?
                      <button className="next-btn" onClick={e => handleNext(d.correctAnswer)}>Siguiente</button>
                      : <></>
                    }

                </div>

                <div className="pagination" style={{color: 'yellow', marginTop: '20px', fontSize: '20px'}}>
                  Pregunta {props.activeItem} de {props.state.length}
                </div>
        </div>
          )
        })
    );
  }

export default RenderQuiz;
