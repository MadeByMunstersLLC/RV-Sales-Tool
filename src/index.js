import React from 'react';
import ReactDOM from 'react-dom';
import './css/global/reset.css';
import './css/global/layout.module.css';
import './css/global/typography.module.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
