import React, { Component } from "react";
import CocktailsContainer from "./CocktailsContainer";
import Fetch from "./Fetch";
import "semantic-ui-css/semantic.min.css";
import Form from "./Form";
import TestLinks from "./TestLinks";

let fetchReq = new Fetch();
const URL = "http://localhost:3000/api/v1/cocktails";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cocktails: [],
      hide: true,
    };
  }

  componentDidMount() {
    fetchReq.generalFetch(URL).then(cocktails => {
      this.setState({
        cocktails,
      });
    });
  }

  handleHide = () => {
    this.setState({
      hide: !this.state.hide,
    });
  };

  render() {
    let styleIt = this.state.hide ? "block" : "none";
    return (
      <>
        <div>
          <TestLinks hideIt={this.handleHide} />
        </div>
        <div className='App' style={{ display: styleIt }}>
          <Form />
          <CocktailsContainer cocktails={this.state.cocktails} />
        </div>
      </>
    );
  }
}

export default App;
