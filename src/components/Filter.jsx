import "./Filter.css";

const Filter = ({lightMode, inputValue, setinputValue, countries, setcountries, filteredCountries, setfilteredCountries}) => {

    const filterRegion = (e) => {
        if (e.target.value.toLocaleLowerCase() !== "region") {            
            setfilteredCountries(countries.filter(curCountry => curCountry.region.toLowerCase().includes(e.target.value.toLocaleLowerCase())));
        }
        else {
            setfilteredCountries([]);
        }
    }

    return (
        <>
        <div className="filters">
            <form onSubmit={(e) => {e.preventDefault()}}>
                <input 
                type="search"
                name="search" 
                id="search" 
                placeholder="Search for a Country" 
                autoComplete="off"
                value={inputValue}
                onChange={(e) => setinputValue(e.target.value)}
                className={`country-search-input ${lightMode ? "country-search-input-light" : ""}`}
                />
            </form>
            <select name="select" id="select" className={`select ${lightMode ? "select-light" : ""}`} onChange={(e) => filterRegion(e)}>
                <option value="Region">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option> 
                <option value="Europe">Europe</option> 
                <option value="Oceania">Oceania</option> 
            </select>
        </div>
        </>
    )
}
export default Filter;