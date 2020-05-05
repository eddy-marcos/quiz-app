import React from 'react';

const handleRadioCheck = (radioTarget, answer) => {
  let radioValue = radioTarget.value;
  let correctAnswer = answer;

  // by default all radios come unchecked
  if(correctAnswer === radioValue) {
    console.log('true');
    return true;
  }
  console.log('false');
  return false;
}

const submit = () => {
    console.log('submit');
}

const RenderQuiz = (props) => {
  return (
    props.state.map(d => {
        return(
          <div key={d.question}>
            <p>{d.question} {d.description}</p>
              {/* important to understand
                value: it's used to identify which radio button in a group is selected.
                radio group: A radio group is defined by giving each of radio buttons
                            in the group the same name. You can have as many radio groups
                             on a page as you like, as long as each has its own unique name.
              * so each with the name set to sameName and each with a unique value that uniquely
                identifies that individual radio button within the group.
              *  They each also have a unique id, which is used by the <label> element's for
                attribute to associate the labels with the radio buttons.
                https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
                */}

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

          <div className="result">
            <button onClick={submit}>Submit</button>
          </div>
        </div>
        )
      })
  );
}

export default RenderQuiz;
