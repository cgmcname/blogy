import React, { Component } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';

import CustomLayout from './containers/Layout';
//import ArticleList from './containers/ArticleListView';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <CustomLayout>
              <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

export default App;
