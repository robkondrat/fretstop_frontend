import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const DELETE_GUITAR_MUTATION = gql`
  mutation DELETE_GUITAR_MUTATION($id: ID!) {
    deleteGuitar(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteGuitar));
}

export default function DeleteGuitar({ id, children }) {
  const [deleteGuitar, { loading, error }] = useMutation(DELETE_GUITAR_MUTATION, {
    variables: {
      id,
    },
    update,
  });

  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => {
        if (confirm("Are you sure you want to delete this guitar?")) {
          console.log("DELETE");
          deleteGuitar().catch(err => alert(err.message));
        }
      }}
    >
      {children}
    </button>
  );
}
