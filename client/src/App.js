import "./App.css";
import Lists from "./moudule/components/Lists";
import Forms from "./moudule/components/Forms";

import cakes from "./cakeData";

function App() {

  return (
    <div className="App">
      {/* <ul>{listItems}</ul> */}
      <Lists cakeList={cakes} />
      <Forms />
    </div>
  );
}

export default App;
