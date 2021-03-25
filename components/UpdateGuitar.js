import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import useForm from "../lib/useForm";
import DisplayError from "./ErrorMessage";
import Form from "./styles/Form";

const SINGLE_GUITAR_QUERY = gql`
  query SINGLE_GUITAR_QUERY($id: ID!) {
    Guitar(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

const UPDATE_GUITAR_MUTATION = gql`
  mutation UPDATE_GUITAR_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateGuitar(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;

export default function UpdateGuitar({ id }) {
  const { data, error, loading } = useQuery(SINGLE_GUITAR_QUERY, {
    variables: {
      id,
    },
  });

  const [
    updateGuitar,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_GUITAR_MUTATION);
  // 2.5 create some state for the form inputs
  const { inputs, handleChange, clearForm, resetForm } = useForm(data?.Guitar);
  console.log(inputs)
  if (loading) return <p>Loading...</p>;

  // 3. need the form to handle the updates
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await updateGuitar({
          variables: {
            id,
            name: inputs.name,
            description: inputs.description,
            price: inputs.price,
          }
        }).catch(console.error);
        console.log(res);
        // submit the input fields to the backend:
        // const res = await createGuitar();
        // clearForm();
        // Router.push({
        //   pathname: `/product/${res.data.createGuitar.id}`,
        // });
      }}
    >
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
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
      </fieldset>

      <button type="submit">Update Guitar</button>

      {/* <button type="button" onClick={clearForm}>Clear Form</button>
      <button type="button" onClick={resetForm}>Reset Form</button> */}
    </Form>
  );
}
