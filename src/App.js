import React from "react";
import Header from "./components/Header";


class App extends React.Component {

  state = {
    score: 0,
    highscore: 0
  }

    render() {
        return (<Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>);
      }
  
}

export default App;