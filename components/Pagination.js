import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import DisplayError from './ErrorMessage';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY{
    _allGuitarsMeta {
      count
    }
  }
`;


export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return 'Loading...';
  if (error) return <DisplayError error={error} />
  const { count } = data._allGuitarsMeta;
  const pageCount = Math.ceil(count / perPage);
  
  return (
    <PaginationStyles>
      <Head>
        <title>Fret Stop - Page {page} of {pageCount}</title>
      </Head>
      <Link href={`/guitars/${page - 1}`}>
        <a aria-disabled={page <= 1}>← Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items Total</p>
      <Link href={`/guitars/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next →</a>
      </Link>
    </PaginationStyles>
  )
}