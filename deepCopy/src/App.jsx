import { List } from "./components/List";
import { TabButton } from "./components/TabButton";
import { CORE_CONCEPTS } from "./utils/CORE_CONCEPTS";
import { EXAMPLES } from "./utils/CORE_CONCEPTS";
function App() {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];

  const randomReactDescriptions = () => {
    return Math.floor(Math.random() * (reactDescriptions.length + 1));
  };

  const handleChangeValue = () => {};
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[randomReactDescriptions()]} React concepts you will
          need for almost any app you are going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((element) => (
              <List {...element} key={element.title} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton handleClick={() => handleChangeValue}>
              COMPONENTS
            </TabButton>
            <TabButton handleClick={() => handleChangeValue}>JSX</TabButton>
            <TabButton>PROPS</TabButton>
            <TabButton>STATE</TabButton>
          </menu>
          <div id="tab-content">
            <h3>2</h3>
            <p>2</p>
            <pre>
              <code>2</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
