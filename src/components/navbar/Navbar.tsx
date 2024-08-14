import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link to={"/"}>Inicio</Link></li>
                <li><Link to={"/about"}>About</Link></li>
            </ul>
        </nav>
    )
}