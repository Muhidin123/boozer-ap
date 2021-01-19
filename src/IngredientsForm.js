import React from "react";
import { Form, Input} from "semantic-ui-react";


const IngredientForm = () => {
  return (
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-ingredient-name'
        control={Input}
        label='Ingredient name'
        placeholder='Ingredient name'
      />
      <Form.Field
        id='form-input-control-quantity'
        control={Input}
        label='Quantity'
        placeholder='Quantity'
      />
    </Form.Group>
  );
};

export default IngredientForm