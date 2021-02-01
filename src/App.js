import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "./components/router/Routing";
import "./components/shared/css/common.css";
import UserDetailsTemplate from "./components/template/UserDetailsTemplate";

function App() {
  return (
    <div className="App">
      <UserDetailsTemplate />
      <Routing />
    </div>
  );
}

export default App;
