import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App  from './App';
import * as serviceWorker from './serviceWorker';

class App extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      rand: 1
    }
     this.changeQuote = this.changeQuote.bind(this);
   }
  changeQuote(){
    this.setState({
      rand: Math.floor(Math.random() * Math.floor(12))
    });
  }
  render(){
    
      const quotes = ['The ocean is made of drops.', 
      'Not quite my tempo.', 
      'Hell is made for people like you.', 
      'Live as if you were to die tomorrow. Learn as if you were to live forever.', 
      'That which does not kill us makes us stronger.',
      'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.',
      'We must not allow other people’s limited perceptions to define us.',
      'Do what you can, with what you have, where you are.',
      'Be yourself; everyone else is already taken.',
      'This above all: to thine own self be true.',
      'If you cannot do great things, do small things in a great way.',
      'If opportunity doesn’t knock, build a door.'
    ];
      const authors = ['Moana', 
      'Whiplash', 
      'Friends',
      'Moana', 
      'Mahatma Gandhi',
      'Friedrich Nietzsche',
      'Bernard M. Baruch',
      'Virginia Satir',
      'Theodore Roosevelt',
      'Oscar Wilde',
      'William Shakespeare',
      'Napoleon Hill',
      'Milton Berle'
    ];
      const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
      const changingBG = {
        background: colors[this.state.rand]
      };
      const changeColor = {color: colors[this.state.rand]};
      document.querySelector("body", "button").style.background = colors[this.state.rand];

    return(
      <div id="container" style={{transition:2000}}>
        <div id="quote-box">
          <p id="text">
            <i class="fa fa-quote-left"  aria-hidden="true" style={changeColor}></i>
            <span> </span>
              {quotes[this.state.rand]}</p>
          <p id="author">- {authors[this.state.rand]}</p>
          <button class="fa fa-twitter" style={changingBG}> 
          {/* eslint-disable-next-line */}
            <a id="tweet-quote" href="twitter.com/intent/tweet"></a></button> 
          <button id="new-quote" onClick={this.changeQuote} style={changingBG}>New quote</button>
      </div>
        </div>
    );
  }
}
ReactDOM.render(<App/>,
              document.getElementById("app"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
