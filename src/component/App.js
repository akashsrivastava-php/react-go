import React from 'react';
import { connect } from 'react-redux';
import { changeText } from '../actions/textAction'
import logo from '../logo.svg';
import './App.less';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {props.text.welcomeText}
        </p>
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
          onClick={()=>props.changeText()}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  text: state.home
})

const mapDispatchToProps = dispatch => ({
  changeText: () => dispatch(changeText())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
