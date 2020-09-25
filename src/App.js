import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App" style={{backgroundColor:' #f9f7e8'}}>
      <Layout/>
    </div>
  );
}

export default App;
