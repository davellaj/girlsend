import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="header-container">
          <div className="header-image-container">
            <div className="header-image">
              <img src="/mariaJamie.jpg" alt="founders" className="header-image"/>
            </div>
          </div>
            <div className="header-text-container">
              <div className="header-text">
                <h1>Girlsend</h1>
                <p>
                  Follow Girlsend from zero to launch
                </p>
              </div>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
