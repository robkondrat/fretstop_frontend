import CreateGuitar from "../components/CreateGuitar";
import PleaseSignIn from "../components/PleaseSignIn";

export default function SellPage() {
  return (
    <div>
      <PleaseSignIn>
        <CreateGuitar />
      </PleaseSignIn>
    </div>
  );
}
