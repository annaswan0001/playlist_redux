import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import './index.css';
import App from './App.jsx';
import combineReducer from './reducers'

const middleware = [ thunk ]
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
  }
const store = createStore(
    combineReducer, composeWithDevTools(applyMiddleware(...middleware))
  );

  
store.subscribe(
    ()=>{
        console.log(store.getState())
        
        }
            
            
    )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

, document.getElementById('root'));

// const addTrackbtn = document.querySelectorAll('.addTrack')[0];
// const trackValue = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];

// 
// store.subscribe(
//     ()=>{
//         console.log(store.getState())
//         list.innerHTML="";
//         trackValue.value =""
//         store.getState().map(track => {
//             const li = document.createElement("li");
//             li.textContent=track;
//             list.appendChild(li)
//         }
            
            
//     )
//     }
    

// )





// addTrackbtn.addEventListener('click',
// function(){
//     const inputValue = trackValue.value
//     store.dispatch({type:"ADD_TRACK",payload:inputValue})
// })






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
