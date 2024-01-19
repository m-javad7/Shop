import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export const Navbar=()=>{
    return(
        <div className="navbar navbar-dark bg-dark navbar-expand-lg">
            <diV className="container">
                <a className="navbar-brand">Shop MJ</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link">
                            <FontAwesomeIcon icon={faShoppingCart}/>
                        </Link>
                    </li>
                </ul>
            </diV>

        </div>
    )
}