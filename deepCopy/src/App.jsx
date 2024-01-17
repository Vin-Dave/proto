import { Header } from "./components/Header/Header";
import { SectionList } from "./components/SectionList/SectionList";
import { CategoryComponent } from "./components/CategoryComponent/CategoryComponent";
function App() {
  return (
    <div>
      <Header />
      <main>
        <SectionList />
        <CategoryComponent />
      </main>
    </div>
  );
}

export default App;
