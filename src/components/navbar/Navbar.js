import {Component} from "react";
import {Outlet, Link} from "react-router-dom";

/*

The Layout component has <Outlet> and <Link> elements.

*** The <Outlet> renders the current route selected.

*** <Link> is used to set the URL and keep track of browsing history.

Anytime we link to an internal path, we will use <Link> instead of <a href="">.

*/
export class Navbar extends Component {
    render() {
        return (
            /* use <> You can put many html tags </> */
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
                    <div className="container" style={{maxWidth: "290px", margin: "0 auto"}}>
                        <Link className="navbar-brand" to={"/"}>
                            <i className="fa-solid fa-house p-2"></i>Project React Core
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarsExample07">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                       aria-expanded="false">Topic
                                    </a>
                                    <ul className="dropdown-menu">
                                        {/* <Link> is used to set the URL and keep track of browsing history. */}
                                        <li><Link className="dropdown-item" to={"/alerts-with-classes"}>Alerts Message With Class</Link></li>
                                        <li><Link className="dropdown-item" to={"/forms-with-classes"}>Forms Inside Class</Link></li>
                                        <li><Link className="dropdown-item" to={"/forms-with-functions"}>Forms Inside Function</Link></li>
                                        <li><Link className="dropdown-item" to={"/lists-with-classes"}>Lists/Tables Inside Class</Link></li>
                                        <li><Link className="dropdown-item" to={"/apply-events"}>Apply With Events</Link></li>
                                        <li><Link className="dropdown-item" to={"/apply-api"}>Apply With Api</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Outlet/>
            </>
        )
    }
}