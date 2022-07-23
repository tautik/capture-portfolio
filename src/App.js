import About from "./pages/About";
import Nav from "./components/Nav";
//importing global styles
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <About />
    </div>
  );
}

export default App;
