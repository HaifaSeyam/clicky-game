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
    topscore: 0,
    msg: "Click an Image to Begin!"
  }

  imgSelect = () => {
    this.setState({ 
      score: this.state.score + 1,
      topscore: this.state.topscore + 1
     });
  };


    render() {
        return (
          <React.Fragment>
            <NavBar score={this.state.score} topscore={this.state.topscore} msg={this.state.msg}><a href=".">Clicky Game</a></NavBar>
            <Jumbotron />

            <div className="containerDiv">
              {
                this.state.butterflies.map((butterflies, index) => (
                  <ButterflyCard key={index} image={butterflies.image} imgSelect={this.imgSelect} />
                ))
              }
            </div>

            </React.Fragment>
        );
      }
  
}

export default App;