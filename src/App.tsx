import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <Router>
      <div>
        <MainPage />
      </div>
    </Router>
  );
};

export default App;
