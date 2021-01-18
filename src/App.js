import "./App.css";
import React, { Component } from "react";
import CocktailsContainer from "./CocktailsContainer";
import Fetch from "./Fetch";
import 'semantic-ui-css/semantic.min.css'


let fetchReq = new Fetch();
const URL = "http://localhost:3000/api/v1/cocktails";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cocktails: [],
        };
    }

    componentDidMount() {
        fetchReq.generalFetch(URL).then((cocktails) => {
            this.setState({
                cocktails,
            });
        });
    }

    render() {
        return (
            <div className="App">
                <CocktailsContainer cocktails={this.state.cocktails} />
            </div>
        );
    }
}

export default App;
