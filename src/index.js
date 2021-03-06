import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers/index';

const state = {
  books: [
    {
      id: Math.random(),
      title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
      category: 'Biography',
    },
    {
      id: Math.random(),
      title: 'Sapiens: A Brief History of Humankind',
      category: 'History',
    },
  ],
  filter: 'All',
};
const store = createStore(rootReducer, state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
