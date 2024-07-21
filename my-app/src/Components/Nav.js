import { Link } from "react-router-dom"
export default function Nav(){
    return(
        <header>
        <nav className="hcon">
            <div>
                <Link to="/"> <img src="../images/logo1.jpg" alt="A picture of the little lemon logo" height='50px' width='200px'/></Link>
            </div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/reservation">Reservation</Link>
                <Link to="/order">Order Online</Link>
                <Link to="/login">Login</Link>
                <Link to="/comfirmbooking"></Link>
            </ul>
        </nav>
        </header>
    )
}