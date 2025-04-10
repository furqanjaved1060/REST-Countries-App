import "./Header.css"
import { FaMoon } from "react-icons/fa";

const Header = ({lightMode, setlightMode}) => {

    const changeMood = () => {
        setlightMode(!lightMode);
        document.body.classList.toggle("body-light");
        document.querySelector(".header").classList.toggle("header-light");
    }

    return (
        <>
        <header className="header">
            <div>
                <h1>Where in the world?</h1>
            </div>
            <div className="mode" onClick={() => changeMood()}>
               <FaMoon className="moon"/><span>{!lightMode? "Light Mode":"Dark Mode"}</span>
            </div>
        </header>
        </>
    )
}
export default Header;