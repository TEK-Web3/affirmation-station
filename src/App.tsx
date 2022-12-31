import Moods from "./components/moods";
import Categories from "./components/categories";
import Submit from "./components/submit";
import PoweredBy from "./components/poweredBy";

function App() {
  return (
    <div className="prose max-w-none w-full mb-28 lg:mb-0">
      <div className="max-w-xl mx-auto px-8">
        <Moods />
        <Categories />
        <Submit />
        <div className="hidden lg:flex mt-10">
          <PoweredBy />
        </div>
      </div>
    </div>
  );
}

export default App;
