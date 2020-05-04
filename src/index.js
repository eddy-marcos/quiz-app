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
    "correctAnswer" : "b"
  },
  {
    "question": 2,
    "description": "this is question 2",
    "options": {
      "a": "question2 option a",
      "b": "question2 option b",
      "c": "question2 option c",
      "d": "question2 option d"
    },
    "correctAnswer" : "b"
  },
  {
    "question": 3,
    "description": "this is question 3",
    "options": {
      "a": "question3 option a",
      "b": "question3 option b",
      "c": "question3 option c",
      "d": "question3 option d"
    },
    "correctAnswer" : "b"
  },
  {
    "question": 4,
    "description": "this is question 4",
    "options": {
      "a": "question4 option a",
      "b": "question4 option b",
      "c": "question4 option c",
      "d": "question4 option d"
    },
    "correctAnswer" : "b"
  },
  {
    "question": 5,
    "description": "this is question 5",
    "options": {
      "a": "question5 option a",
      "b": "question5 option b",
      "c": "question5 option c",
      "d": "question5 option d"
    },
    "correctAnswer" : "b"
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
