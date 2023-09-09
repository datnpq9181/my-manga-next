import Navbar from "./navbar";
import Manga from "./manga";

export default function Home() {
  return (
    <div>
      <div className="dark container mx-auto px-4">
        <Navbar />
        <Manga />
      </div>
    </div>
  );
}
