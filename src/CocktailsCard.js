import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card } from "semantic-ui-react";

const CocktailsCard = (cocktail) => {
    return (<div>
        <Card
            href="#card-example-link-card"
            header={cocktail.name}
            meta={cocktail.instructions}
            description={cocktail.description}
        />
    </div>)
};

export default CocktailsCard;
