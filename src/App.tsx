import Moods from "./components/moods";
import Categories from "./components/categories";
import Submit from "./components/submit";
import Affirmations from "./components/affirmations";
import Header from "./components/header";

function App() {
  return (
    <div className="prose max-w-none w-full">
      <div className="max-w-xl mx-auto px-8">
        <Header />
        <Moods />
        <Categories />
        <Affirmations />
        <Submit />
      </div>
    </div>
  );
}

export default App;
