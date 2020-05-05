import React from 'react';

class RenderQuiz extends React.Component {

   handleRadioCheck(radioTarget, answer) {
    let radioValue = radioTarget.value;
    let correctAnswer = answer;
    // radioTarget.setAttribute('checked', true)

  //   if (e.target && e.target.nodeName === "LI") {
  //   let elements = document.getElementById('main-li').children;
  //   for (let i = 0; i < elements.length; ++i) {
  //       elements[i].classList.remove("active");
  //   }
  //   e.target.classList.add("active");
  // }


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
      console.log(this.element.checked);
  }

  render() {
    return (
      this.props.state.map(d => {
          return(
            <div key={d.question}>
              <p>{d.question} {d.description}</p>

              <form onSubmit={e => this.handleSubmit(e, d.correctAnswer)}>
                   <div>
                    <input type="radio" id="option1" name={d.question} value="a"
                      onClick={(e)=>this.handleRadioCheck(e.target, d.correctAnswer)}
                      ref={e=>this.element = e}
                      />
                      <label htmlFor="option1">{d.options['a']}</label>
                  </div>
                  <div>
                    <input type="radio" id="option2" name={d.question} value="b"
                      onClick={(e)=>this.handleRadioCheck(e.target, d.correctAnswer)}
                      ref={e=>this.element = e}
                      />
                      <label htmlFor="option2">{d.options['b']}</label>
                  </div>
                  <div>
                    <input type="radio" id="option3" name={d.question} value="c"
                      onClick={(e)=>this.handleRadioCheck(e.target, d.correctAnswer)}
                      ref={e=>this.element = e}
                      />
                      <label htmlFor="option3">{d.options['c']}</label>
                  </div>
                  <div>
                    <input type="radio" id="option4" name={d.question} value="d"
                      onClick={(e)=>this.handleRadioCheck(e.target, d.correctAnswer)}
                      ref={e=>this.element = e}
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
