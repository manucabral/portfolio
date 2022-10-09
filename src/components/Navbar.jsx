export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a className="navbar-item__link" href="#about">
                        About
                    </a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-item__link" href="#techs">
                        Technologies
                    </a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-item__link" href="#projects">
                        Projects
                    </a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-item__link" href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}
