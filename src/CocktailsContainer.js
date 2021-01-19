import React, { Component } from "react";
import CocktailsCard from "./CocktailsCard";
import { Card, Header } from "semantic-ui-react";

export default class CocktailsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header size='huge' texAlign='center'>
          Cocktails
        </Header>
        <Card.Group centered="true">
          {this.props.cocktails.map(cocktail => {
            return <CocktailsCard oneCocktail={cocktail} key={cocktail.id} />;
          })}
        </Card.Group>
      </>
    );
  }
}
