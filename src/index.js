import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import cartReducer from './components/reducers/CartReducer';
import { Provider } from 'react-redux';
import { createStore,combineReducers } from 'redux';
import fastGiftReducer from './components/reducers/FastGiftReducer';
import productReducer from './components/reducers/ProductReducer';


const rootReducer = combineReducers({
    cart: cartReducer,
    fast: fastGiftReducer,
    product: productReducer
  
})
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));