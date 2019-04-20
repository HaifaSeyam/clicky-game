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

    //Loop through the butterflies array, and check 
    //if a specific element.clicked is true 
    //then change the score to zero and the msg to "incorrect guess - try again!"

    const selectedElement = this.state.butterflies.find(element => element.id === id);
    console.log(selectedElement)

    if (selectedElement.clicked) {
      this.setState({
        score: 0,
        msg: "Incorrect Guess - Try Again!"
      })

      selectedElement.clicked = false;


    } else {
      this.setState({
        score: this.state.score + 1,
        msg: "Correct Guess - Keep Going!"
      })
      
      selectedElement.clicked = true;
    }

    //if this element.clicked is false
    //change it to true
    //add +1 to score
    //check if topscore < 12 , if true add +1 , if false keep the current value
    //change the msg to "correct guess - keep going!"
    
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