import { Link } from "react-router-dom";



const Header = () => {
    return (
        <header className="px-20 h-23 flex items-center justify-center">
            <div className="container flex justify-between items-center">
                <div className="logo">
                    <h1 className="text-[var(--color-primary)] text-5xl font-semibold uppercase -rotate-6 animate-bounce">{"< Rawaa />"}</h1>
                </div>
                <div className="links">
                    <ul className="flex items-center gap-7 text-[#ccc] text-lg ">
                        <li>
                            <Link to = "/" className="hover:text-[var(--color-primary)] transition-colors duration-300">Home</Link>
                        </li>
                        <li>
                            <Link to = "/skills" className="hover:text-[var(--color-primary)] transition-colors duration-300">Skills</Link>
                        </li>
                        <li>
                            <Link to = "/projects" className="hover:text-[var(--color-primary)] transition-colors duration-300">Projects</Link>
                        </li>
                        <li>
                            <Link to = "/contact" className="hover:text-[var(--color-primary)] transition-colors duration-300">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;