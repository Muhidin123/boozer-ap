import React, { Component } from "react";
import CocktailsCard from "./CocktailsCard";
import { Card } from "semantic-ui-react";

export default class CocktailsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.cocktails.map((cocktail) => {
                    return (
                        <CocktailsCard cocktail={cocktail} key={cocktail.id} />
                    );
                })}
            </div>
        );
    }
}
