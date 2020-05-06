import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//https://www.signupgenius.com/home/trivia-questions-for-kids.cfm

const data = [
  {
    "question": 1,
    "description": "this is question 1",
    "options": {
      "a": "question1 option a",
      "b": "question1 option b",
      "c": "question1 option c",
      "d": "question1 option d"
    },
    "correctAnswer" : "optionA"
  }
]

ReactDOM.render(
  <React.StrictMode>
   <App quizData={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
