import Guitars from "../components/Guitars";
import Pagination from "../components/Pagination";

export default function GuitarsPage() {
  return (
    <div>
      <Pagination page={1} />
      <Guitars />
      <Pagination page={1} />
    </div>
  )
}