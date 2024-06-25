import "./App.css";
import Lists from "./moudule/components/Lists";
import Forms from "./moudule/components/Forms";

import cakes from "./cakeData";
import { ThemeProvider } from "./context/ThemeContext";
import Switch from "./moudule/components/Switch";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* <ul>{listItems}</ul> */}
        <Lists cakeList={cakes} />
        <Forms />
        <Switch />
      </div>
    </ThemeProvider>
  );
}

export default App;
