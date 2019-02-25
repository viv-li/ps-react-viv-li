import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './docs/Docs';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './index.css';
import '../node_modules/highlight.js/styles/ocean.css'
import * as serviceWorker from './serviceWorker';

configure({ adapter: new Adapter() });
ReactDOM.render(<Docs />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
