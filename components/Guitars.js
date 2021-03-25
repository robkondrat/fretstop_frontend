import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import { perPage } from "../config";
import Guitar from "./Guitar";

export const ALL_GUITARS_QUERY = gql`
  query ALL_GUITARS_QUERY($skip: Int = 0, $first: Int) {
    allGuitars(first: $first, skip: $skip) {
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

export default function Guitars({ page }) {
  const { data, error, loading } = useQuery(ALL_GUITARS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });
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
