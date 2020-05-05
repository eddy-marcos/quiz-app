import React from 'react';

const handleRadioCheck = (radioTarget, answer) => {
  let radioValue = radioTarget.value;
  let correctAnswer = answer;

  if(correctAnswer === radioValue) {
    // console.log('true');
    return true;
  }
  // console.log('false');
  return false;
}

const submit = (event, answer) => {
    event.preventDefault();
    // console.log('answer ', answer);
    // need to get the checked input value
    console.log(event.target);
}

const RenderQuiz = (props) => {
  return (
    props.state.map(d => {
        return(
          <div key={d.question}>
            <p>{d.question} {d.description}</p>

            <form onSubmit={e => submit(e, d.correctAnswer)}>
                 <div>
                  <input type="radio" id="option1" name={d.question} value="a"
                    onClick={(e)=>handleRadioCheck(e.target, d.correctAnswer)}
                    defaultChecked/>
                    <label htmlFor="option1">{d.options['a']}</label>
                </div>
                <div>
                  <input type="radio" id="option2" name={d.question} value="b"
                    onClick={(e)=>handleRadioCheck(e.target, d.correctAnswer)}
                    />
                    <label htmlFor="option2">{d.options['b']}</label>
                </div>
                <div>
                  <input type="radio" id="option3" name={d.question} value="c"
                    onClick={(e)=>handleRadioCheck(e.target, d.correctAnswer)}
                    />
                    <label htmlFor="option3">{d.options['c']}</label>
                </div>
                <div>
                  <input type="radio" id="option4" name={d.question} value="d"
                    onClick={(e)=>handleRadioCheck(e.target, d.correctAnswer)}
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

export default RenderQuiz;
