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

  imgSelect = id => {

    butterflies.sort(() => Math.random() - 0.5);
    this.setState({
      butterflies: butterflies
    });

    const selectedElement = this.state.butterflies.find(element => element.id === id);
    console.log(selectedElement)

    if (selectedElement.clicked) {

      //I need to change the clicked property to false for all of the array elements
      selectedElement.clicked = false;

      const reset = this.state.butterflies.map(element => {
       return {...element, clicked: false}
      })
      console.log(reset)

      this.setState({
        score: 0,
        butterflies: reset,
        msg: "Incorrect Guess - Try Again!"
      })

    } else {

      selectedElement.clicked = true;

      this.setState({
        score: this.state.score + 1,
        msg: "Correct Guess - Keep Going!"
      });

        if(this.state.score === this.state.topscore) {
          
            this.setState({
              topscore: this.state.topscore + 1,
            });
      
        }

      }
      
  };

    render() {
        return (
          <React.Fragment>
            <NavBar score={this.state.score} topscore={this.state.topscore} msg={this.state.msg}><a href=".">Clicky Game</a></NavBar>
            <Jumbotron />

            <div className="containerDiv">
              {
                this.state.butterflies.map((butterflies, index) => (
                  <ButterflyCard key={index} id={butterflies.id} image={butterflies.image} imgSelect={this.imgSelect}/>
                ))
              }
            </div>

            </React.Fragment>
        );
      }
  
}

export default App;