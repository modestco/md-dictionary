import logo from "./logo.svg";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a href="https://www.jenluchka.com/" target="_blank" rel="noreferrer">
            <img src={logo} className="logo" alt="modest design Logo" />
          </a>
        </header>
        <Dictionary defaultKeyword="swimming" />
        <footer>
          This project was proudly coded by{" "}
          <a
            href="https://www.jenluchka.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jen Luchka
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/modestco/shecodes-react-addon"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://shecodes-dictionary.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
