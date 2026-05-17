import Headers from "./components/Headers";
import DataList from "./components/DataList";

function App() {
  return (
    <>
      <Headers />
      <section>
        <DataList data={[]} />
      </section>
    </>
  );
}

export default App;
