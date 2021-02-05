import { createStore, combineReducers } from 'redux';
import searchReducer from '../reducer/searchReducer';
import articleReducer from '../reducer/articlelistReducer';


const rootReducer = combineReducers({searchState : searchReducer, articlesState : articleReducer});
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default store;