import { useState } from "react";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import Header from "./components/Header";
import IndCountry from "./components/IndCountry"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [countries, setcountries] = useState([]);
  const [filteredCountries, setfilteredCountries] = useState([]);
  const [lightMode, setlightMode] = useState(false);
  const [inputValue, setinputValue] = useState("");
  return (
    <Router>
        <Header lightMode={lightMode} setlightMode={setlightMode} />
        <Routes>
          <Route 
          path="/"
          element={
            <>
            <Filter lightMode={lightMode} inputValue={inputValue} setinputValue={setinputValue} countries={countries} setcountries={setcountries} filteredCountries={filteredCountries} setfilteredCountries={setfilteredCountries}/>
            <Countries lightMode={lightMode} inputValue={inputValue} countries={countries} setcountries={setcountries} filteredCountries={filteredCountries} setfilteredCountries={setfilteredCountries} />
            </>
          }
          />
          <Route
          path="/countries/:name"
          element={
            <>
            <IndCountry lightMode={lightMode} setinputValue={setinputValue}/>
            </>
          }/>
        </Routes>
    </Router>
  )
}
export default App;