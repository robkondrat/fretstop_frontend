import Link from "next/link";
import ItemStyles from "./styles/ItemStyles";
import Title from "./styles/Title";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
import DeleteGuitar from "./DeleteGuitar";

export default function Guitar({ guitar }) {
  return (
    <ItemStyles>
      <img src={guitar?.photo?.image.publicUrlTransformed} alt={guitar.name} />
      <Title>
        <Link href={`/guitar/${guitar.id}`}>{guitar.name}</Link>
      </Title>
      <PriceTag>{formatMoney(guitar.price)}</PriceTag>
      <p>{guitar.description}</p>
      <div className="buttonList">
        <Link
          href={{
            pathname: "update",
            query: {
              id: guitar.id,
            },
          }}
        >
          Edit ✏
        </Link>
        <DeleteGuitar id={guitar.id}>Delete</DeleteGuitar>
      </div>
    </ItemStyles>
  );
}
