import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React and Morty</h1>
      </header>

      <section>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt="Morty Smith"
        />
        <h2>Morty Smith</h2>
      </section>

      <nav>
        <div>Link</div>
        <div>Link</div>
        <div>Link</div>
        <div>Link</div>
      </nav>
    </div>
  );
}

export default App;
