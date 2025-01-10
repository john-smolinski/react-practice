import "./App.css";
import { ThemeProvider } from "./context/ThemeProvider";
import ContentComponent from "./components/ContentComponent";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        {/* children that get submitted to the theme provider*/}
        <ContentComponent></ContentComponent>
      </ThemeProvider>
    </div>
  );
}

export default App;
