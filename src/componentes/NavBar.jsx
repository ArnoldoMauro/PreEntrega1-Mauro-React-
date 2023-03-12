import '../styles/navbar.css';

function NavBar() {
    return (
        <header>
            <div className='ancho'>
                <div className='logo'>
                    <p><a href='index.html'>Bodega de Campo</a></p>
                </div>
                <nav>    
                    <ul>
                        <li>
                            <a href="/"> Home</a>
                        </li>
                        <li>
                            <a href="/vinos"> Vinos</a>
                        </li>
                        <li>
                            <a href="/espumantes"> Espumantes</a>
                        </li>
                    
                    {/* <div className='carrito'> */}
                        <i className='material-icons'>shopping_cart</i>
                        <span className="cartWidget_count"> 0 </span>
                    {/* </div>  */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;