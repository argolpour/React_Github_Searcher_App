import { Link } from "react-router-dom"
import './Header.css'
const Header = () => {
    return (
       <header className="header">
           <div className="logo">
           <i class="fab fa-github"></i>
               <h3>GitHub Finder</h3>
           </div>
           <nav className="nav">
               <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/about">About</Link></li>
                   
               </ul>
           </nav>
       </header>
    )
}

export default Header
