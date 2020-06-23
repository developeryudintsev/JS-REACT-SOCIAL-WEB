import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let PostData = [
    {id: 1, massage: 'Hi ,how are you?',likesCount:10},
    {id: 1, massage: 'it`s my first post ',likesCount:100},
]

let dealogsData = [
    {id: 1, name: 'Dimach'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Igor'},
    {id: 4, name: 'Olga'},
    {id: 5, name: 'Nadzeika'},
]

let massageData = [
    {id: 1, massage: 'Hi'},
    {id: 2,massage: 'How are you'},
    {id: 3,massage: 'yoo'},
    {id: 4,massage: 'yoo'},
    {id: 5, massage: 'yoo'},
]

ReactDOM.render(
  <React.StrictMode>
    <App PostData={PostData} dealogsData={dealogsData} massageData={massageData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
