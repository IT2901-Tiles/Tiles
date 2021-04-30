import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AudioRecorder from 'audio-recorder-polyfill'


if (!window.MediaRecorder) {
  document.write(
    decodeURI('%3Cscript defer src="/polyfill.js">%3C/script>')
  )
}

window.MediaRecorder = AudioRecorder

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
