import { useEffect } from "react";
import "./Countries.css"
import { Link } from "react-router-dom";

const Countries = ({lightMode, inputValue, countries, setcountries, filteredCountries, setfilteredCountries}) => {

    const array = filteredCountries.length !== 0 ? filteredCountries : countries;

    useEffect(() => {
        const fetchCountiresData = async() => {
            const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital");
            const countries = await res.json();
            setcountries(countries);
        }
        fetchCountiresData()
    },[])

    useEffect(() => {
        if (inputValue !== "") {
            setfilteredCountries(countries.filter(curCountry => curCountry.name.common.toLowerCase().includes(inputValue.toLowerCase())));
        }
        if (inputValue === "")  {
            setfilteredCountries([]);
        }
    }, [inputValue])

    return (
        <>
        <div className="grid-container-countries">
            {array.map((curElem) => {
                const {flags, name, population, region, capital} = curElem;
                return (
                    <div className={`single-country-card ${lightMode ? "single-country-card-light" : ""}`}>
                        <Link to={`/countries/${name.common}`}><div className="flag-container" style={{backgroundImage: `url(${flags.svg})`}}></div></Link>
                        <div className="country-details">
                            <h3>{name.common}</h3>
                            <h4>Population: <span>{Number(population).toLocaleString()}</span></h4>
                            <h4>Region: <span>{region}</span></h4>
                            <h4>Capital: <span>{capital}</span></h4>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}
export default Countries;
