import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import useForm from "../lib/useForm";
import Form from "./styles/Form";
import DisplayError from "./ErrorMessage";
import { ALL_GUITARS_QUERY } from "./Guitars";
import Router from "next/router";

const CREATE_GUITAR_MUTATION = gql`
  mutation CREATE_GUITAR_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createGuitar(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function CreateGuitar() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: "",
    price: "",
    description: "",
  });

  const [createGuitar, { loading, error, data }] = useMutation(
    CREATE_GUITAR_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_GUITARS_QUERY }],
    }
  );

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        // submit the input fields to the backend:
        const res = await createGuitar();
        clearForm();
        Router.push({
          pathname: `/product/${res.data.createGuitar.id}`,
        });
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="image">
          Image
          <input type="file" id="image" name="image" onChange={handleChange} />
        </label>
      </fieldset>

      <button type="submit">+ Add Guitar</button>

      {/* <button type="button" onClick={clearForm}>Clear Form</button>
      <button type="button" onClick={resetForm}>Reset Form</button> */}
    </Form>
  );
}
