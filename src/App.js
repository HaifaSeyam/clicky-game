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

    const sortedButterflies = this.state.butterflies.sort(() => Math.random() - 0.5);
    this.setState({
      butterflies: sortedButterflies
    });

    const selectedElement = this.state.butterflies.find(element => element.id === id);
    console.log(selectedElement)

    if (selectedElement.clicked) {
      //This code for some reason does not work as required
      // const reset = this.state.butterflies.map(element => {
      //  return {...element, clicked: false}
      // });

      //Creating a new array with the same values of the state array --- this is done to over come the issue of mutating
      var reset = this.state.butterflies;

      //Set the clicked value to false for all elements
      for(let i = 0; i < reset.length; i++) {
        reset[i].clicked = false;
      }

      //console.log("RESET", reset);

      //Set the butterflies array of the state to the reset array
      this.setState({
        score: 0,
        butterflies: reset,
        msg: "Incorrect Guess - Try Again!"
      })

      //console.log("New Butterflies", this.state.butterflies);

    } 
    else {
        selectedElement.clicked = true;

        if (this.state.score < 11) {
          //console.log("SCORE < 12 before adding 1", this.state.score);
            this.setState({
              score: this.state.score + 1,
              msg: "Correct Guess - Keep Going!"
            });

            if(this.state.score === this.state.topscore) {
              this.setState({
                topscore: this.state.topscore + 1,
              });
            }
            //console.log("SCORE < 12 after adding 1", this.state.score);
            console.log("ORIGINAL", this.state.butterflies);
        } else if (this.state.score === 11){

          //console.log("SCORE === 12 before clearing", this.state.score);
          const clear = this.state.butterflies.map(element => {
            return {...element, clicked: false}
           });

           this.setState({
             score: 0,
             topscore: 0,
             butterflies: clear,
             msg: "You have won! Start again .."
           });

           console.log("CLEAR: ", clear)
           //console.log("SCORE === 12 after clearing", this.state.score);
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