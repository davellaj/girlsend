import React, { Component } from 'react';
import NavBar from './NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="header-container">
          <div className="header-background">
            <NavBar />
              <div className="header-content">
                <div className="header-image-container">
                  <div className="header-image">
                    <img src="/mariaJamie.jpg" alt="founders" className="header-image"/>
                  </div>
                </div>
                <div className="header-text-container">
                  <div className="header-text">
                    <h1>Girlsend</h1>
                    <p>
                      Follow Girlsend from zero to launch as we discuss our decision making
                      and what we did to start a business. Stay for the inspirational posts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
