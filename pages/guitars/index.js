import { useRouter } from "next/dist/client/router";
import Guitars from "../../components/Guitars";
import Pagination from "../../components/Pagination";

export default function GuitarsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);

  return (
    <div>
      <Pagination page={page || 1} />
      <Guitars page={page || 1} />
      <Pagination page={page || 1} />
    </div>
  )
}