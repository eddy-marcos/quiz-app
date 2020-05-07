import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//https://www.signupgenius.com/home/trivia-questions-for-kids.cfm

const data = [
  {
    "question": 1,
    "description": "La suma de 8 + 2 es?",
    "options": {
      "a": "8",
      "b": "7",
      "c": "10",
      "d": "11"
    },
    "correctAnswer" : "optionC"
  },
  {
    "question": 2,
    "description": "Para comer utilizo el sentido de_____",
    "options": {
      "a": "olfato",
      "b": "audición",
      "c": "vista",
      "d": "gusto"
    },
    "correctAnswer" : "optionD"
  },
  {
    "question": 3,
    "description": "En que parte del cuerpo están las piernas?",
    "options": {
      "a": "Estremidades Inferiores",
      "b": "Cabeza",
      "c": "Estremidades superiores",
      "d": "tronco"
    },
    "correctAnswer" : "optionA"
  },
  {
    "question": 4,
    "description": "Complete la palabra. Cu__po",
    "options": {
      "a": "la",
      "b": "ez",
      "c": "do",
      "d": "er"
    },
    "correctAnswer" : "optionD"
  },
  {
    "question": 5,
    "description": "My name is____",
    "options": {
      "a": "Meybel",
      "b": "Aaron",
      "c": "Eddy",
      "d": "María"
    },
    "correctAnswer" : "optionB"
  }
]

ReactDOM.render(
   <App quizData={data}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
