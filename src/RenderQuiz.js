import React from 'react';

const RenderQuiz = (props) => {
  return (
      props.state.map(d => {
        console.log('d ', d);

        return(
          <div key={d.question}>
            <p>{d.question} {d.description}</p>
            {/*  <ul>
                <li>{d.answers['a']}</li>
                <li>{d.answers['b']}</li>
                <li>{d.answers['c']}</li>
                <li>{d.answers['d']}</li>
              </ul> */}

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
            <input type="radio" id="answer1" name="quiz" value="answer1"/>
              <label htmlFor="answer1">{d.answers['a']}</label>
          </div>
          <div>
            <input type="radio" id="answer2" name="quiz" value="answer2"/>
              <label htmlFor="answer2">{d.answers['b']}</label>
          </div>
          <div>
            <input type="radio" id="answer3" name="quiz" value="answer3"/>
              <label htmlFor="answer3">{d.answers['c']}</label>
          </div>
          <div>
            <input type="radio" id="answer4" name="quiz" value="answer4"/>
              <label htmlFor="answer4">{d.answers['d']}</label>
          </div>
        </div>
        )
      })
  );
}

export default RenderQuiz;
