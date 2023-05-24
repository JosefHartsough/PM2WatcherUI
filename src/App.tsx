import { BrowserRouter } from "react-router-dom";
import { RouteList } from "./routes/RouteList.routes";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
