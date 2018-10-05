import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import rootReducer from './reducer';
import { receive_image } from './action/images-action';

const store = createStore(rootReducer);
// store.subscribe(() => console.log(store.getState()));

// Get data from server
fetch("http://localhost:3000/api/images").then(res =>  res.json()).then((images) => store.dispatch(receive_image(images)))

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <HashRouter>
            <Route exact path="/" component={App}></Route>
         </HashRouter>
      </BrowserRouter>
   </Provider>
   ,
document.getElementById("root"));