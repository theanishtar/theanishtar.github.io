import './App.css';
import React from 'react';
import Home from './components/home/index';
import Footer from './components/footer/index'

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Home></Home>
        <Footer></Footer>
      </div>
    );
  }

}

export default App;
