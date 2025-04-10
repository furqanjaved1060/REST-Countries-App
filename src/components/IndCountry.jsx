import { Link, useParams } from "react-router-dom";
import "./IndCountry.css"
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect, useState } from "react";

const IndCountry = ({lightMode, setinputValue}) => {

    const [country, setcountry] = useState([]);
    const {name} = useParams();

    useEffect(() => {
        const fetchCountryData = async() => {
            const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
            const country = await res.json();
            setcountry(country[0]);
        }
        fetchCountryData()
    },[])

    if (Object.keys(country).length !== 0) {

        const currencyCode = Object.keys(country.currencies)[0];
        const currency = country.currencies[currencyCode].name;
        const languages = Object.values(country.languages);

        return (
            <>
            <div className="main-container">
                <Link className={`back ${lightMode ? "back-light" : ""}`} to="/" onClick={()=>setinputValue("")}><IoMdArrowRoundBack className="arrow"/> Back</Link>
                <div className="country-data-container">
                    <div className="flag">
                        <img src={country.flags.svg} alt="" />
                    </div>
                    <div className="right-info-container">
                        <h3>{country.name.common}</h3>
                        <div className="info-grid">
                            <h4>Official Name: <span>{country.name.official}</span></h4>
                            <h4>Population: <span>{country.population}</span></h4>
                            <h4>Region: <span>{country.region}</span></h4>
                            <h4>Sub Region: <span>{country.subregion}</span></h4>
                            <h4>Capital: <span>{country.capital[0]}</span></h4>
                            <h4>Top Level Domain: <span>{country.tld[0]}</span></h4>
                            <h4>Currencies: <span>{currency}</span></h4>
                            <h4>Languages: <span>{languages.join(", ")}</span></h4>
                        </div>
                        <div className="border-countries">
                            <h4>Border Countries:</h4>
                            {Boolean(country.borders)? 
                            <ul className="bdrcnt-list">
                                {country.borders.map((curElem) => {
                                    return <li className={`bdrcnt-list-li ${lightMode ? "bdrcnt-list-li-light" : ""}`}>{curElem}</li>;
                                })}
                            </ul>
                            :
                            <span className={`bdrcnt-list-li ${lightMode ? "bdrcnt-list-li-light" : ""}`}>None</span>
                            }
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default IndCountry;