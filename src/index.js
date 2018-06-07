import React from 'react';
import ReactDOM from 'react-dom';

// App Specific Styles
import './css/global/reset.css';
import './css/global/layout.module.css';
import './css/global/typography.module.css';

// Unity Styles
import 'rv-unity/src/css/base/variables.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
