import React, { useState } from "react";
import { Form, Button, Input, Select } from "semantic-ui-react";

const options = [
  { text: "Male", value: "male" },
  { text: "Female", value: "female" },
  { text: "Other", value: "other" },
];
const NewCocktailForm = () => {
  const [ingredient, setIngredient] = useState([IngredientForm]);
  return (
    <Form>
      <Form.Field>
        <label>Name</label>
        <input placeholder='Name' />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input placeholder='Description' />
      </Form.Field>
      <Form.Field>
        <label>Instructions</label>
        <input placeholder='Instructions' />
      </Form.Field>
      <h3>Proportions</h3>
      {ingredient.map(form => {
        return form();
      })}
      <Button
        onClick={() => {
          setIngredient([...ingredient, IngredientForm]);
        }}
      >
        +
      </Button>
      <Button type='submit'>Submit</Button>
    </Form>
  );
};

const IngredientForm = () => {
  return (
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-ingredient-name'
        control={Select}
        options={options}
        label='Ingredient name'
        placeholder='Ingredient'
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

const handleSubmit = () => {};
const handleChange = () => {};

export default NewCocktailForm;
