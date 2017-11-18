//styles
import 'styles/main.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import actions from './pages/Home/action';
import Cookies from 'js-cookie';

// Init Store
import store from './store';

// Pages
import Home from 'pages/Home';
import StockBuy from 'pages/StockBuy';
import Register from 'pages/Register';
import Personal from 'pages/PersonalCenter';

// Global variables
import { init } from 'utils/global';

init();

class App extends Component{
  componentWillMount(){
    const token = Cookies.get('TOKEN');
    const customerId = Cookies.get('CUSTOMER_ID');

    if(token){
      store.dispatch(actions.updateLogin(true, token, customerId))
    }
  }

  render() {
    return (
      <Router>
        <div id="App">
          <Route exact path="/" component={Home}/>
          <Route exact path="/stockbuy" component={StockBuy}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/personal" component={Personal}/>
        </div>
      </Router>
    );
  }
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
