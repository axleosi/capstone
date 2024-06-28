import React from 'react'
function Header(){
    return(
    <>
        <header class="hcon">
            <div>
            <img src="./images/logo1.jpg" height="50px" width="200px"></img>
            </div>
            <div>
            <nav>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a >Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
            </ul>
        </nav>
            </div>
        </header>
        </>
    )
}

export default Header