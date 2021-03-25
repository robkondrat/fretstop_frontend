import UpdateGuitar from "../components/UpdateGuitar";

export default function UpdatePage({ query }) {
  console.log(query);
  return (
    <div>
      <UpdateGuitar id={query.id} />
    </div>
  )
}