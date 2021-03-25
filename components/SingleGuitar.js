import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import DisplayError from "./ErrorMessage";
import Head from 'next/head';
import styled from "styled-components";
import PriceTag from "./styles/PriceTag";
import formatMoney from '../lib/formatMoney';


const GuitarStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    max-height: 500px;
    object-fit: contain;
  }
`;


const SINGLE_GUITAR_QUERY = gql`
  query SINGLE_GUITAR_QUERY($id: ID!) {
    Guitar(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleGuitar({ id }) {
  const { data, loading, error } = useQuery(SINGLE_GUITAR_QUERY, {
    variables: {
      id: id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { Guitar } = data;
  return (
    <GuitarStyles>
      <Head>
        <title>
          Fret Stop | {Guitar.name}
        </title>
      </Head>
      <img src={Guitar.photo.image.publicUrlTransformed} alt={Guitar.photo.altText} />
      <div className="details">
        <h2>{Guitar.name}</h2>
        <p>{Guitar.description}</p>
        <p>{formatMoney(Guitar.price)}</p>
      </div>
    </GuitarStyles>
  );
}
