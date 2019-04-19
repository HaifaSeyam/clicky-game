import React from "react";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron"
import ButterflyCard from "./components/ButterflyCard"
import butterflies from "./butterflies.json";
import "./App.css";

class App extends React.Component {

  state = {
    butterflies: butterflies,
    score: 0,
    topscore: 0
  }

    render() {
        return (
          <div>
            <NavBar score={this.state.score} topscore={this.state.topscore}>Clicky Game</NavBar>
            <Jumbotron />

            <div className="containerDiv">
              {
                this.state.butterflies.map((butterflies, index) => (
                  <ButterflyCard key={index} image={butterflies.image}/>
                ))
              }
            </div>

           

          </div>
        );
      }
  
}

export default App;