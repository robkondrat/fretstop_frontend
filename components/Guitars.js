import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import Guitar from "./Guitar";

export const ALL_GUITARS_QUERY = gql`
  query ALL_GUITARS_QUERY {
    allGuitars {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const GuitarsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Guitars() {
  const { data, error, loading } = useQuery(ALL_GUITARS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <GuitarsListStyles>
        {data.allGuitars.map((guitar) => (
          <Guitar key={guitar.id} guitar={guitar} />
        ))}
      </GuitarsListStyles>
    </div>
  );
}
