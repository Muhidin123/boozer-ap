import "semantic-ui-css/semantic.min.css";
import { Card } from "semantic-ui-react";
import React from "react";

const CocktailsCard = cocktail => {
  return (
    <Card
      href='http://localhost:3000/api/v1/cocktails'
      header={cocktail.oneCocktail.name}
      description={cocktail.oneCocktail.instruction}
      meta={cocktail.oneCocktail.description}
    />
  );
};

export default CocktailsCard;
