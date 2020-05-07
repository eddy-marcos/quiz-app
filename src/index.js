import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//https://www.signupgenius.com/home/trivia-questions-for-kids.cfm

const data = [
  {
    "question": 1,
    "description": "Yo vivo en _____________",
    "options": {
      "a": "Panama",
      "b": "Costa Rica",
      "c": "Turrialba",
      "d": "Estados Unidos"
    },
    "correctAnswer" : "optionB"
  },
  {
    "question": 2,
    "description": "Cuáles es el orden de las vocales?",
    "options": {
      "a": "a e i u o",
      "b": "e i o u a",
      "c": "a e i o u",
      "d": "o e i o u"
    },
    "correctAnswer" : "optionC"
  },
  {
    "question": 3,
    "description": "En que provincia vivo Yo?",
    "options": {
      "a": "Puntarenas",
      "b": "Cartagp",
      "c": "Guanacaste",
      "d": "SanJosé"
    },
    "correctAnswer" : "optionD"
  },
  {
    "question": 4,
    "description": "La última letra del Abecedario es?",
    "options": {
      "a": "Z",
      "b": "Y",
      "c": "X",
      "d": "A"
    },
    "correctAnswer" : "optionA"
  },
  {
    "question": 5,
    "description": "La suma de 2 + 3 es?",
    "options": {
      "a": "6",
      "b": "3",
      "c": "5",
      "d": "7"
    },
    "correctAnswer" : "optionC"
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
