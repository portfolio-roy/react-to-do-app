import React from 'react';
// import ReactDOM from "react-dom"
import ReactDOM from 'react-dom/client';
import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.scss';

// ReactDOM.render(<TodoContainer />, document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
);
