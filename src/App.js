import Background from "./components/Background";
import { ThemeProvider } from "./components/ThemeContext";
// import Toggle from "./components/Toggle";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <Background>
        <Home/>
      </Background>
    </ThemeProvider>
  );
}

export default App;
