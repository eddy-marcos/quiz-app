import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const data = [{
    "question": 1,
    "description": "this is question 1",
    "answers": {
      "a": "Kulas Light",
      "b": "Apt. 556",
      "c": "Gwenborough",
      "d": "92998-3874",
    },
  },
  {
    "question": 2,
    "description": "this is question 2",
    "answers": {
      "a": "Kulas Light",
      "b": "Apt. 556",
      "c": "Gwenborough",
      "d": "92998-3874",
    },
  },
  {
    "question": 3,
    "description": "this is question 3",
    "answers": {
      "a": "Kulas Light",
      "b": "Apt. 556",
      "c": "Gwenborough",
      "d": "92998-3874",
    },
  },
  {
    "question": 4,
    "description": "this is question 4",
    "answers": {
      "a": "Kulas Light",
      "b": "Apt. 556",
      "c": "Gwenborough",
      "d": "92998-3874",
    },
  },
  {
    "question": 5,
    "description": "this is question 5",
    "answers": {
      "a": "Kulas Light",
      "b": "Apt. 556",
      "c": "Gwenborough",
      "d": "92998-3874",
    },
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
