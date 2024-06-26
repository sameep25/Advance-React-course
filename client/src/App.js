import "./App.css";
import Lists from "./moudule/components/Lists";
import Forms from "./moudule/components/Forms";
import UseStateHook from "./moudule/components/hooks/UseStateHook";

import cakes from "./cakeData";
// import { ThemeProvider } from "./context/ThemeContext";
import Switch from "./moudule/components/Switch";

function App() {
  return (
    <div className="App">
      {/* <ul>{listItems}</ul> */}
      {/* <Lists cakeList={cakes} />
      <Forms />
      <Switch /> */}
      <UseStateHook />
    </div>
  );
}

export default App;
