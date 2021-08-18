//All reducers will be imported into this index.js

import { combineReducers } from 'redux';
import mainReducers from './mainReducer.js';




export default combineReducers({ mainReducer: mainReducers });
