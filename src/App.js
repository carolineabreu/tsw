import { Route, Routes } from "react-router-dom";
import countries from "./data";
import { CountryInfo } from "./pages/CountryInfo";
import { CountryList } from "./pages/CountryList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/country-list"
          element={<CountryList countries={countries} />}
        />
        <Route
          path="/:id"
          element={<CountryInfo countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
