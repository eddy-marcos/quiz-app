import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//https://www.signupgenius.com/home/trivia-questions-for-kids.cfm

const data = [
  {
    "question": 1,
    "description": "Cuántos minutos hay en una hora?",
    "options": {
      "a": "40",
      "b": "35",
      "c": "60",
      "d": "10"
    },
    "image": {
      "url" : "/quiz-app/images/reloj.png",
      "description" : "reloj"
    },
    "correctAnswer" : "optionC"
  },
  {
    "question": 2,
    "description": "Que planeta está mas cerca del sol?",
    "options": {
      "a": "Venus",
      "b": "Mercurio",
      "c": "Tierra",
      "d": "Plutón"
    },
    "correctAnswer" : "optionB"
  },
  {
    "question": 3,
    "description": "Complete: one, two, three, four, five, six, seven, ___ , nine, ten",
    "options": {
      "a": "eight",
      "b": "eleven",
      "c": "three",
      "d": "five"
    },
    "image": {
      "url" : "/quiz-app/images/numeros.jpg",
      "description" : "numeros"
    },
    "correctAnswer" : "optionA"
  },
  {
    "question": 4,
    "description": "¿Qué significa que dos palabras sean sinónimos?",
    "options": {
      "a": "significan algo diferente",
      "b": "que son palabras muy largas",
      "c": "que son palabras bonitas",
      "d": "tienen un mismo significado pero se escriben diferente."
    },
    "correctAnswer" : "optionD"
  },
  {
    "question": 5,
    "description": "Si a 10 le resto 3, cuál es el resultado?",
    "options": {
      "a": "7",
      "b": "5",
      "c": "2",
      "d": "8"
    },
    "correctAnswer" : "optionA"
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
